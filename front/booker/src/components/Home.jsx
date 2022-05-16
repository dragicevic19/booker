import "./home.css"
import NavbarHome from "./navbarHome/Navbar";
import Header from "./header/Header"
import Featured from "./featured/Featured"


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