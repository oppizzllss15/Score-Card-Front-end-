import { useEffect , useState} from "react";
import "./devsweeklyperformance.css";
import { AiOutlineCalendar } from "react-icons/ai";
import TableList from "../../components/TableList";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";

<AiOutlineCalendar />;

const DevsWeeklyPerformance = () => {
  const [week, setWeek] = useState(1);
  return (

     <DashboardLayout>
        <div className="main">
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
                       <thead>
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
                       <TableList week={week} />
                    </table>
                 </div>
              </div>
           </div>
        </div>
    </DashboardLayout>
    
  );
};

export default DevsWeeklyPerformance;
