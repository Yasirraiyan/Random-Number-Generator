function FindRandomNumber()
   {
       const [inputNumber, setInputNumber] = useState(null);
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
