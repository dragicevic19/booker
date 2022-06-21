
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">Stays</li>
            <li className="fListItem">Cottage</li>
            <li className="fListItem">Boats</li>
            <li className="fListItem">Fishing Adventures</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Homes </li>
            <li className="fListItem">Login </li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Unique places to stay </li>
          </ul>
        
          <ul className="fList">
            <li className="fListItem">Curtomer Service</li>
            <li className="fListItem">Partner Help</li>
            <li className="fListItem">Terms & conditions</li>
            <li className="fListItem">Copyright © 2022 Booker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;