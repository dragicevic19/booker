import "./single.scss";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://www.pijanitvor.com/attachments/tn_dsc00434-jpg.25588/"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Fishing Lesson</h1>
                <div className="detailItem">
                  <span className="itemKey">Lesson name:</span>
                  <span className="itemValue">Pecanje somova</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Ribnjak donji put 33</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Capacity:</span>
                  <span className="itemValue">
                    20
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Serbia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Attendants</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
