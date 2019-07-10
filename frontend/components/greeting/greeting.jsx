import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar/nav_bar_container';
import RestCarousel from '../carousel/carousel';
import Footer from '../footer/footer';
import GreetBackground from './greeting-background';
import SearchBar from '../search_bar/search_bar';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
      
    }

    // dropDownClick() {
    //     if (this.state.toggle === 'show') {
    //         this.setState({ toggle: 'hidden' })
    //     } else {
    //         this.setState({ toggle: 'show' });
    //     }

    //     // document.getElementById("user-dropdown").classList.toggle("show");

    //     window.onclick = (e) => {
    //         if (!e.target.matches('.user-button')) {
    //             let dropDowns = document.getElementsByClassName("dropdown-content");
    //             let i;
    //             for (i = 0; i < dropDowns.length; i++) {
    //                 let openDropdown = dropDowns[i];
    //                 if (openDropdown.classList.contains('show')) {
    //                     openDropdown.classList.add('hidden');
    //                     openDropdown.classList.remove('show');
    //                 }
    //             }
    //         }
    //     }
    // }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurants()
        // debugger
    }
    

    render() {
        // debugger
        let hoy = new Date().toISOString().substring(0, 10);
        // hoy = hoy[1] + '/' + hoy[2] + '/' + hoy[0]
        
        
        
        // debugger
        return (
            <>
                {/* <div className="calendar">
                    <input type="date" id="date" className="date" />
                    <div className="styled-select slate">
                        <select className="time">
                            <option value="7:00PM">7:00 PM</option>
                        </select>
                        <select className="party-size">
                            <option>2 people</option>
                        </select>
                    </div>
                    <input className="search" type="search" />
                    <Link to="/restaurants" className="search-button">Let's go</Link>
                </div> */}
                <SearchBar />
                <div className="root-header">
                     <NavbarContainer page='greeting' /> 
                    {/* <GreetBackground /> */}
                    
                    <div className='background-header'><h1>Find your mesa for any occasion</h1></div>
                </div>
                <img src="https://open-mesa-seeds.s3.amazonaws.com/restaurant.png" /> 
                <div>
                    <RestCarousel /> 
                </div>    
                <div>
                    <Footer />  
                </div>     
            </>
            
            )
        }
        
    }
    
export default Greeting;