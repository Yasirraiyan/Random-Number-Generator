return(
    <div className="App">
        <h1>Random Number Generator   </h1>
       <label>Enter a Number:</label>
      <input 
        type="number" 
        value={inputNumber || ''} 
        onChange={handleInputChange} 
        placeholder="Enter a number" 
      />
      <br />
      <br />
         <label>Enter Min Number:</label>
      <input 
        type="number" 
        value={min} 
        onChange={(e) => setMin(Number(e.target.value))} 
        placeholder="Enter minimum number" 
      />
      <br />
      <br />
      <label>Enter Max Number:</label>
      <input 
        type="number" 
        value={max} 
        onChange={(e) => setMax(Number(e.target.value))} 
        placeholder="Enter maximum number" 
      />
      <br />
      <br />
        <button onClick={generateRandomNumber}>Generate Number</button>
        {randomNumber !== null && (
        <div>
          <p>Random Number: {randomNumber}</p>
          <p>Odd: {isOdd ? 'Yes' : 'No'}</p>
          <p>Prime: {isPrime ? 'Yes' : 'No'}</p>
          <p>Armstrong: {isArmstrong ? 'Yes' : 'No'}</p>
            <p>Even: {isEven? 'Yes' : 'No'}</p>
        </div>
      )}
        {inputNumber !== null && (
        <div>
          <p>Entered Number: {inputNumber}</p>
          <p>Odd: {isOdd ? 'Yes' : 'No'}</p>
          <p>Even: {isEven ? 'Yes' : 'No'}</p>
          <p>Prime: {isPrime ? 'Yes' : 'No'}</p>
          <p>Armstrong: {isArmstrong ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
       

   
    );
    }
