import Popup from './Popup'
import './Update.css'

import { useState } from 'react'

export default function Update({ update }) {
    const [showReviewButton, setShowReviewButton] = useState(update.status === 'review')
    const [showPopUp, setShowPopUp] = useState(false)

    function handleButtonClick() {
        setShowPopUp(s => !s)
    }

    return(
        <>
            <div className="update">
                <p className="update-item">{update.startTime} - {update.endTime}</p>
                <p className="update-item">{update.happyScore}</p>
                <p className="update-item">{update.user.name}</p>
                <p className="update-item">{update.status} {update.time}</p>
                <button className="update-item" onClick={handleButtonClick}>{ showReviewButton ? 'Review' : 'View'}</button>
            </div>
                {/* this should be a seaprate comp, where on load it'll get all updates for that user */}
            <div className="popup-container">
                {showPopUp && <Popup onClickExitButton={handleButtonClick} />}
            </div>
        </>
    )
}

/**
 * update period (start/end time)
 * happy score
 * user
 * status (shared/reviewed), status time
 * review/view button
    * when button is clicked, we see
    * list of questions and answers
 */