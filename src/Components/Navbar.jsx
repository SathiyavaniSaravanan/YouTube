import YTLogo from '../Images/youtube_logo_icon_167938.png';
import Alarm from '../Images/alarm_alert_bell_notification_ring_icon_123294.png';
import VideoIcon from '..//Images/videocamera_5631.png';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={YTLogo} alt="" width={100}/>
            </div>
            <div className="searchBar">
                <input type="text" name="" id="" placeholder="Search" />
            </div>
            <div className="userOptions">
                <img src={VideoIcon} alt="" width={35} height={35}/>
                <img src={Alarm} alt="" width={35} height={35} />
                <p>S</p>
            </div>
        </div>
    );
}
export default Navbar;