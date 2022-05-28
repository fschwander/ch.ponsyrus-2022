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
        <Main>hello</Main>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
