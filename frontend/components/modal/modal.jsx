import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import SignupFormContainer from '../signup/signup_form_container';
import ReviewForm from '../reviews/review_form';

function Modal({ modal, closeModal, review }) {
    if (!modal) {
        return null;
    }
    let component;
    
    switch (modal[0]) {
        case 'login':
            component = <SessionFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'createReview':
            component = <ReviewForm />;
            break;
        case 'editReview':
            
            component = <ReviewForm review={modal[1]}/>;
            break;
        default:
            return null;
    }
    // let winModal = document.getElementById('signup');
    // let wModal = document.getElementById('modal-parent');
    // window.onClick = (e) => {
    //     if (e.target === winModal) {
    //         winModal.style.display = "none";
    //     }
    //     if (e.target === wModal) {
    //         wModal.style.display = "none";
    //     }
    // }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSP = (state, ownProps) => {
    
    if (state.entities.restaurants[ownProps.location.pathname.slice(13)] !== undefined) {
        return {
            modal: state.ui.modal,
            restaurant: state.entities.restaurants[ownProps.location.pathname.slice(13)]
        }
    } else {
        return {
            modal: state.ui.modal
        }
    }
};

const mDP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSP, mDP)(Modal));