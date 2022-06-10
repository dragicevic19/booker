import "./home.css"
import NavbarHome from "../../components/navbarHome/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"

const Home = ({page = "1"}) => {

    return ( 
        <div>
            <NavbarHome/>
            <Header activePage={page} />
            { page ==="1"?
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Cottages guests love</h1>
                <FeaturedProperties />
            </div>
            : <div></div>
            }
           
        </div>
     );
}
 
export default Home;