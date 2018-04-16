import style from './style'

const SolarImagePreview = (timestamp, imageURL) =>
    `<div id="${style.previewContainer}"><img src="${imageURL}" id="${
        style.solarImage
    }" alt="Solar Image Preview"><div class="${style.time}">${timestamp}</div></div>`

export default SolarImagePreview
