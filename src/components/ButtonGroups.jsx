import mailSvg from "../assets/mail.svg";
import womanSvg from "../assets/woman.svg";
import womanAgeSvg from "../assets/growing-up-woman.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import padlockSvg from "../assets/padlock.svg";

const ButtonGroups = ({handleMouseOver}) => {
  return (
    <div className="values-list">
      <button className="icon" onMouseOver={()=> handleMouseOver("name")}>
        <img src={womanSvg} alt="user" id="iconImg" />
      </button>
      <button className="icon" onMouseOver={()=> handleMouseOver("email")}>
        <img src={mailSvg} alt="mail" id="iconImg" />
      </button>
      <button className="icon" onMouseOver={()=> handleMouseOver("age")}>
        <img src={womanAgeSvg} alt="age" id="iconImg" />
      </button>
      <button className="icon" onMouseOver={()=> handleMouseOver("street")}>
        <img src={mapSvg} alt="map" id="iconImg" />
      </button>
      <button className="icon" onMouseOver={()=> handleMouseOver("phone")}>
        <img src={phoneSvg} alt="phone" id="iconImg" />
      </button>
      <button className="icon" onMouseOver={()=> handleMouseOver("password")}>
        <img src={padlockSvg} alt="lock" id="iconImg" />
      </button>
    </div>
  );
};

export default ButtonGroups;
