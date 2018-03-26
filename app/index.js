// import 'modules/loader'

import SolarImagePreview from 'components/SolarImage'

import TimelineMarkup, { Timeline } from 'components/Timeline'

import 'theme/main.scss'

document.getElementById('root').innerHTML = TimelineMarkup()
document.getElementById('preview').innerHTML = SolarImagePreview("26.03.2018 20:00:03 UTC", ".\\media\\sun.png")



Timeline()
