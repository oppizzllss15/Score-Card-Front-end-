import { useEffect, useState } from "react";
import { getAllStack } from "../utils/api";

type Optiontype = {
   label: string;
   name: string;
   value: string;
   handleChange?: any
};

interface Option {
   _id: string;
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

   return (
      <div>
         <select
            className="select-container"
            name={props.name}
            onChange={props.handleChange}
         >
            {option.map((item: Option) => (
               <option key={item._id} value={item._id}>{item.name}</option>
            ))}
         </select>
      </div>
   );
};
