export class AppUtils {
  static formatTime(count) {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }
}
