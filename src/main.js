import React from "react";
import HornedBeast from "./hornedbeast";
import Picture from "./horns.png"

class Main extends React.Component{
  render(){
    return (
    <>
      <HornedBeast title="Ragnar" description="Leader" image_url={Picture}/>
      <HornedBeast title="Bourne" description="Fighter" image_url={Picture}/>
    </>
    )
  }
}

export default Main;