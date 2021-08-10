var reset = document.getElementById('reset');

var hr = document.getElementById("hour");
var min = document.getElementById("minute");
var se = document.getElementById("sec");

var startTimer ;

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
    document.getElementById('start').disabled = true;
})

reset.addEventListener('click', function(){
    hr.value = 0;
    min.value = 0;
    se.value = 0;
    stopInterval()
    document.getElementById('start').disabled = false;

})

function timer(){
    if(hr.value == 0 && min.value == 0 && se.value == 0){
        hr.value = 0;
        min.value = 0;
        se.value = 0;

    } else if(se.value != 0){
        se.value--;
    } else if(min.value != 0 && se.value == 0){
        se.value = 59;
        min.value--;
    } else if(hr.value != 0 && min.value == 0){
        min.value = 60;
        hr.value--;
    }
    return;
}
function stopInterval() {
    clearInterval(startTimer);
}
