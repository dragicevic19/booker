import "./home.scss";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
