import React, { useState, useEffect} from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import TopBar from './components/TopBar/TopBar';
import axios from 'axios';
import data from './api/data';


function App() {

  const [feeds, setFeeds] = useState(data);

  const options = {
    method: 'GET',
    url: 'https://instagram130.p.rapidapi.com/account-feed',
    params: {username: 'adele'},
    headers: {
      'X-RapidAPI-Key': '1dcc38ad71mshb24355acf816063p179aecjsn7eb283dea071',
      'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    }
  };

  


  async function getFeeds (){
    let response = await axios.request(options);

    console.log(response.data);
    const allfeeds = response.data;
    setFeeds(allfeeds);
  }

  // getFeeds ();

  

  useEffect(() => {
    //getFeeds ();
  }, []);

  const [post, setPost] = React.useState(null);

  /*React.useEffect(() => {
    axios.get(options.url).then((response) => {
      setPost(response.data);
    });
  }, []);*/

 

  

  return (
    <div className="App">
      <TopBar />
      {
        feeds.map(feed => <Feed postfeed={feed} />)
      }
     {/* <Feed/>
      <Feed/>
    <Feed/> */}
    </div>
  );
}

export default App;
