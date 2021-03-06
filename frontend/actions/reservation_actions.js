import * as ReservationApiUtil from '../util/reservation_utils';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';

export const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = (id) => ({
    type: REMOVE_RESERVATION,
    id
})

export const receiveReservationErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
})

export const createReservation = (reservation) => (dispatch) => {
    return ReservationApiUtil.createReservation(reservation).then(response => {
        return dispatch(receiveReservation(response))
    }, response => dispatch(receiveReservationErrors(response)) )
};

export const fetchReservation = (id) => (dispatch) => {
    return ReservationApiUtil.fetchReservation(id).then(response => {
        return dispatch(receiveReservation(response))
    }, response => dispatch(receiveReservationErrors(response)))
};

export const fetchReservations = () => (dispatch) => {
    return ReservationApiUtil.fetchReservations().then(response => {
        return dispatch(receiveReservations(response))
    }, response => dispatch(receiveReservationErrors(response)))
}

export const deleteReservation = (id) => (dispatch) => {
    return ReservationApiUtil.deleteReservation(id).then(response => {
        return dispatch(removeReservation(response))
    })
};