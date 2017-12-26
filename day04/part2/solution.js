module.exports = input => input
  .map(pass => {
    const dict = {};
    for (const word of pass) {
      const sorted = word.split('').sort().join('');
      if (dict[ sorted ]) {
        return false
      }
      dict[ sorted ] = true;
    }
    return true;
  })
  .filter(valid => valid)
  .length;
