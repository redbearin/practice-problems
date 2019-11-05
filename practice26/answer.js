function search_array(haystack,needle) {
  var matchArray = [];
  for (var haystackIndex = 0; haystackIndex < haystack.length; haystackIndex++) {
    for (var needleIndex = 0; needleIndex < needle.length; needleIndex++) {
      if (needle[needleIndex] === haystack[haystackIndex]) {
        matchArray.push(needle[needleIndex]);
      }
    }
  }
  return matchArray;
}

var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn']

search_array(haystack, needle);
