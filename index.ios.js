import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListItems from './src/components/ListItems';
import Axios from 'axios';

export default class app4 extends Component {

  constructor(props) {
    super(props);

    this.state = { listItems: [] };
  }

  componentWillMount() {
    const url = 'http://faus.com.br./recursos/c/dmairr/api/itens.html';
    Axios.get(url)
    .then((res) => {
      this.setState({ listItems: res.data });
    }).catch(() => {
      console.log('Erro ao recuperar os dados.');
    });
  }

  render() {
    return (
      <ListItems listaItems={this.state.listItems}/>
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
