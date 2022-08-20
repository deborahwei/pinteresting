import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    footerForm: (
      <div className="footer-form-div" onClick={() => {
        dispatch(closeModal())
        dispatch(openModal('sign up'))
        }}>
        Not on Pinteresting yet? Sign up
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
