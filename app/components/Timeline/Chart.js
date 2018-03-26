import Highcharts from 'highcharts'
import style from './style'
import demoDateValues from './demoDateValues'
import boost from 'highcharts/modules/boost';
boost(Highcharts);
/**
 * Creates a highchart object
 * @param {string} container - The ID for the highcharts container
 * @returns {*} Highchart element (I think. I have some reading to do...)
 */

const Chart = container =>
    Highcharts.chart(container, {
        chart: {
            zoomType: 'x',
        },
        xAxis: {
            type: 'datetime',
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click() {
                            alert('Date: ' + Highcharts.dateFormat('%Y %m %d %H %M %S \n', this.x) + 'Value: ' + this.y)
                        },
                    },
                },
            },
        },
        title: {
            text: 'Solar Event Timeline',
        },
        yAxis: {
            type: 'logarithmic',
            minorTickInterval: 0.1,
            title: {
                text: 'Radiation',
            },
            plotBands: [
                {
                    // A-Flare
                    from: 0,
                    to: 10,
                    //zIndex: 5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'A-Flare',
                        style: {
                            color: '#606060',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // B-Flare
                    from: 10,
                    to: 100,
                    //zIndex: 5,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'B-Flare',
                        style: {
                            color: '#606060',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // C-Flare
                    from: 100,
                    to: 1000,
                    //zIndex: 5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'C-Flare',
                        style: {
                            color: '#606060',
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
                        style: {
                            color: '#606060',
                            fontWeight: 'bold'
                        },
                    },
                },
                {
                    // X-Flare
                    from: 10000,
                    to: 1000000000,
                    zIndex: 5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'X-Flare',
                        style: {
                            color: '#606060',
                            fontWeight: 'bold'
                        },
                    },
                },
            ],
        },
        series: [
            {
                // Set Startdate of data
                pointStart: Date.UTC(2012, 2, 6, 10),
                // Set Timeintervall to 3 seconds
                pointInterval: 1000 * 3,
                lineWidth: 0.7,
                name: 'Radiation',
                data: demoDateValues
            },
        ],
    })

export default Chart
