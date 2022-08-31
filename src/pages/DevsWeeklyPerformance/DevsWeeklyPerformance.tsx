import { useEffect, useState } from "react";
import { filterDevsPerformanceByWeek } from "../../utils/api";
import { AiOutlineCalendar } from "react-icons/ai";
import TableList from "../../components/TableList";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";
import "./devsweeklyperformance.css";

type Devs = {
  Sn?: number;
  id: string;
  firstname: string;
  lastname: string;
  week: [
    {
      week: number;
      agile: number;
      weekly_task: number;
      assessment: number;
      algorithm: number;
      cummulative: number;
    }
  ];
};

const DevsWeeklyPerformance = () => {
  const [week, setWeek] = useState(0);
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const filterPerformance = async () => {
    const resp = await filterDevsPerformanceByWeek(week);
    setList(resp.week);
  };

  useEffect(() => {
    filterPerformance();
  }, [week]);

  const setActive = (id: string) => {
    setItem(id);
  };

  const handleChange = (e: any) => {
    const currWeek = Number(e.target.value);
    setWeek(currWeek);
  };

  const handleEffect = async (week: number) => {
   await filterPerformance();
   setWeek(week);
 };

  return (
    <DashboardLayout>
      {list.length > 0 && (
        <div className="mainb">
          <div className="dashoard-container">
            <div className="dashboard-heading">
              <h3 className="dashboard">Performance</h3>
              <div className="icon">
                <AiOutlineCalendar />
                <select
                  className="icon-select"
                  name="week"
                  onChange={handleChange}
                >
                  <option value="0">Week 0</option>
                  <option value="1">Week 1</option>
                  <option value="2">Week 2</option>
                  <option value="3">Week 3</option>
                  <option value="4">Week 4</option>
                  <option value="5">Week 5</option>
                  <option value="6">Week 6</option>
                  <option value="7">Week 7</option>
                  <option value="8">Week 8</option>
                  <option value="9">Week 9</option>
                  <option value="10">Week 10</option>
                  <option value="11">Week 11</option>
                  <option value="12">Week 12</option>
                  <option value="13">Week 13</option>
                  <option value="14">Week 14</option>
                  <option value="15">Week 15</option>
                </select>
              </div>
            </div>
            <div className="dashboard-body">
              <div className="heading">
                <h3>Week {week}</h3>
              </div>
              <div className="table-heading">
                <table className="table-head">
                  <thead className="table-header">
                    <tr>
                      <th className="th-text th-1">SN</th>
                      <th className="th-text th-2">Firstname</th>
                      <th className="th-text th-3">Lastname</th>
                      <th className="th-text th-4">Algorithms</th>
                      <th className="th-text th-5">Weekly Task</th>
                      <th className="th-text th-6">Assessment Test</th>
                      <th className="th-text th-7">Agile Test</th>
                      <th className="th-text th-8">Cummulative Score</th>
                      <th className="th-text th-9">Action</th>
                    </tr>
                  </thead>
                  <tbody className="tb-text">
                    {list.map((user: Devs, ind) => (
                      <TableList
                        key={user.id}
                        user={user}
                        ind={ind}
                        setActive={setActive}
                        selectedItem={item}
                        check={handleEffect}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DevsWeeklyPerformance;
