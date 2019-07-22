import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {createReservation, deleteReservation } from '../../actions/reservation_actions';

export const mSP = (state, ownProps) => {
    
    let usRes;
    if (state.session.id !== null) {
        usRes = state.entities.users[state.session.id].reservations
    } else {
        usRes = {}
    }
    return (
        { 
            restaurant: state.entities.restaurants[ownProps.match.params.id],
            userReservations: usRes,
            userId: state.session.id,
            loggedIn: Boolean(state.session.id)
        }
    )
}

export const mDP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    deleteReservation: (id) => dispatch(deleteReservation(id))
})


class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            party_size: '',
            reservation_time: '',
            reservation_date: '',
            restaurant_id: this.props.match.params.id,
            user_id: this.props.userId,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate() {
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state)
    }

    handleChange(key) {
        return (e) => {
            this.setState({ [key]: e.target.value })
        }
    }

    render(){
        // for (let i = 0; i < this.props.restaurants.length; i++) {
        //     for (let j = 0; j < array.length; j++) {
                
        //     }            
        // }
        
        //how to fetch specific reservations for restaurant rendering.....
        //if the reservation user id === session id && reservation restaurant id === restaurant id
        // if (Object.values(this.props.restaurant).length === 0) { return null }
        let hoy = new Date().toISOString().substring(0, 10);
        let content;
        
        if (this.props.loggedIn) {
            if (this.props.restaurant && this.props.restaurant.reservations) {
                
                // for (let i = 0; i < this.props.reservations.length; i++) {
                //     let rezzo = this.props.reservations[i]
                    
                
                    if (this.props.userReservations && this.props.userReservations[this.props.restaurant.id]) {
                        
                        // const rezzo = this.props.user.reservations[this.props.restaurant.id]
                        content = (
                            <div>
                                <div className='rest-reservation-container2'>
                                    <div className='rest-show-h2'><h2>Make a reservation</h2></div>
                                    <div className="rest-reserve-options">
                                        <div className='rest-reserve-party-container'>
                                            <label for="rest-reserve-party-select">Party Size</label>
                                            <select defaultValue='2' onClick={this.handleChange('party_size')} name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
                                                <option name='2' value="2" >For 2</option>
                                                <option name='3' value="3">For 3</option>
                                                <option name='4' value="4">For 4</option>
                                                <option name='5' value="5">For 5</option>
                                                <option name='6' value="6">For 6</option>
                                                <option name='7' value="7">For 7</option>
                                                <option name='8' value="8">For 8</option>
                                                <option name='9' value="9">For 9</option>
                                                <option name='10' value="10">For 10</option>
                                            </select>
                                        </div>
                                        <dir className="rest-reserve-datetime-container">
                                            <div className="rest-reserve-date-container">
                                                <label for="rest-reserve-date">Date</label>
                                                <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date" />
                                            </div>
                                            <div className="rest-reserve-time-container">
                                                <label for="rest-reserve-time">Time</label>
                                                <select defaultValue='12:00 PM' onClick={this.handleChange('reservation_time')} className="rest-reserve-time" >
                                                    <option value="12:00 PM" >12:00 PM</option>
                                                    <option value="1:00 PM">1:00 PM</option>
                                                    <option value="2:00 PM">2:00 PM</option>
                                                    <option value="3:00 PM">3:00 PM</option>
                                                    <option value="4:00 PM">4:00 PM</option>
                                                    <option value="5:00 PM">5:00 PM</option>
                                                    <option value="6:00 PM">6:00 PM</option>
                                                    <option value="7:00 PM">7:00 PM</option>
                                                    <option value="8:00 PM">8:00 PM</option>
                                                    <option value="9:00 PM">9:00 PM</option>
                                                    <option value="10:00 PM">10:00 PM</option>
                                                </select>
                                            </div>
                                        </dir>
                                        <button onClick={() => this.props.deleteReservation(this.props.userReservations[this.props.restaurant.id])} type='submit'>Delete Reservation</button>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        
                        content = (
                            <form onSubmit={this.handleSubmit}>
                                <div className='rest-reservation-container'>
                                    <div className='rest-show-h2'><h2>Make a reservation</h2></div>
                                    <div className="rest-reserve-options">
                                        <div className='rest-reserve-party-container'>
                                            <label htmlFor="rest-reserve-party-select">Party Size</label>
                                            <select defaultValue='2' onClick={this.handleChange('party_size')} name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
                                                <option name='2' value="2" >For 2</option>
                                                <option name='3' value="3">For 3</option>
                                                <option name='4' value="4">For 4</option>
                                                <option name='5' value="5">For 5</option>
                                                <option name='6' value="6">For 6</option>
                                                <option name='7' value="7">For 7</option>
                                                <option name='8' value="8">For 8</option>
                                                <option name='9' value="9">For 9</option>
                                                <option name='10' value="10">For 10</option>
                                            </select>
                                        </div>
                                        <dir className="rest-reserve-datetime-container">
                                            <div className="rest-reserve-date-container">
                                                <label htmlFor="rest-reserve-date">Date</label>
                                                <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date" />
                                            </div>
                                            <div className="rest-reserve-time-container">
                                                <label htmlFor="rest-reserve-time">Time</label>
                                                <select defaultValue='12:00 PM' onClick={this.handleChange('reservation_time')} className="rest-reserve-time" >
                                                    <option value="12:00 PM" >12:00 PM</option>
                                                    <option value="1:00 PM">1:00 PM</option>
                                                    <option value="2:00 PM">2:00 PM</option>
                                                    <option value="3:00 PM">3:00 PM</option>
                                                    <option value="4:00 PM">4:00 PM</option>
                                                    <option value="5:00 PM">5:00 PM</option>
                                                    <option value="6:00 PM">6:00 PM</option>
                                                    <option value="7:00 PM">7:00 PM</option>
                                                    <option value="8:00 PM">8:00 PM</option>
                                                    <option value="9:00 PM">9:00 PM</option>
                                                    <option value="10:00 PM">10:00 PM</option>
                                                </select>
                                            </div>
                                        </dir>
                                        <button type='submit'>Find a Table</button>
                                    </div>
                                </div>
                            </form>
                        )
                    }

                // }
        } else {
            
            content = (
                <form onSubmit={this.handleSubmit}>
                    <div className='rest-reservation-container'>
                        <div className='rest-show-h2'><h2>Make a reservation</h2></div>
                        <div className="rest-reserve-options">
                            <div className='rest-reserve-party-container'>
                                <label htmlFor="rest-reserve-party-select">Party Size</label>
                                <select defaultValue='2' onClick={this.handleChange('party_size')} name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
                                    <option name='2' value="2" >For 2</option>
                                    <option name='3' value="3">For 3</option>
                                    <option name='4' value="4">For 4</option>
                                    <option name='5' value="5">For 5</option>
                                    <option name='6' value="6">For 6</option>
                                    <option name='7' value="7">For 7</option>
                                    <option name='8' value="8">For 8</option>
                                    <option name='9' value="9">For 9</option>
                                    <option name='10' value="10">For 10</option>
                                </select>
                            </div>
                            <dir className="rest-reserve-datetime-container">
                                <div className="rest-reserve-date-container">
                                    <label htmlFor="rest-reserve-date">Date</label>
                                    <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date" />
                                </div>
                                <div className="rest-reserve-time-container">
                                    <label htmlFor="rest-reserve-time">Time</label>
                                    <select defaultValue='12:00 PM' onClick={this.handleChange('reservation_time')} className="rest-reserve-time" >
                                        <option value="12:00 PM" >12:00 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="8:00 PM">8:00 PM</option>
                                        <option value="9:00 PM">9:00 PM</option>
                                        <option value="10:00 PM">10:00 PM</option>
                                    </select>
                                </div>
                            </dir>
                            <button type='submit'>Find a Table</button>
                        </div>
                    </div>
                </form>
            )
        }}
    //     let button;
    //     if (this.props.restaurant){
    
    //         if (this.props.restaurant.reservations.length > 0) {
    
    //             for (let i = 0; i < this.props.restaurant.reservations.length; i++) {
    //                 let rezzo = this.props.restaurant.reservations[i]

    //                 if (this.props.restaurant.reservations[i].user_id === this.props.user) {
    

    //                     button = <button onClick={this.props.deleteReservation(rezzo.id)} type='submit'>Delete Reservation</button>
    //                 }
                    
    //             }
    //             // if (this.props.restaurant.reservations.includes(this.props.user)) {
    //             //         button = <button onClick={() => this.props.deleteReservation(this.props.user)} type='submit'>Delete Reservation</button>
    //             //     } 
    //     } else {
    //         
    //          button = <button type='submit'>Find a Table</button>
    //     }
    // }
                // hoy = hoy[1] + '/' + hoy[2] + '/' + hoy[0]
        
        return (
            <>
                { content }
            </>
            // <form onSubmit={this.handleSubmit}>
            //     <div className='rest-reservation-container'>
            //         <div className='rest-show-h2'><h2>Make a reservation</h2></div>
            //         <div className="rest-reserve-options">
            //             <div className='rest-reserve-party-container'>
            //                 <label htmlFor="rest-reserve-party-select">Party Size</label>
            //                 <select defaultValue='2' onClick={this.handleChange('party_size')} name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
            //                     <option name='2' value="2" >For 2</option>
            //                     <option name='3' value="3">For 3</option>
            //                     <option name='4' value="4">For 4</option>
            //                     <option name='5' value="5">For 5</option>
            //                     <option name='6' value="6">For 6</option>
            //                     <option name='7' value="7">For 7</option>
            //                     <option name='8' value="8">For 8</option>
            //                     <option name='9' value="9">For 9</option>
            //                     <option name='10' value="10">For 10</option>
            //                 </select>
            //             </div>
            //             <dir className="rest-reserve-datetime-container">
            //                 <div className="rest-reserve-date-container">
            //                     <label htmlFor="rest-reserve-date">Date</label>
            //                     <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date"  />
            //                 </div>
            //                 <div className="rest-reserve-time-container">
            //                     <label htmlFor="rest-reserve-time">Time</label>
            //                     <select defaultValue='12:00 PM' onClick={this.handleChange('reservation_time')} className="rest-reserve-time" >
            //                         <option value="12:00 PM" >12:00 PM</option>
            //                         <option value="1:00 PM">1:00 PM</option>
            //                         <option value="2:00 PM">2:00 PM</option>
            //                         <option value="3:00 PM">3:00 PM</option>
            //                         <option value="4:00 PM">4:00 PM</option>
            //                         <option value="5:00 PM">5:00 PM</option>
            //                         <option value="6:00 PM">6:00 PM</option>
            //                         <option value="7:00 PM">7:00 PM</option>
            //                         <option value="8:00 PM">8:00 PM</option>
            //                         <option value="9:00 PM">9:00 PM</option>
            //                         <option value="10:00 PM">10:00 PM</option>
            //                     </select>
            //                 </div>
            //             </dir>
            //             <button type='submit'>Find a Table</button>
                        
            //         </div>
            //     </div>
            // </form>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReservationForm));