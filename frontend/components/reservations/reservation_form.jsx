import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {createReservation, deleteReservation } from '../../actions/reservation_actions';

export const mSP = (state, ownProps) => {
    debugger
    return (
        { 
            restaurant: ownProps.match.params.id,
            user: state.session.id
        }
    )
}

export const mDP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    deleteReservation: (reservation) => dispatch(deleteReservation(reservation))
})


class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            party_size: '',
            reservation_time: '',
            reservation_date: '',
            restaurant_id: this.props.restaurant,
            user_id: this.props.user,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
        if (Object.values(this.props.restaurant).length === 0) { return null }
        let hoy = new Date().toISOString().substring(0, 10);
        let button;
        debugger
        // if (this.props.restaurant.reservations.includes(this.state.session.id)) {
        //     button = <button type='submit'>Delete Reservation</button>
        // } else {
        //     button = <button type='submit'>Find a Table</button>
        // }
        // hoy = hoy[1] + '/' + hoy[2] + '/' + hoy[0]
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='rest-reservation-container'>
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
                                <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date"  />
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
                        <button type='submit'>Find a Table</button>                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReservationForm));