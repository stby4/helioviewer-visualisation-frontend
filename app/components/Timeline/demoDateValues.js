/**
 * Demodates delivered in a 2 dimensional array
 * @export demoDateValues [[Date in ms][value],[Date in ms][value],...]
 */
const startDate = 978303600000; //01.01.2001
var dV = [];
var demoValuesPoints = 500000;
for(var i = 0; i < demoValuesPoints; i++){
    dV.push([startDate + i*1000*60*15, 1+i*Math.random()*.2]); //15min interval
}
const demoDateValues = dV;

export default demoDateValues;