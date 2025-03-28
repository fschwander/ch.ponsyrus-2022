import React from 'react';
import './App.scss';
import {Layout} from "./components/Layout";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Layout>
        <Header/>
        {/*<Main>*/}
          {/*<h1>Ponsyrus Genossenschaft</h1>*/}
          {/*<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore*/}
          {/*  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.*/}
          {/*  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit*/}
          {/*  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam*/}
          {/*  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,*/}
          {/*  no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>*/}
        {/*</Main>*/}
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
