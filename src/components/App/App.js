// 1st import react

import React from "react";
import Header from '../App/Header/Header';
import Main from '../App/Main/Main';
import Footer from './Footer/Footer';
import Modal from 'react-bootstrap/Modal'
//import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

// 2nd build class component

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
    }
  }


  addHearts = () => {
    this.setState({
      heart: this.state.heart + ''
    });
  }

  handleModal = (name, description, image) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      showDescription: description,
      showPic: image,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }
  render() {
    return (
      <>
       <Header 
        heart={this.state.heart}/>
       <Main 
        addhearts={this.addHearts} 
        handleModal={this.handleModal}/>
       <Modal 
        show={this.state.showModal} 
        onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          {this.state.selectedBeast}
          {this.state.showDescription}
         
        </Modal.Header>
        <Modal.Body>
        <img src={this.state.showPic} alt=''></img>
        </Modal.Body>
       </Modal>
       <Footer />
      </>
    )
  }
}


// 3rd Export this component, other files can import them

export default App;