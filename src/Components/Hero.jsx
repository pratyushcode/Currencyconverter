import React, { useEffect, useState } from 'react'
import axios from "axios"
import { IoSwapVertical } from "react-icons/io5";
import Select from './select';

const Hero = () => {

  const [selectedOptionto, setSelectedOptionto] = useState('USD');
  const [selectedOptionfrom, setSelectedOptionfrom] = useState('USD');
  const [country, setCountry] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amount,setamount]=useState(null);
 

  const fetchCountry = async () => {
    try {
      const resp = await axios.get(`https://open.er-api.com/v6/latest/${selectedOptionfrom}`);
      console.log(resp.data.rates);

      // Convert object to array of [key, value] pairs
      const rate = resp.data.rates[selectedOptionto];
      setExchangeRate(rate);
      const ratesArray = Object.entries(resp.data.rates);
      setCountry(ratesArray);
      
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCountry();
  }, [selectedOptionfrom,selectedOptionto]);

  useEffect(()=>{
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted.toFixed(1));
    }

  },[amount,exchangeRate]);

  const handleSelectChangeto = (event) => {
    setSelectedOptionto(event.target.value);
  };
  const handleSelectChangefrom = (event) => {
    setSelectedOptionfrom(event.target.value);
  };

  const handleswap=()=>
  {
    const fromtemp=selectedOptionfrom;
    const totemp=selectedOptionto;
    setSelectedOptionfrom(totemp);
    setSelectedOptionto(fromtemp);
  }

  const handleamountchange=(e)=>{
    setamount(e.target.value);
   
  }
 

  console.log({selectedOptionfrom,selectedOptionto})
  return (
    <div>
        <div className='heading text-white  text-5xl text-center font-sans '> Currency Converter</div>
        <div className='main-box h-[30rem] w-[30rem] mt-4 rounded-sm bg-slate-900 flex flex-col items-center '>
            <h1 className='text-white text-2xl p-2 '>Amount</h1>
            <input type="number" className='amount w-[90%] bg-transparent border-2 border-gray-700  cursor-pointer h-10 rounded-sm text-white mt-1 hover:shadow-xl shadow-slate-500 p-2' onChange={handleamountchange} />
            
      
            <Select country={country} selectedOption={selectedOptionfrom} handleSelectChange={handleSelectChangefrom}/>
         <div className='text-gray-500 p-4 hover:text-gray-300' onClick={handleswap}>  <IoSwapVertical  size={45} /> </div>
         <Select country={country} selectedOption={selectedOptionto} handleSelectChange={handleSelectChangeto}/>
       
         <div className='flex flex-col justify-center items-center'>
        <p className="text-2xl text-white mt-5">
          Converted Amount
        </p>
        <div className='bg-gray-600 border-2 border-gray-500 shadow-slate-600 shadow-lg w-40 h-10 rounded-lg mt-4 text-white text-center p-1 text-xl'>{convertedAmount}</div>
      </div>
        </div>
    </div>
  )
}

export default Hero