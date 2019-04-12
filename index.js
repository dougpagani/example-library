module.exports = {
    padLeft: padLeft
}


function padLeft (str, len, char) {
  str = String(str);

  var i = -1;

  if (!char && char !== 0) char = ' ';

  len = len - str.length;

  // until string is the proper length
  while (++i < len) {
    str = char + str;
  }

  return str;
}
