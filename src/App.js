import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainLayout from './Containers/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
