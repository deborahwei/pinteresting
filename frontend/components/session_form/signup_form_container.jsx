import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    footerForm: (
      <div className="footer-form-div" onClick={() => dispatch(openModal('login'))}>
        Already a member? Log in 
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
