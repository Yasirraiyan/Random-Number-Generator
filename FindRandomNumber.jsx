 function FindRandomNumber()
   {
       const [inputNumber, setInputNumber] = useState(null);
       const [randomNumber, setRandomNumber] = useState(null);
       const [min, setMin] = useState(1);
  const [max, setMax] = useState(200);
       const [isPrime, setIsPrime] = useState(false);
  const [isArmstrong, setIsArmstrong] = useState(false);
  const [isOdd, setIsOdd] = useState(false);
       const [isEven, setIsEven] = useState(false);

const handleInputChange = (e) => {
    const number = Number(e.target.value);
    setInputNumber(number);
    setIsOdd(number % 2 !== 0);
    setIsEven(number % 2 === 0);
    setIsPrime(checkPrime(number));
    setIsArmstrong(checkArmstrong(number));
  };
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

  const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const checkArmstrong = (num) => {
    let sum = 0;
    let temp = num;
    let digits = temp.toString().length;
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** digits;
      temp = Math.floor(temp / 10);
    }
    return sum === num;
  };
