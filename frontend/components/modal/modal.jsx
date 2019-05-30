import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SessionFormContainer from '../session/session_form_container';
import SignupFormContainer from '../signup/signup_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <SessionFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
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

const mSP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSP, mDP)(Modal);