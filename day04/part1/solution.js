module.exports = input => input
  .map(pass => {
    const dict = {};
    for (const word of pass) {
      if (dict[ word ]) {
        return false
      }
      dict[ word ] = true;
    }
    return true;
  })
  .filter(valid => valid)
  .length;
