// import 'modules/loader'

import SolarImagePreview from 'components/SolarImage'

import TimelineMarkup, { Timeline } from 'components/Timeline'

import 'theme/main.scss'

document.getElementById('root').innerHTML = TimelineMarkup()

//Format current date
var timestamp = new Date()
var year = timestamp.getFullYear()
var month = ('0'+timestamp.getMonth()).substr(-2)
var date = ('0'+timestamp.getDate()).substr(-2)
var hours = ('0'+timestamp.getHours()).substr(-2)
var minutes = ('0'+timestamp.getMinutes()).substr(-2)

var timeParam = year + '-' + month + '-' + date + 'T' + hours  + ':' + minutes + ':00Z' 
var timeDisplay = year + '/' + month + '/' + date + ' ' + hours  + ':' + minutes + ':00 UTC' 

document.getElementById('preview').innerHTML = SolarImagePreview(timeParam, timeDisplay)

Timeline()
