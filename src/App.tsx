import React from 'react';
import './App.scss';
import {Layout} from "./components/Layout";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="app">
      <Layout>

        <Header/>

      </Layout>
    </div>
  );
}

export default App;
