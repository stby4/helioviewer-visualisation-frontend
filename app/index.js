// import 'modules/loader'

import SolarImagePreview from 'components/SolarImage'

import TimelineMarkup, { Timeline } from 'components/Timeline'

import 'theme/main.scss'

document.getElementById('root').innerHTML = TimelineMarkup()
document.getElementById('preview').innerHTML = SolarImagePreview('2014-02-25T15:53:00Z','2014/02/25 15:53:00 UTC' )

Timeline()
