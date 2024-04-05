import ButtonGroups from "./ButtonGroups";
import NewAndAddUserButton from "./NewAndAddUserButton";
import UserTable from "./UserTable";
import UserPicture from "./UserPicture";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://randomuser.me/api/";

function Main() {
  const [user, setUser] = useState("");
  const [label, setLabel] = useState("");
  const [userArr, setUserArr] = useState([]);
  const [dupUser, setDupUser] = useState(false);
  const getUser = async () => {
    try {
      const { data } = await axios(url);

      editUserInfo(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const editUserInfo = (user) => {
    console.log(user);
    const {
      name: { first, last },
      dob,
      location,
      phone,
      login,
      picture,
      id,
    } = user;

    const newUser = {
      name: first + " " + last,
      age: dob.age,
      email: user.email,
      street: location.street.number + " " + location.street.name,
      phone: phone,
      password: login.password,
      picture: picture.large,
      id: id.value,
    };
    setUser(newUser);
  };
  const handleMouseOver = (variable) => {
    setLabel(variable);
  };
  const addUserToArr = () => {
    const newUserId = user.id;
    const duplicateUser = userArr.filter((user) => user.id === newUserId);
    if (duplicateUser.length > 0) {
      setDupUser(true);
      setTimeout(() => setDupUser(false), 3000);
    }else{
     setUserArr([...userArr, user]); 
    }
    
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="block">
      <div className="container">
        <UserPicture picture={user.picture} />

        <p className={`user-title ${dupUser && "user-value-warning"}`}>
          {dupUser ? "Warning" : `My ${label || "..."} is`}
        </p>
        <p className="user-value">
          {dupUser ? "You're already added this user" : user[label]}
        </p>

        <ButtonGroups handleMouseOver={handleMouseOver} />
        <NewAndAddUserButton getUser={getUser} addUserToArr={addUserToArr} />
        <UserTable userArr={userArr} />
      </div>
    </div>
  );
}

export default Main;
