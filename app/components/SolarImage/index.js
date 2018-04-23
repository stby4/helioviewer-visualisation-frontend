import style from './style'

//Modified Link (replace the existing img src):
//<img src="https://legacy.helioviewer.org/api/v1/takeScreenshot/?imageScale=4&layers=[SDO,AIA,AIA,304,1,100]&events=&eventLabels=false&scale=false&scaleType=earth&scaleX=0&scaleY=0&date=${timestamp}&x1=-1300&x2=1300&y1=-1300&y2=1300&display=true&watermark=false" 

const SolarImagePreview = (timestamp, displayTime) =>
`<div id="${style.previewContainer}">
<img src="./media/sun.png" 

id="${style.solarImage}" alt="Solar Image Preview"><div class="${style.time}">${displayTime}</div><div><a class="${style.button}" href="https://helioviewer.org/?date=${timestamp}" target="_blank">View on helioviewer.org</a></div></div>`

export default SolarImagePreview
