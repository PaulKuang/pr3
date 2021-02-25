import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button"

import './App.css'
import './Components/style.css'
import Body from './Components/Body'
import TabList from './Components/TabList'


class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render(){
    const tabs = [
      {
        id: 1,
        title: 'Text'
      },
      {
        id: 2,
        title: 'Image'
      },
      {
        id: 3,
        title: 'Video'
      },
      {
        id: 4,
        title: 'Table'
      },
      {
        id: 5,
        title: 'Email'
      }
    ];

    return (
      <body>
      <div className="page">
        <div className="nav-bar">
          <TabList 
            tabs={tabs}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
        </div>
        <section>
        <div className="body">
          <Body
            activeTab={this.state.activeTab}
          />
        </div>
        </section>
      </div>
      <ScrollUpButton/>
      </body>
    );
  }
};

export default App;
