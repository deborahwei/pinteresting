import React from 'react'

const SplashPage = props => {

    const {title, photoUrl} = props
    
    return (
        <div className='splash-prompt-container'>
            <div className={`${title.split(" ")[0]}-words`}> {title} </div>
        </div>
    )
}

export default SplashPage