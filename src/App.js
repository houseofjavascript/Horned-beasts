// 1st import react

import React from "react";
import Header from "./header";
import Main from './main';
import Footer from './footer';

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