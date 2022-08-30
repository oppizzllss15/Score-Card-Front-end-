import { useState, useEffect } from "react";
import { getScores, getPercentChange } from "../../utils/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { UserDashboardLayout } from "../../layout/UserDashboard/UserDashboard";
import "./User-dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "User Performance Chart",
      position: "top" as const,
    },
    toolTip: { display: true },
  },
};

interface ResultType {
  agile: number;
  algorithm: number;
  assessment: number;
  cummulative: number;
  week: number;
  weekly_task: number;
}

const UserDashboard = () => {
  const [result, setResult]: any = useState([]);
  const [tracker, setTracker] = useState({
    agile: 0,
    algorithm: 0,
    assessment: 0,
    cummulative: 0,
    week: 0,
    weekly_task: 0,
  });

  const getUserGrades = async () => {
    const res = await getScores();
    setResult(res.scores);
    console.log(result)
  };

  const getUserCurrentPerformance = async () => {
    const res = await getPercentChange();
    const change: ResultType = res.change;
    setTracker(change);
  };

  useEffect(() => {
    getUserGrades();
    getUserCurrentPerformance();
  }, []);

  const latestResult: ResultType = result[result.length - 1];

  const labels = [];
  const data1 = [];
  const data2 = [];
  const data3 = [];
  const data4 = [];

  for (const el of result) {
    labels.push(`week ${el.week}`)
    data1.push(el.agile)
    data2.push(el.algorithm)
    data3.push(el.weekly_task)
    data4.push(el.assessment)
  }

  labels.unshift("0");
  data1.unshift(0);
  data2.unshift(0);
  data3.unshift(0);
  data4.unshift(0);

  const data = {
    labels,
    datasets: [
      {
        label: "Agile Test",
        data: data1,
        borderWidth: 0.4,
        borderColor: "rgb(214, 223, 13)",
        fill: true,
        backgroundColor: "rgba(214, 223, 13, 0.3)",
        lineTension: 0.55,
        pointRadius: 0,
      },
      {
        label: "Algorithm",
        data: data2,
        borderWidth: 0.4,
        borderColor: "rgb(0, 123, 3)",
        fill: true,
        backgroundColor: "rgba(0, 123, 3, 0.4)",
        lineTension: 0.55,
      },
      {
        label: "Weekly Task",
        data: data3,
        borderWidth: 0.4,
        borderColor: "rgb(249, 95, 52)",
        fill: true,
        backgroundColor: "rgba(249, 0, 52, 0.3)",
        lineTension: 0.55,
      },
      {
        label: "Assessement Test",
        data: data4,
        borderWidth: 0.4,
        borderColor: "rgb(77, 250, 157)",
        fill: true,
        backgroundColor: "rgba(119, 241, 55, 0.3)",
        lineTension: 0.55,
      },
    ],
  };

  return (
    <UserDashboardLayout>
      {result.length > 0 && (
        <div className="user-dashboard">
          <div className="dash-header">
            <div className="overview">
              <p>Overview</p>
            </div>
            <div className="logic-board">
              <div className="logic-item">
                <p>Algorithm</p>
                <div className="logic-item-text">
                  <div className="item-score">{latestResult.algorithm}</div>
                  <div className="percent-change">
                    {Number(tracker.algorithm) > 0.0 ? (
                      <div className="per-change">
                        <div className="up-arrow">
                          <BsArrowUp />
                        </div>
                        <div>{tracker.algorithm}%</div>
                      </div>
                    ) : (
                      <div className="per-change">
                        <div className="down-arrow">
                          <BsArrowDown />
                        </div>
                        <div>{tracker.algorithm}%</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="logic-item">
                <p>Weekly Task</p>
                <div className="logic-item-text">
                  <div className="item-score">{latestResult.weekly_task}</div>
                  <div className="percent-change">
                  {Number(tracker.weekly_task) > 0.0 ? (
                      <div className="per-change">
                        <div className="up-arrow">
                          <BsArrowUp />
                        </div>
                        <div>{tracker.weekly_task}%</div>
                      </div>
                    ) : (
                      <div className="per-change">
                        <div className="down-arrow">
                          <BsArrowDown />
                        </div>
                        <div>{tracker.weekly_task}%</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="logic-item">
                <p>Assessement Test</p>
                <div className="logic-item-text">
                  <div className="item-score">{latestResult.assessment}</div>
                  <div className="percent-change">
                  {Number(tracker.assessment) > 0.0 ? (
                      <div className="per-change">
                        <div className="up-arrow">
                          <BsArrowUp />
                        </div>
                        <div>{tracker.assessment}%</div>
                      </div>
                    ) : (
                      <div className="per-change">
                        <div className="down-arrow">
                          <BsArrowDown />
                        </div>
                        <div>{tracker.assessment}%</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="logic-item">
                <p>Agile</p>
                <div className="logic-item-text">
                  <div className="item-score">{latestResult.agile}</div>
                  <div className="percent-change">
                  {Number(tracker.agile) > 0.0 ? (
                      <div className="per-change">
                        <div className="up-arrow">
                          <BsArrowUp />
                        </div>
                        <div>{tracker.agile}%</div>
                      </div>
                    ) : (
                      <div className="per-change">
                        <div className="down-arrow">
                          <BsArrowDown />
                        </div>
                        <div>{tracker.agile}%</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sheet-container">
            <div className="sheet-title">Weekly Performance Score</div>
            <div className="sheet-body">
              <div className="chart-colors">
                <div className="chart-yellow"></div>
                <div className="chart-blue"></div>
                <div className="chart-red"></div>
                <div className="chart-green"></div>
              </div>
              <div className="chart-board">
                <Line className="chart" options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </UserDashboardLayout>
  );
};

export default UserDashboard;
