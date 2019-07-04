module.exports = number => {
    let num = String(number);
      let firstDigit = num.length % 3 === 0 ? 3 : num.length % 3 ;
      let money = firstDigit === 3 ? num.substring(0, 3) : num.substring(0,firstDigit);
      for (let i = firstDigit; i < num.length; i+=3) {
          money += '.' + num.substring(i, i + 3);
      }
      return 'Rp.' + money + ',00';
  }