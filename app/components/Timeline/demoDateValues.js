const startDate = 978303600000;
var dV = [];
var demoValuesPoints = 500000;
for(var i = 0; i < demoValuesPoints; i++){
    dV.push([startDate + i*1000*3, 1+i*Math.random()*0.5]);
}
const demoDateValues = dV;

export default demoDateValues;