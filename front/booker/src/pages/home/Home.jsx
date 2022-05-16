import "./home.css"
import NavbarHome from "../../components/navbarHome/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"


const Home = () => {

    return ( 
        <div>
            <NavbarHome/>
            <Header />
            <div className="homeContainer">
                <Featured />
            </div>
           
        </div>
     );
}
 
export default Home;