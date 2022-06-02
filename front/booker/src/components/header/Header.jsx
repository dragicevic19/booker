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

const Header = ({type}) => {

	const [destination, setDestination] = useState("")
	const [openDate, setOpenDate] = useState(false)
	const [date, setDate] = useState([
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


	const handleSearch = () => {
		navigate("cottages", {state: {destination, date, options}})
	}


  return (
    <div className="header">
			<div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faSailboat} />
						<span>Boats</span>
					</div>
					<div className="headerListItem">
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
								date[0].startDate,
								"dd/MM/yyyy"
							)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
							{openDate && <DateRange 
								editableDateInputs={true}
								onChange={item => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
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