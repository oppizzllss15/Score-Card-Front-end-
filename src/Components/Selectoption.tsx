import React, { useEffect, useState } from "react";
import { getallStack } from "../utils/api";
// const Stacks = () => {
//   const [loading, setLoading] = useState([])
// };


type Optiontype = {
   label: string;
};
interface Option {
   image: string;
  name: string;
}
export const Selectoption = (props: Optiontype) => {
   const [option, setOption] = useState([]);
   const [stack, setStack] = useState("");
   const handleChange = (event: any) => {
      setStack(event.target.value);
   };
   const getStacks = async () => {
      const resp = await getallStack();
      console.log(resp);
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
            value={stack}
            onChange={handleChange}
            name="stack"
         >
            {option.map((item: Option) => (
               <option value={item.name}>{item.name}</option>
            ))}
         </select>
      </div>
   );
};