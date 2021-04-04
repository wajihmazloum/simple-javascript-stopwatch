var daysCounter = 0
var hoursCounter = 0
var minutesCounter = 0
var secondCounter = 0
var millisecondCounter = 0

lapsArray = []

var interval = 0

document.getElementById("sdays").innerHTML = 0
document.getElementById("shours").innerHTML = 0
document.getElementById("sminutes").innerHTML = 0
document.getElementById("sseconds").innerHTML = 0
document.getElementById("smilliseconds").innerHTML = 0
if (document.getElementById("startStopBtn").innerHTML == "start") {
    document.getElementById("stop").hidden = true
}


function timer() {
    millisecondCounter = millisecondCounter + 1
    document.getElementById("smilliseconds").innerHTML = millisecondCounter
    if (millisecondCounter == 10) {
        millisecondCounter = 0
        secondCounter = secondCounter + 1
        document.getElementById("sseconds").innerHTML = secondCounter
        if (secondCounter == 60) {
            secondCounter = 0
            minutesCounter = minutesCounter + 1
            document.getElementById("sminutes").innerHTML = minutesCounter
            if (minutesCounter == 60) {
                minutesCounter = 0
                hoursCounter = hoursCounter + 1
                document.getElementById("shours").innerHTML = hoursCounter
                if (hoursCounter == 24) {
                    hoursCounter = 0
                    daysCounter = daysCounter + 1
                    document.getElementById("sdays").innerHTML = daysCounter
                }
            }
        }

    }
}



document.getElementById("lap").addEventListener("click", function() {
    var item = document.createElement("p")
    item.style.display = "inline"
    item.style.marginRight = "2%"
    item.style.marginBottom = "2%"
    item.innerHTML = `${document.getElementById("sdays").innerHTML}:${document.getElementById("shours").innerHTML}:${document.getElementById("sminutes").innerHTML}:${document.getElementById("sseconds").innerHTML}:${document.getElementById("smilliseconds").innerHTML}`
    document.getElementById("lapsDivision").appendChild(item)
});

document.getElementById("resetBtn").addEventListener("click", function() {
    daysCounter = 0
    hoursCounter = 0
    minutesCounter = 0
    secondCounter = 0
    millisecondCounter = 0

    document.getElementById("sdays").innerHTML = 0
    document.getElementById("shours").innerHTML = 0
    document.getElementById("sminutes").innerHTML = 0
    document.getElementById("sseconds").innerHTML = 0
    document.getElementById("smilliseconds").innerHTML = 0
    document.getElementById("lapsDivision").innerHTML = ""

})



document.getElementById("stopLaps").addEventListener("click", function() {
    if (document.getElementById("startStopBtn").innerHTML == "pause") {
        var item = document.createElement("p")
        item.style.display = "inline"
        item.style.marginRight = "2%"
        item.style.marginBottom = "2%"
        item.innerHTML = `${document.getElementById("sdays").innerHTML}:${document.getElementById("shours").innerHTML}:${document.getElementById("sminutes").innerHTML}:${document.getElementById("sseconds").innerHTML}:${document.getElementById("smilliseconds").innerHTML}`
        document.getElementById("lapsDivision").appendChild(item)
        alert("close to resume")
    } else {
        alert("start the timer first")
    }

})


document.getElementById("startStopBtn").addEventListener("click", function() {
    if (document.getElementById("startStopBtn").innerHTML == "start") {
        document.getElementById("startStopBtn").innerHTML = "pause"
        document.getElementById("stop").hidden = false
        setInterval(timer, 100)
    } else {
        alert("Close to resume")
    }

})


document.getElementById("stop").addEventListener("click", function() {
    window.location.reload();
})