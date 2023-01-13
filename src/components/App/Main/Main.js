import React from "react";
import HornedBeast from "./HornedBeasts/Hornedbeasts";
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {this.props.beastsArray.map((hornedBeast, index) => {
                return <HornedBeast 
                title={hornedBeast.title} 
                imageURL={hornedBeast.image_url} 
                description={hornedBeast.description} 
                key={index} 
                addHearts={this.props.addHearts} 
                handleModal={this.props.handleModal}
                />
              })}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;