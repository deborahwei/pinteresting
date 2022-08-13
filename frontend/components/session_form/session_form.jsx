import React, { useState } from 'react'

const SessionForm = props => {

    const [state, setState] = useState({
      username: '',
      password: ''
    })

    const update = (field) => {
        return e => setState({
          [field]: e.currentTarget.value
        });
    }

    const closeModal = (e) => {
      e.preventDefault();
      props.closeModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = Object.assign({}, state);
        props.processForm(user)
    }

    const renderErrors = () => {
        return(
          <ul>
            {props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    let headerText = props.formType === 'signup' ? 'Find new ideas to try' : ''
    let userAuthText = props.formType === 'signup' ? 'Continue' : 'Log in'

    return (
        <div className="auth-form-modal">
          <div className="auth-form-header">
            <div className="exit-modal" onClick={closeModal}>×</div>
            <i className="fa-brands fa-pinterest fa-2x"></i>
            <h1>Welcome to Pinterest</h1>
            <h2>{headerText}</h2>
          </div>
          <form onSubmit={handleSubmit}>
              {renderErrors()}
              <label>Username
                  <input type="text"
                  value={state.username}
                  onChange={update('username')}
                  placeholder='Username'
                  />
              </label>
              <label>Password
                  <input type="password"
                  value={state.password}
                  onChange={update('password')}
                  placeholder='Password'
                  />
              </label>
            
              <button type="submit" value={props.formType}> {userAuthText} </button>
              <span>OR</span>
              <button>Continue with Demo User</button>

          </form>
          <footer>
            <p> By continuing, you agree this is just a Pinterest Clone. </p>
            <div className="auth-form-line-break"></div>
            {props.footerForm}
          </footer>
        </div>
    )

}

export default SessionForm 