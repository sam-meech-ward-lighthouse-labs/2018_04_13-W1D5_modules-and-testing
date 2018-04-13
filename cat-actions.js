var leftPad = require('left-pad');

function meow(reason) {
  return leftPad(reason, 100, "😸");
}

function scratch(thing) {
  if (thing === 'couch') {
    return "😿";
  }
  if (thing === 'my face') {
    return "💩";
  }
  if (thing === 'dog') {
    return "🐶";
  }
  if (thing === 'grace') {
    return '🌈';
  }

  return "🤗";
}

exports.meow = meow;
exports.scratch = scratch;
exports.jazzHands = "🤗";

exports;