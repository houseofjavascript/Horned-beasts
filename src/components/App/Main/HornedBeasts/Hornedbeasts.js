import React from "react";
import Button from 'react-bootstrap/Button'
import './Hornedbeasts.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


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

  handleImageClick = () => {
    this.props.handleModal(this.props.title, this.props.description, this.props.imageURL)
  }

  render(){
    return (
    <>
      <Col>
        <Card>
          <Card.Title >
              {this.props.name}
          </Card.Title>
            <h2>{this.props.title}</h2>
            <p>Favorite ❤️{this.state.likes}</p>
            <p onClick={this.handleLike}>Likes</p>
            <img src={this.props.imageURL} 
            alt={this.props.title} 
            description={this.props.description} 
            onClick={this.handleImageClick}></img>
          <Button variant="danger">
            Click to Save Me
          </Button>
        </Card>
      </Col>
    </>
    )
  }
}

export default HornedBeast;