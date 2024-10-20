 const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
    setIsOdd(number % 2 !== 0);
    setIsEven(number % 2 === 0);
    setIsPrime(checkPrime(number));
    setIsArmstrong(checkArmstrong(number));
    console.log('Generated Random Number:', number);
    alert('Generated Random Number: ' + number);
  };
