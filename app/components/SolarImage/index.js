import style from './style'

//official Demo:
//https://api.helioviewer.org/v2/takeScreenshot/?imageScale=2.4204409&layers=[SDO,AIA,AIA,304,1,100]&events=&eventLabels=true&scale=true&scaleType=earth&scaleX=0&scaleY=0&date=2014-02-25T15:53:00.136Z&x1=-929.2475775696686&x2=106.70112763033143&y1=-970.7984919973343&y2=486.3069298026657&display=true&watermark=true&events=[CH,all,1]
//Modified Link:
//https://legacy.helioviewer.org/api/v1/takeScreenshot/?imageScale=4&layers=[SDO,AIA,AIA,304,1,100]&events=&eventLabels=false&scale=false&scaleType=earth&scaleX=0&scaleY=0&date=2014-02-25T15:53:00Z&x1=-1300&x2=1300&y1=-1300&y2=1300&display=true&watermark=false

const SolarImagePreview = (timestamp) =>
`<div id="${style.previewContainer}"><img src="https://legacy.helioviewer.org/api/v1/takeScreenshot/?imageScale=4&layers=[SDO,AIA,AIA,304,1,100]&events=&eventLabels=false&scale=false&scaleType=earth&scaleX=0&scaleY=0&date=${timestamp}&x1=-1300&x2=1300&y1=-1300&y2=1300&display=true&watermark=false" id="${
    style.solarImage
    }" alt="Solar Image Preview"><div class="${style.time}">${timestamp}</div><div><a class="${style.button}" href="https://helioviewer.org/?date=${timestamp}" target="_blank">View on helioviewer.org</a></div></div>`

export default SolarImagePreview
