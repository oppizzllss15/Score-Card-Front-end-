import React, { useEffect, useState, ChangeEvent } from "react";

import { getAllStack } from "../utils/api";

// const Stacks = () => {
//   const [loading, setLoading] = useState([])
// };

type Optiontype = {
   label: string;
   name: string;
   value: string;
   handleChange?: any;
};

interface Option {
   id: string;
   image: string;
   name: string;
}

export const Selectoption = (props: Optiontype) => {
   const [option, setOption] = useState([]);


   const getStacks = async () => {
      const resp = await getAllStack();
      setOption(resp.message.allStacks);
   };

   useEffect(() => {
      getStacks();
   }, []);
   console.log(option);
   return (
      <div>
         <select
            className="select-container"
            value={props.value}
            onChange={props.handleChange}
            name={props.name}
         >
            {option.map((item: Option) => (
               <option value={item.id}>{item.name}</option>
            ))}
         </select>
      </div>
   );
};
