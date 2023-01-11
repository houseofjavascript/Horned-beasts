import React from "react";
import HornedBeast from "./Hornedbeasts";
import data from './data/data.json';
import './Main.css';

class Main extends React.Component{
  render(){
    return (
    <>
      <main>
       {data.map((hornedBeast, index) => {
        return <HornedBeast title={hornedBeast.title} imageURL={hornedBeast.image_url} description={hornedBeast.description} key={index}
       />})} 
      </main>
    </>
    )
  }
}

export default Main;
