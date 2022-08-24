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
   image: string;
   name: string;
}

export const Selectoption = (props: Optiontype) => {
   const [option, setOption] = useState([]);
   //  const [stack, setStack] = useState("");

   //  const handleChange = (event: any) => {
   //     setStack(event.target.value);
   //  };

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
               <option value={item.name}>{item.name}</option>
            ))}
         </select>
      </div>
   );
};
