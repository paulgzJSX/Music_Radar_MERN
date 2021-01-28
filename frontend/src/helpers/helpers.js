export function getTime(time) {
    if (!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.ceil(time % 60)).slice(-2)
    }
}

export function getMinutes(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

export function trimTitle(str) {
    return str.includes('(') ? str.substring(0, str.indexOf('(') - 1) : str
}

export function trimDate(date) {
    return new Date(date).toLocaleDateString('en-GB')
}

export function trimNumber(str) {
    return str.toLocaleString('de-DE')
}

export function limitCharacters(str, limit) {
    return str.substring(0, limit)
}

