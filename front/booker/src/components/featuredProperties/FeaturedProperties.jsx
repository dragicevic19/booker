import "./featuredProperties.css"
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const {  data, loading, error } = useFetch("http://localhost:8080/auth/cottages/4offers");
 
  return (
    <div className="fp">
    {loading ? (
      "Loading"
    ) : (
      <>
        {data.map((item) => (
          <div className="fpItem" key={item.id}>
            <img
              src={item.images[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.address.city}</span>
            <span className="fpPrice">Starting from ${item.price}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating.average}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
      </>
    )}
  </div>
);
};


export default FeaturedProperties