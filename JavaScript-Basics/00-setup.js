var carSpeed = 60;
var downHill = carSpeed + 10;
var upHill = carSpeed - 10;
console.log(downHill);
console.log(upHill);

function upHillVsDownHill(downHill, upHill){
    let diffUpDown = downHill - upHill;
    return diffUpDown
}
console.log(upHillVsDownHill(downHill, upHill))
