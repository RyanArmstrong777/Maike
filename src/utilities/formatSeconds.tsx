function addZero(number: string) {
    if (number.length < 2) {
        number = `0${number}`;
    }
    return number;
}

export function formatSeconds(duration: number): string {
    const minutes = addZero((Math.floor(duration / 60)).toString());
    const seconds = addZero((duration % 60).toString());
    return `${minutes}:${seconds}`;
}