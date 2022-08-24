import { useEffect, useState } from "react";
import "./component.css";
import { filterDevsPerformanceByWeek } from "../utils/api";

type Devs = {
  Sn: number;
  Firstname: string;
  Lastname: string;
  Algorithms: number;
  Weekly_Task: number;
  Assessment_Test: number;
  Agile_Test: number;
  Cummulative_Score: number;
};

interface Week {
  week: number;
}
const TableList = ({ week }: Week) => {
  const [list, setList] = useState([]);

  const filterPerformance = async () => {
    let resp = await filterDevsPerformanceByWeek(week);
    setList(resp);
  };
  useEffect(() => {
    filterPerformance();
  }, []);
  return (
    <tbody>
      {list.map((el: Devs, ind) => (
      <tr>
        <th>{ind + 1}</th>
        <th>{el.Firstname}</th>
        <th>{el.Lastname}</th>
        <th>{el.Algorithms}</th>
        <th>{el.Weekly_Task}</th>
        <th>{el.Assessment_Test}</th>
        <th>{el.Agile_Test}</th>
        <th>{el.Cummulative_Score}</th>
        <th>{`***`}</th>
      </tr>
      ))}
    </tbody>
  );
};

export default TableList;
