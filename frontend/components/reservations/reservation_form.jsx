import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {createReservation} from '../../actions/reservation_actions';

export const mSP = (state, ownProps) => {
    // debugger
    return (
        { 
            restaurant: ownProps.match.params.id,
            user: state.session.id
        }
    )
}

export const mDP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation))
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
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='rest-reservation-container'>
                    <div className='rest-show-h2'><h2>Make a reservation</h2></div>
                    <div className="rest-reserve-options">
                        <div className='rest-reserve-party-container'>
                            <label for="rest-reserve-party-select">Party Size</label>
                            <select onClick={this.handleChange('party_size')} name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
                                <option name ='2' value="2">For 2</option>
                            </select>
                        </div>
                        <dir className="rest-reserve-datetime-container">
                            <div className="rest-reserve-date-container">
                                <label for="rest-reserve-date">Date</label>
                                <input onChange={this.handleChange('reservation_date')} className='rest-reserve-date' type="date" />
                            </div>
                            <div className="rest-reserve-time-container">
                                <label for="rest-reserve-time">Time</label>
                                <select onClick={this.handleChange('reservation_time')} className="rest-reserve-time" >
                                    <option value="7:00 PM">7:00 PM</option>
                                </select>
                            </div>
                        </dir>
                        <button type='submit'>Find a Table</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReservationForm));