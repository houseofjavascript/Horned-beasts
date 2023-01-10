import React from "react";
import Picture from "./horns.png"

class HornedBeast extends React.Component{
  render(){
    return (
    <>
      <h2>{this.props.title}</h2>
      <img src={Picture} alt="" title=" "></img>
      <p>{this.props.description}</p>
    </>
    )
  }
}

export default HornedBeast;