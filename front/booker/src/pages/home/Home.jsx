import "./home.css"
import NavbarHome from "../../components/navbarHome/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Calendar from "../../dashboard/components/calendar/Calendar"

const Home = () => {

    return ( 
        <div>
            <NavbarHome/>
            <Header />
            <div className="homeContainer">
                <Calendar />
                <Featured />
                <h1 className="homeTitle">Cottages guests love</h1>
                <FeaturedProperties />
            </div>
           
        </div>
     );
}
 
export default Home;