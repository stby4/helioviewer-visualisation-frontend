import Highcharts from 'highcharts'
import style from './style'
import {Theme} from './Theme'
import demoDateValues from './demoDateValues'
import boost from 'highcharts/modules/boost';
boost(Highcharts);
/**
 * Creates a highchart object
 * @param {string} container - The ID for the highcharts container
 * @returns {*} Highchart element (I think. I have some reading to do...)
 */
Highcharts.theme = Theme
   // Apply the theme
   Highcharts.setOptions(Highcharts.theme);

const Chart = container =>
    Highcharts.chart(container, {
        chart: {
            height: 300,
            zoomType: 'x',
            marginLeft: 150,
            resetZoomButton: {
                position: {
                    // align: 'right', // by default
                    // verticalAlign: 'top', // by default
                    x: -10,
                    y: -40
                },
                theme: {
                    fill: 'white',
                    r: 0,
                    //text: 'Zurücksetzen',
                    states: {
                        hover: {
                            fill: 'grey',
                            style: {
                                color: 'white'
                            },
                        },
                    },
                },
            },
/*             events: {
                click: function(event) {
                    cursor: 'pointer',
                    alert (
                    'Date: ' + Highcharts.dateFormat('%Y %m %d %H %M %S \n', event.xAxis[0].value) + 'Value: ' + event.yAxis[0].value
                    );
                }
            } */
        },
        xAxis: {
            type: 'datetime',
        },
        title: {
            text: 'Solar Event Timeline',
        },
        yAxis: {
            type: 'logarithmic',
            //additional horizontal dividers in chart
            //minorTickInterval: 0.1, 
            title: {
                text: 'Radiation',
                x: -15,
            },
            labels: {
                x: -70,
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
                        text: 'A-Flare',
                        x: -45,
                        style: {
                            color: '#E0E0E3',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // B-Flare
                    from: 10,
                    to: 100,
                    //zIndex: 4,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'B-Flare',
                        x: -45,
                        style: {
                            color: '#E0E0E3',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // C-Flare
                    from: 100,
                    to: 1000,
                    //zIndex: 5,
                    color: 'rgba(40, 40, 40, 40)',
                    label: {
                        text: 'C-Flare',
                        x: -45,
                        style: {
                            color: '#E0E0E3',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // M-Flare
                    from: 1000,
                    to: 10000,
                    //zIndex: 5,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'M-Flare',
                        x: -45,
                        style: {
                            color: '#E0E0E3',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // X-Flare
                    from: 10000,
                    to: 1000000000,
                    //zIndex: 5,
                    color: 'rgba(40, 40, 40, 40)',
                    label: {
                        text: 'X-Flare',
                        x: -45,
                        style: {
                            color: '#E0E0E3',
                            fontWeight: 'bold'
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
                //lineWidth: 0.7,
            },
        },
        series: [
            {
                name: 'Radiation',
                data: demoDateValues
            },
        ],
    })

export default Chart
