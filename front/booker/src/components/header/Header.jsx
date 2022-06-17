import { faBed, faCalendarDay, faCalendarDays, faFish, faPerson, faSailboat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavbarHome from "../navbarHome/Navbar"
import "./header.css"
import {DateRange} from 'react-date-range'
import { useContext,useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"
import { useNavigate, useNavigationType } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext"

const Header = ({type,activePage ="1"}) => {

	const [destination, setDestination] = useState("")
	const [openDate, setOpenDate] = useState(false)
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState({
		adult:1,
		children:0,
		room: 1
	})

	const navigate = useNavigate()
	const { user } = useContext(AuthContext);
	const handleOption = (name, operation) => {
		setOptions(prev => {
			 return {
			...prev, 
			[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			}
		})
	}
	const { dispatch } = useContext(SearchContext);
	// ova metoda se aktivira na klik dugmeta za search u zavisnosti od aktivne stranice poziva se odgovarajuca
	const handleSearch = () => {
		dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
		activePage === "1" ? navigate("cottages", {state: {destination, dates, options}}) :activePage === "2" ? navigate("boats", {state: {destination, dates, options}}) : navigate("fishinglessons", {state: {destination, dates, options}})
	}


  return (
    <div className="header">
			<div className={type === "list" ? "headerContainer listMode" : "headerContainer" } >
				<div className="headerList">
					<div className={activePage === "1" ? "headerListItem active" : "headerListItem" } onClick={()=>navigate('/cott')} >
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className={activePage === "2" ? "headerListItem active" : "headerListItem" } onClick={()=>navigate('/boa')}>
						<FontAwesomeIcon icon={faSailboat} />
						<span>Boats</span>
					</div>
					<div className={activePage === "3" ? "headerListItem active" : "headerListItem" } onClick={()=>navigate('/fis')}>
						<FontAwesomeIcon icon={faFish} />
						<span>Fishing Adventures</span>
					</div>
				</div>
				{ type !== "list" && 
					<>
					<h1 className="headerTitle">Welcome to The Booker!</h1>
					{!user && <p className="headerDesc">
						Sign in and enjoy our accommodations!
					</p>}
					{!user && <button className="headerBtn">Sign in / Register</button>}
					<div className="headerSearch">
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faBed} className="headerIcon" />
							<input 
								type="text"
								placeholder="Where are you going?" 
								className="headerSearchInput" 
								onChange={e=>setDestination(e.target.value)}
							/>
						</div>
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
							<span onClick={()=>{setOpenDate(!openDate); setOpenOptions(false)}}className="headerSearchText">{`${format(
								dates[0].startDate,
								"dd/MM/yyyy"
							)} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
							{openDate && <DateRange 
								editableDateInputs={true}
								onChange={item => setDates([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={dates}
								className="date"
								minDate={new Date()}

							/>}
						</div>
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faPerson} className="headerIcon" />
							<span onClick={()=>{setOpenOptions(!openOptions); setOpenDate(false)}} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
							{openOptions && <div className="options">
								<div className="optionItem">
									<span className="optionText">Adult</span>
									<div className="optionCounter">
										<button 
											disabled={options.adult <= 1}
											className="optionCounterButton" 
											onClick={()=>handleOption("adult", "d")}
										>-</button>
										<span className="optionCounterNumber">{options.adult}</span>
										<button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
									</div>
								</div>
								<div className="optionItem">
									<span className="optionText">Children</span>
									<div className="optionCounter">
										<button 
											disabled={options.children <= 0}
											className="optionCounterButton"
											onClick={()=>handleOption("children", "d")}
										>-</button>
										<span className="optionCounterNumber">{options.children}</span>
										<button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
									</div>
								</div>
								<div className="optionItem">
									<span className="optionText">Room</span>
									<div className="optionCounter">
										<button 
											disabled={options.room <= 1}
											className="optionCounterButton"
											onClick={()=>handleOption("room", "d")}
										>-</button>
										<span className="optionCounterNumber">{options.room}</span>
										<button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
									</div>
								</div>
							</div> } 
						</div>
						<div className="headerSearchItem">
							<button className="headerBtn" onClick={handleSearch}>Search</button>
						</div>
				</div></>}
			</div>
    </div>
  )
}

export default Header