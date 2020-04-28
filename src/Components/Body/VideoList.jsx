import React from 'react'
import Video from './Video'
import '../../Styles/body.css'

const VideoList = (props) => {
    let result = null;

    if(props.results) {
        result = (
            <div className="SearchResults">
                {props.results.map((result) => {
                    return <Video key={result.id.videoId} 
                    id={result.id.videoId} 
                    title={result.snippet.title} 
                    description={result.snippet.description} 
                    image={result.snippet.thumbnails.default.url} 
                    selectVideoHandler={props.selectVideoHandler}/>;
                })}
            </div> 
         );
    }

    return result;
};

export default VideoList;