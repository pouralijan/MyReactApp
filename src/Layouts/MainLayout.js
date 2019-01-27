import React, { Component } from 'react';
import HeaderLayout from './HeaderLayout';
import ContentLayout from './ContentLayout';
import YTDLLayout from './YTDLLayout';
import FooterLayout from './FooterLayout';

class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLayout/>
        <ContentLayout>
          <YTDLLayout/>
        </ContentLayout>
        <FooterLayout/>
      </div>
    );
  }
}

export default MainLayout;
