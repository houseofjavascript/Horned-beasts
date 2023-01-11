import React from "react";
import Button from 'react-bootstrap/Button'
import './Hornedbeasts.css'


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render(){
    return (
    <>
      <h2>{this.props.title}</h2>
      <p>Favorite ❤️{this.state.likes}</p>
      <p onClick={this.handleLike}>Likes</p>
      <img src={this.props.imageURL} alt={this.props.title} description={this.props.description}></img>
      <Button variant="danger">Click to Save Me</Button>
    </>
    )
  }
}

export default HornedBeast;