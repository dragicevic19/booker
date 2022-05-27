import "./rating.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = () => {
  return (
    <div className="featured">
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={7.8*10} text={"7.8"} strokeWidth={5} />
        </div>
        <p className="title">Number of votes</p>
        <p className="amount">200</p>
      </div>
    </div>
  );
}

export default Rating