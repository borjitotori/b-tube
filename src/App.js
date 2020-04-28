import React, {useState} from 'react';
import axios from 'axios'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import './App.css';

function App() {

  const apiKey = "AIzaSyA0K-Z6S08H2QyCSeQ2TPEhliQs6LehN5M";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";

  const [results, setResults] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [related, setRelated] = useState(undefined);
  const [view, setView] = useState(undefined)

  const searchHandler = (inputId) => {
    setView(undefined);
    axios.get(`${youtubeEndpoint}search?key=${apiKey}&q=${document.getElementById(inputId).value}&part=snippet&type=video&maxResults=50`)
    .then(response => {
      setResults(response.data.items);
    })
  };

  const selectVideoHandler = (videoId) => {
    setView(true);
    axios.get(`${youtubeEndpoint}videos?key=${apiKey}&id=${videoId}&part=player&maxResults=1`).
    then(response => {
      setVideo(response.data.items[0].player.embedHtml);
    })
    
    axios.get(`${youtubeEndpoint}search?key=${apiKey}&relatedToVideoId=${videoId}&part=snippet&maxResults=50&type=video`)
    .then(response => {
      setRelated(response.data.items);
      console.log(view);
    })
  }

  const goBackHandler = () => {
    setVideo(undefined);
    setResults(undefined);
    setRelated(undefined);
    setView(undefined);
  }

  return (
    <div className="App">
      <Header searchHandler={searchHandler} goBackHandler={goBackHandler}/>
      <Body video={video} related={related} view={view} results={results} selectVideoHandler={selectVideoHandler}/>
    </div>
  );
}

export default App;
