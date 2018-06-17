import Chart from './Chart'
import style from './style'

/**
 * Timeline component, try to keep all timeline related code here so it can eventually be exported to the helioviewer website
 *
 * @returns {string} The timeline HTML
 */
const TimelineMarkup = () => `<div class="${style.zoombar}"><a id="zoom-back" class="${style.zoom}" href="#">Step back</a></div><div id="${style.chart}"></div>`
export const Timeline = () => Chart(style.chart, 'zoom-back')
export default TimelineMarkup
