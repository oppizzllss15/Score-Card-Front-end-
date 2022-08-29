import { useEffect, useState } from "react";
import { filterDevsPerformanceByWeek } from "../../utils/api";
import "./devsweeklyperformance.css";
import { AiOutlineCalendar } from "react-icons/ai";
import TableList from "../../components/TableList";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";



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

  const filterPerformance = async () => {
    const resp = await filterDevsPerformanceByWeek(week);
    console.log(resp);
    setList(resp.week);
  };

  useEffect(() => {
    filterPerformance();
  }, []);

  return (
     <DashboardLayout>
        <div className="mainb">
           <div className="dashoard-container">
              <div className="dashboard-heading">
                 <h3 className="dashboard">Dashboard</h3>
                 <div className="icon">
                    <AiOutlineCalendar /> <p className="weeks-txt">Weeks</p>
                 </div>
              </div>
              <div className="dashboard-body">
                 <div className="heading">
                    <h3>Week 1</h3>
                 </div>
                 <div className="table-heading">
                    <table>
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
                             <TableList  key={user.id} user={user} ind={ind} />
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
     </DashboardLayout>
  );
};

export default DevsWeeklyPerformance;
