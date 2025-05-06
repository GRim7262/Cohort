import { useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 2000)
  }, [])

  useEffect(() => {
    setExchange1Data({ returns: 100 });
  }, [])

  useEffect(() => {
    setExchange2Data({ returns: 100 });
  }, [])

  const calculateCryptoReturns = () => {
    return exchange1Data.returns + exchange2Data.returns;
  }

  const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

  return (
    <>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </>
  )
}

const CryptoGainsCalculator = ({calculateCryptoReturns}) => {
  return (
    <>
      Your crypto returns are {calculateCryptoReturns()}
    </>
  )
}

export default App
