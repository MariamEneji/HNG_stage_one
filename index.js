const showTime = () => {
    let date = new Date()

    let weekday = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    let hours = date.getHours() * 3600000 
    let minutes = date.getMinutes() * 60000
    let seconds = date.getSeconds() * 1000
    let milliseconds = date.getMilliseconds()

    let weekDay = weekday[date.getDay()]

    let time = Date.now()



    document.getElementById('weekday').innerHTML = weekDay;
    document.getElementById('utcTime').innerHTML = time;

    setTimeout(showTime)




}

showTime()