import React from 'react'
import '../../Styles/body.css'

const Video = (props) => {
    return(
        <div className="VideoResult" onClick={() => props.selectVideoHandler(props.id)}>
            <img className="VideotImage" src={props.image} alt={props.title}/>
            <div className="videoInfo">
                <div className="VideoTitle">
                    {props.title}
                </div>
                <div className="VideoDescription">
                    {props.description}
                </div>
        </div>
    </div>
    )
}

export default Video;