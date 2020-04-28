import React from 'react'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'
import '../../Styles/body.css'

const Body = (props) => {
    let result = null

    if(props.view === undefined){
        result = (
            <div className="Body">
                <VideoList className="VideoList" 
                    results={props.results} 
                    selectVideoHandler={props.selectVideoHandler}/>
            </div>
        )
    }else{
        result = (
            <div className="Body">
                <VideoSelected className="VideoPlayer" video={props.video}/>
                <VideoList className="VideoList" 
                    results={props.related} 
                    selectVideoHandler={props.selectVideoHandler}
                    />
            </div>
        )
    }

    return result;
}

export default Body;