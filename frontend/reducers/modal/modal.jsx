import SessionFormContainer from '../../components/session/session_form_container';
import LoginFormContainer from '../../components/signup/signup_form_container';

export const Modal = ({modal, closeModal}) => {

    return (
        <>
        <button id="myBtn">Open Modal</button>


        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
             </div>

        </div>
        </>
    )
}