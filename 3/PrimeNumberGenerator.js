import React, { useState, useEffect } from 'react';

const PrimeNumberGenerator = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
    const isPrime = num => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1 && num !== 0;
    };

    const timer = setInterval(() => {
      let nextPrime = primeNumbers.length > 0 ? primeNumbers[primeNumbers.length - 1] + 1 : 2;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      setPrimeNumbers(prevPrimeNumbers => [...prevPrimeNumbers, nextPrime]);
    }, 1000);

    return () => clearInterval(timer);
  }, [primeNumbers]);

  return (
    <div>
      <h2>Простые числа</h2>
      <ul>
        {primeNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeNumberGenerator;
