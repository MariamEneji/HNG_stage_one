const showTime = () => {
    let date = new Date()

    let weekday = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()

    let weekDay = weekday[date.getDay()]

    let time = (hours - 1) + ':' + minutes + ':' + seconds + ':' + milliseconds 



    document.getElementById('weekday').innerHTML = weekDay;
    document.getElementById('utcTime').innerHTML = time;

    setTimeout(showTime)




}

showTime()