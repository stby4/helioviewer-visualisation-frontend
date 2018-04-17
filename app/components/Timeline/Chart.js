import Highcharts from 'highcharts'
import style from './style'
import { Theme } from './Theme'
import demoDateValues from './demoDateValues'
import { timelineData } from '../../modules/loader'
import boost from 'highcharts/modules/boost'
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

const Chart = container => {
    return timelineData('2017-01-01:00:00:00', '2018-01-01:00:00:00').then(data => Highcharts.chart(container, {
        chart: {
            height: 300,
            zoomType: 'x',
            marginLeft: 150,
            resetZoomButton: {
                position: {
                    /*
                     * align: 'right', // by default
                     * verticalAlign: 'top', // by default
                     */
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
            /*
             *             events: {
             * click: function(event) {
             * cursor: 'pointer',
             * alert (
             * 'Date: ' + Highcharts.dateFormat('%Y %m %d %H %M %S \n', event.xAxis[0].value) + 'Value: ' + event.yAxis[0].value
             * );
             * }
             * } 
             */
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
            /*  millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%d    .%m.%Y',
                week: '%m.%Y',
                month: '%m\'%Y',
                year: '%Y' */
            },
            labels: {
                style: {
                    fontSize: labelFontSize
                }
            }
        },
        title: {
            text: 'Solar Activity Timeline',
        },
        yAxis: {
            type: 'logarithmic',
            /*
             *additional horizontal dividers in chart
             *minorTickInterval: 0.1, 
             */
            title: {
                text: 'X-ray Flux',
                x: 0,
                style: {
                    fontSize: '14pt'
                }
            },
            labels: {
                x: -40,
                style: {
                    fontSize:labelFontSize
                }
            },
            gridLineWidth: 0,
            tickLength: 0,
            plotBands: [
                {
                    // A-Flare
                    from: 0,
                    to: 10,
                    // zIndex: 5,
                    color: 'rgba(40, 40, 40, 40)',
                    borderwidth: '100',
                    borderColor: '#FFFF',
                    label: {
                        text: 'A',
                        x: -20,
                        style: {
                            color: labelColor,
                            fontWeight: 'bold',
                            fontSize: labelFontSize,
                        },
                    },
                },
                {
                    // B-Flare
                    from: 10,
                    to: 100,
                    // zIndex: 4,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'B',
                        x: -45,
                        style: {
                            color: labelColor,
                            fontWeight: 'bold',
                            fontSize: labelFontSize,
                        },
                    },
                },
                {
                    // C-Flare
                    from: 100,
                    to: 1000,
                    // zIndex: 5,
                    color: 'rgba(40, 40, 40, 40)',
                    label: {
                        text: 'C',
                        x: -45,
                        style: {
                            color: labelColor,
                            fontWeight: 'bold',
                            fontSize: labelFontSize,
                        },
                    },
                },
                {
                    // M-Flare
                    from: 1000,
                    to: 10000,
                    // zIndex: 5,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'M',
                        x: -45,
                        style: {
                            color: labelColor,
                            fontWeight: 'bold',
                            fontSize: labelFontSize,
                        },
                    },
                },
                {
                    // X-Flare
                    from: 10000,
                    to: 1000000000,
                    // zIndex: 5,
                    color: 'rgba(40, 40, 40, 40)',
                    label: {
                        text: 'X',
                        x: -45,
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
                allowPointSelect: true,
                cursor: 'pointer',
                point: {
                    events: {
                        click() {
                            alert('Date: ' + Highcharts.dateFormat('%Y %m %d %H %M %S \n', this.x) + 'Value: ' + this.y)
                        },
                    },
                },
                // lineWidth: 0.7,
            },
        },
        series: [
            {
                showInLegend: false,
                data: data
            },
        ],
    }))
}

export default Chart
