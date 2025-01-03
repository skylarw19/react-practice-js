import './Popup.css'

export default function Popup({ onClickExitButton }) {

    return(
        <>
            <div className="popup">
                <p>pop up</p>
                <button className="exit-button" onClick={onClickExitButton}>X</button>
            </div>
        </>
    )
}