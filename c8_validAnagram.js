function areAnagrams(s, t) {
    // Early exit if the string lengths are different
    if (s.length !== t.length) {
      return false;
    }
    let sArray = s.split("")
    let sMap = {}
    sArray.forEach(element => {
      if (sMap[element]) {
        sMap[element]++;
      } else {
        sMap[element] = 1;
      }
    });
    let tArray = t.split("")
    let tMap = {}
    tArray.forEach(element => {
      if (tMap[element]) {
        tMap[element]++;
      } else {
        tMap[element] = 1;
      }
      
    });

    for (const char in sMap) {
      if (sMap[char] !== tMap[char]) {
        return false
      }
    }

    return true
  }
  
console.log(areAnagrams("hello", "ollhl"))