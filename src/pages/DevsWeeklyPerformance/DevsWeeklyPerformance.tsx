import "./devsweeklyperformance.css";
import { AiOutlineCalendar } from "react-icons/ai";

<AiOutlineCalendar />;

const DevsWeeklyPerformance = () => {
  return (
    <div>
      <div className="main">
        <div className="dashoard-container">
          <div className="dashboard-heading">
            <h3 className="dashboard">Dashboard</h3>
            <div className="icon">
              <AiOutlineCalendar /> <p className="weeks-txt">Weeks</p>
            </div>
          </div>
          <div className="">
            <div className="dashboard-body">
              <h3>Week 1</h3>
            </div>
            <div className="table-heading"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevsWeeklyPerformance;
