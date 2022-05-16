import "./home.css"
import NavbarHome from "./navbarHome/Navbar";
import Header from "./header/Header"


const Home = () => {

    return ( 
        <div>
            <NavbarHome/>
            <Header />
            <div className="homeContainer">
              
            </div>
           
        </div>
     );
}
 
export default Home;