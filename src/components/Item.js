import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Item extends Component {

  render() {
    return (
      <View style={ styles.wrapperItem }>
        <View style={ styles.wrapperPhoto }>
          <Image style={ styles.photo } source={ { uri: this.props.item.foto } } />
        </View>
        <View style={ styles.detailItem }>
          <Text style={ styles.title }>{this.props.item.titulo}</Text>
          <Text>R$ {this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Publicado em: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperItem: {
    backgroundColor: '#FFF',
    flex: 1, 
    flexDirection: 'row', 
    marginVertical: 10, 
    borderWidth: 0.5, 
    borderColor: '#999', 
    margin: 10, 
    padding: 10
  },
  photo: {
    height: 100, 
    width: 100 
  },
  detailItem: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14, 
    fontWeight: 'bold',
    color: 'blue'
  }
});