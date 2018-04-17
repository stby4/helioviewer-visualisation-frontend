import style from './style'

const SolarImagePreview = (timestamp, imageURL) =>
    `<div id="${style.previewContainer}"><img src="${imageURL}" id="${
    style.solarImage
    }" alt="Solar Image Preview"><div class="${style.time}">${timestamp}</div><div><a class="${style.button}" href="https://helioviewer.org/" target="_blank">View on helioviewer.org</a></div></div>`

export default SolarImagePreview
