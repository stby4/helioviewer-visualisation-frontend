import Chart from './Chart'
import style from './style'

/**
 * Timeline component, try to keep all timeline related code here so it can eventually be exported to the helioviewer website
 *
 * @returns {string} The timeline HTML
 */
<<<<<<< HEAD
const Timeline = () =>
    `<div class="${style.border}">
        <span class="${style.temporary_text}">Hello World NEW</span>
    </div>`
=======
const TimelineMarkup = () => `<div id="${style.chart}"></div>`
>>>>>>> 5c147ff99d324f06909042ec4e0447dd2bee5384

export const Timeline = () => Chart(style.chart)
export default TimelineMarkup
