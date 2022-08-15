import React from 'react'

const SplashPage = props => {

    const {title, photoUrls, shouldShow, shouldLeave} = props
    
    return (
        <div className="splash-changing-container">
            <div className={`splash-prompt-container ${shouldShow ? "show-page" : shouldLeave ? "leaving-page" : "hidden-page"}`}>
                <div className={`${title.split(" ")[0]}-words`}> 
                    {title} 
                </div>
            </div>

            <div className="splash-photo-container">
            </div>
        </div>
    )
}

export default SplashPage