const UserTable = ({userArr}) => {
  return (
    <table className="table">
      <thead>
        <tr className="head-tr">
          <th className="th">Name</th>
          <th className="th th-email">Email</th>
          <th className="th th-email">Phone</th>
          <th className="th">Age</th>
        </tr>
      </thead>
      <tbody>
       {userArr.map(({name,email, phone, age}, index) =>( 
       <tr className="body-tr" key={index}>
          <th>{name}</th>
          <th className="th-email">{email}</th>
          <th className="th-email">{phone}</th>
          <th>{age}</th>
        </tr>))}
      </tbody>
    </table>
  );
};

export default UserTable;
