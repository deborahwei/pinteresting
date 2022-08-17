import React from 'react'
import { connect } from 'react-redux';

const CreateBoardForm = () => {

}

const mSTP = state => {
    return {
      modal: state.ui.modal
    };
  };
  
  const mDTP = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };
  

export default connect(mSTP, mDTP)(CreateBoardForm)