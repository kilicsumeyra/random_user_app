const NewAndAddUserButton = ({getUser, addUserToArr}) => {
  return (
    <div className="btn-group">
      <button className="btn" type="button" onClick={getUser}>
        new user
      </button>
      <button className="btn" type="button" onClick={addUserToArr}>
        add user
      </button>
    </div>
  );
};

export default NewAndAddUserButton;
