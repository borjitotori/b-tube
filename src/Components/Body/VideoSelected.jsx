import React from 'react'
import '../../Styles/body.css'

const VideoSelected = (props) =>{

    if(props.video){
        return(
            <div className="VideoWindow">
            <div dangerouslySetInnerHTML={ {__html:  props.video ? props.video : ""}}/>
        </div>
        )
    }else{
        return null;
    }
}

export default VideoSelected;