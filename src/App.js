// 1st import react

import React from "react";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';

// 2nd build class component

class app extends React.Component {
  render() {
    return (
      <>
       <Header />
       <Main />
       <Footer />
      </>
    )
  }
}


// 3rd Export this component, other files can import them

export default app;