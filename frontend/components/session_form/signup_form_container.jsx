import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup', 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    footerForm: (
      <div className="footer-form-div" onClick={() => dispatch(openModal('login'))}>
        Already a member? Log in 
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
