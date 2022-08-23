import "./component.css";

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

const TableList = (props: Devs) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>{props.Sn}</th>
            <th>{props.Firstname}</th>
            <th>{props.Lastname}</th>
            <th>{props.Algorithms}</th>
            <th>{props.Weekly_Task}</th>
            <th>{props.Assessment_Test}</th>
            <th>{props.Agile_Test}</th>
            <th>{props.Cummulative_Score}</th>
            <th>{`***`}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



export default TableList;
