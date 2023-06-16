import YTLogo from "../Images/youtube_logo_icon_167938.png";
// import Alarm from "../Images/alarm_icon-icons.com_48364.png";
// import VideoIcon from "..//Images/videocamera_5631.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={YTLogo} alt="" width={100} />
      </div>
      <div className="searchBar">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="userOptions">
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/addVideo">Add Video</Link>
        </div>
        {/* <img src={VideoIcon} alt="" width={30} height={30} />
          <img src={Alarm} alt="" width={30} height={30} /> */}
        <p>S</p>
      </div>
    </div>
  );
};
export default Navbar;
