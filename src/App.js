import React, {Component} from "react";
import api from './services/api';

import Header from './components/Header';
import Main from './components/List';

export default class App extends Component {

  state = {
}

render () {
  return(
  <div className="App">
    <Header />
  </div>
  );
}
};
