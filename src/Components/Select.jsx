import React from 'react'

const Select=({country,selectedOption,handleSelectChange})=> {
  return (
    <select
        id="options"
        value={selectedOption}
        onChange={handleSelectChange}
        className='mt-4 p-2 w-[90%] bg-slate-800 border-2 border-gray-600'
      >
        {country.map((item, index) => (
          <option
            value={item[0]}
            className=' bg-slate-500 border-gray-600 w-[70%]'
            key={index}
          >
            {item[0]}
          </option>
        ))}
       
      </select>
  )
}

export default Select