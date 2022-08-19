import React from 'react'

const LoadingContainer = () => {
    return (
        <div className='loading-container'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="hlnsttp://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#e60023" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.7407407407407407s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                    </circle>
                </svg>
            </div>
        </div>
    )
}


export default LoadingContainer