// 1st import react

import React from "react";
import Header from '../App/Header/Header';
import Main from '../App/Main/Main';
import Footer from './Footer/Footer';
import Modal from 'react-bootstrap/Modal'
import beasts from '../../data/data.json'
import Form from 'react-bootstrap/Form'


//import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

// 2nd build class component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
      allBeast: beasts,
    }
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    console.log(typeof selected);
    if (selected == '1' || selected == '2'|| selected == '3' || selected == '100') {
      let filteredBeast = beasts.filter(b => b.horns == selected)
      console.log(beasts)
      this.setState({ allBeast: filteredBeast })
    }
    else if(selected == 'all') {
      this.setState({ allBeast: beasts })
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
        {/* <ListGroup>
          {this.state.sortedData.map((num, idx) => {
            return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
          })}
        </ListGroup> */}

        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={100}>Many</option>
              <option value='all'>All</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Header
          heart={this.state.heart} />
        <Main
          beastsArray={this.state.allBeast}
          addhearts={this.addHearts}
          handleModal={this.handleModal} />
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