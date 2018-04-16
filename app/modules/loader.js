// @todo implementation

/**
 * Load data from timeline API
 * @export timelineData [[Date in ms][value],[Date in ms][value],...]
 * @todo implementation, probably with https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * @param {Date} from - Start date for the requested timeline
 * @param {Date} to - End date for the requested timeline
 * @returns {*} Promise (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 */
// const timelineData = dataLoader(from, to);

const url = 'http://localhost:8080/api?from=2017-01-01:00:00:00&to=2017-12-31:00:00:00&points=1000' // 'http://localhost:8080/api?from=\'' + from + '\'&to=\'' + from + '\'&points=1000'

export const timelineData = () =>
    fetch(url)
        .then(response => response.json())
        .catch(() => [[978303600000, 100], [978303610000, 1000]])
