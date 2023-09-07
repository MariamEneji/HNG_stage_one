const showTime = () => {
    let date = new Date()

    console.log(date)

    let weekday = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let weekDay = weekday[date.getDay()]

    let time = (hours - 1) + ':' + minutes + ':' + seconds + ' ' + 'UTC' 



    document.getElementById('weekday').innerHTML = "Today" + ' ' + 'is' + ' ' + weekDay;
    document.getElementById('utcTime').innerHTML = "The" + ' '+ 'time' + ' ' + 'is' + ' ' +time;

    setTimeout(showTime, 1000)




}

showTime()