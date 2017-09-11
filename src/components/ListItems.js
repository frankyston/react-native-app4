import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import Item from './Item';

export default class ListItems extends Component {
  render() {
    return (
      <ScrollView style={ {backgroundColor: '#DDD'} }>
        {this.props.listaItems.map(item => (<Item key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}

