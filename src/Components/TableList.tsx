import "./component.css";

interface Prop {
  user: {
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
        algorithm: number | string;
        cummulative: number;
      }
    ];
  };
  ind: number;
}

const TableList = ({ user, ind }: Prop) => {
  return (
    // <tbody>
    //   {list.map((el, ind) => (
    //   <tr>
    //     <th>{ind + 1}</th>
    //     {/* <th>{el.Firstname}</th>
    //     <th>{el.Lastname}</th>
    //     <th>{el.Algorithms}</th>
    //     <th>{el.Weekly_Task}</th>
    //     <th>{el.Assessment_Test}</th>
    //     <th>{el.Agile_Test}</th>
    //     <th>{el.Cummulative_Score}</th>
    //     <th>{`***`}</th> */}
    //   </tr>
    //   ))}
    // </tbody>
    <tr key={user.id}>
      <td>{ind + 1}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.week[0].algorithm}</td>
      <td>{user.week[0].weekly_task}</td>
      <td>{user.week[0].assessment}</td>
      <td>{user.week[0].agile}</td>
      <td>{user.week[0].cummulative}</td>
      {/* <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td> */}
      <td>{`***`}</td>
    </tr>
  );
};

export default TableList;
