import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar/nav_bar_container';
import RestCarousel from '../carousel/carousel';

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

    

    render() {
        // debugger
        let hoy = new Date();
        
        
        
        // debugger
        return (
            <>
                <div className="calendar">
                    <input type="date" id="date" className="date" value={hoy} />
                    <div className="styled-select slate">
                        <select className="time">
                            <option value="7:00PM">7:00 PM</option>
                        </select>
                        <select className="party-size">
                            <option>2 people</option>
                        </select>
                    </div>
                    <input className="search" type="search" />
                    {/* <button className="search-button">Let's go</button> */}
                    <Link to="/restaurants" className="search-button">Let's go</Link>
                </div>
                <div className="root-header">
                     <NavbarContainer /> 
                    
                    <div className='background-header'><h1>Find your mesa for any occasion</h1></div>
                </div>
                <img src={window.splashURL} /> 
                <RestCarousel />              
            </>
            
            )
        }
        
    }
    
export default Greeting;