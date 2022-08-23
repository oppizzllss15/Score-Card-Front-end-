import React, { useState } from 'react'


type Optiontype = {
  
}


export const Selectoption = (props: Optiontype) => {
const [option, setOption] = useState('');

const handleChange = (event:any) => {
   setOption(event.target.value);
};

  return (
      <div>
          <select value={option} onChange={handleChange}>
               <option value={''}>Ford</option>
              </select>
    </div>
  )
}
