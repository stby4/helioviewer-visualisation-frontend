import Highcharts from 'highcharts'
import style from './style'

/**
 * Creates a highchart object
 * @param {string} container - The ID for the highcharts container
 * @returns {*} Highchart element (I think. I have some reading to do...)
 */
const Chart = container =>
    Highcharts.chart(container, {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Fruit Consumption',
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges'],
        },
        yAxis: {
            title: {
                text: 'Fruit eaten',
            },
        },
        series: [
            {
                name: 'Jane',
                data: [1, 0, 4],
            },
            {
                name: 'John',
                data: [5, 7, 3],
            },
        ],
    })

export default Chart
