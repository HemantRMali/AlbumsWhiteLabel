export function millisToSeconds(millis) {
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds;
}
