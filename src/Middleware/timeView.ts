export default function timeView(seconds: number) {
    const time = seconds;
    const splitTime = {
        hours: Math.floor(time / 3600),
        minutes: Math.floor(time < 3600 ? time / 60 : time % 3600 / 60),
        seconds: time % 60
    }

    const timeString = {
        hours: splitTime.hours > 9 ? splitTime.hours.toString() : '0' + splitTime.hours,
        minutes: splitTime.minutes > 9 ? splitTime.minutes.toString() : '0' + splitTime.minutes,
        seconds: splitTime.seconds > 9 ? splitTime.seconds.toString() : '0' + splitTime.seconds,
    }
    
    return `${timeString.hours}:${timeString.minutes}:${timeString.seconds}`
}