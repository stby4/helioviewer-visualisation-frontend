import Highcharts from 'highcharts'
import style from './style'
import { Theme } from './Theme'
import demoDateValues from './demoDateValues'
import { timelineData } from '../../modules/loader'
import boost from 'highcharts/modules/boost'
import SolarImagePreview from 'components/SolarImage'

boost(Highcharts)
/**
 * Creates a highchart object
 * @param {string} container - The ID for the highcharts container
 * @returns {*} Highchart element (I think. I have some reading to do...)
 */
Highcharts.theme = Theme
// Apply the theme
Highcharts.setOptions(Highcharts.theme)

const labelFontSize = '11pt'
const labelColor = '#E0E0E3'
var labelFluxXPosition = -20


const Chart = container => {
    return timelineData('2008-01-01:00:00:00', '2018-04-12:00:00:00').then(data =>
        Highcharts.chart(container, {
            chart: {
                height: 300,
                zoomType: 'x',
                marginLeft: 150,
                resetZoomButton: {
                    position: {
                        x: -10,
                        y: -40,
                    },
                    theme: {
                        fill: 'white',
                        r: 0,
                        // text: 'Zurücksetzen',
                        states: {
                            hover: {
                                fill: 'grey',
                                style: {
                                    color: 'white',
                                },
                            },
                        },
                    },
                },

                //cick events on the whole chart
                /*
                events: {
                    click(event) {
                        cursor: 'pointer',
                        alert (
                            'Date: ' + Highcharts.dateFormat('%Y %m %d %H %M %S \n', event.xAxis[0].value) + 'Value: ' + event.yAxis[0].value
                        );
                    }
                }, 
                */
            },
            xAxis: {
                events: {
                    setExtremes:function(event) {
                        alert(
                            'Min: ' + event.min + '\nMax: ' + event.max
                        )
                        
                    },
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    /*
             *  millisecond: '%H:%M:%S.%L',
             * second: '%H:%M:%S',
             * minute: '%H:%M',
             * hour: '%H:%M',
             * day: '%d    .%m.%Y',
             * week: '%m.%Y',
             * month: '%m\'%Y',
             *year: '%Y' 
             */
                },
                labels: {
                    style: {
                        fontSize: labelFontSize,
                    },
                },
            },
            title: {
                text: 'Solar Activity Timeline',
            },
            yAxis: {
                type: 'logarithmic',
                min: 0.000000009,
                /*
             *additional horizontal dividers in chart
             *minorTickInterval: 0.1, 
             */
                title: {
                    text: 'X-ray Flux',
                    x: 0,
                    style: {
                        fontSize: '14pt',
                    },
                },
                labels: {
                    x: -40,
                    style: {
                        fontSize: labelFontSize,
                    },
                },
                gridLineWidth: 1,
                tickLength: 35,
                plotBands: [
                    {
                        // A-Flare
                        from: 0,
                        to: 0.0000001,
                        color: 'rgba(40, 40, 40, 40)',
                        borderwidth: '100',
                        borderColor: '#FFFF',
                        label: {
                            text: 'A',
                            x: labelFluxXPosition,
                            style: {
                                color: labelColor,
                                fontWeight: 'bold',
                                fontSize: labelFontSize,
                            },
                        },
                    },
                    {
                        // B-Flare
                        from: 0.0000001,
                        to: 0.000001,
                        color: 'rgba(0, 0, 0, 0)',
                        label: {
                            text: 'B',
                            x: labelFluxXPosition,
                            style: {
                                color: labelColor,
                                fontWeight: 'bold',
                                fontSize: labelFontSize,
                            },
                        },
                    },
                    {
                        // C-Flare
                        from: 0.000001,
                        to: 0.00001,
                        color: 'rgba(40, 40, 40, 40)',
                        label: {
                            text: 'C',
                            x: labelFluxXPosition,
                            style: {
                                color: labelColor,
                                fontWeight: 'bold',
                                fontSize: labelFontSize,
                            },
                        },
                    },
                    {
                        // M-Flare
                        from: 0.00001,
                        to: 0.0001,
                        // zIndex: 5,
                        color: 'rgba(0, 0, 0, 0)',
                        label: {
                            text: 'M',
                            x: labelFluxXPosition,
                            style: {
                                color: labelColor,
                                fontWeight: 'bold',
                                fontSize: labelFontSize,
                            },
                        },
                    },
                    {
                        // X-Flare
                        from: 0.0001,
                        to: 1000000000,
                        color: 'rgba(40, 40, 40, 40)',
                        label: {
                            text: 'X',
                            x: labelFluxXPosition,
                            style: {
                                color: labelColor,
                                fontWeight: 'bold',
                                fontSize: labelFontSize,
                            },
                        },
                    },
                ],
            },
            plotOptions: {
                series: {
                    name: "X-ray Flux",
                    allowPointSelect: true,
                    cursor: 'pointer',
                    point: {
                        events: {
                           click:function(event) {
                               /*
                                alert(
                                    'Date: ' +
                                        Highcharts.dateFormat('%Y-%m-%dT%H:%M:%SZ\n', this.x) +
                                        'Value: ' +
                                        this.y
                                ) */ 
                                if(Highcharts.dateFormat('%Y', this.x ) < 2010){
                                document.getElementById('preview').innerHTML = SolarImagePreview(Highcharts.dateFormat('%Y-%m-%dT%H:%M:%SZ', this.x), Highcharts.dateFormat('%Y/%m/%d %H:%M:%S UTC - Satellite: SOHO', this.x,), 'SOHO,EIT,EIT')
                                }else{
                                document.getElementById('preview').innerHTML = SolarImagePreview(Highcharts.dateFormat('%Y-%m-%dT%H:%M:%SZ', this.x), Highcharts.dateFormat('%Y/%m/%d %H:%M:%S UTC - Satellite: SDO ', this.x,), 'SDO,AIA,AIA')    
                                }
                            },
                        },
                    },
                    // lineWidth: 0.7,
                },
            },
            series: [
                {
                    showInLegend: false,
                data
                },
            ],
        })
    )
}

export default Chart
