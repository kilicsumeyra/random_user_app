const UserPicture = ({picture}) => {
  const defaultImage =
    "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

  return <img src={picture || defaultImage} alt="random user" className="user-img" />;
};

export default UserPicture;
