import React from 'react';
import { View } from 'react-native';

export default class Controller extends React.Component {

  constructor(props) {
    super(props);
  //  console.log('constructor of Controller')
    this.state = {
      token: "",
    };
  }

   componentDidMount() {
   // console.log('HI componentDidMount of Controller')
  }
   componentWillUnmount() {
   // console.log('HI componentWillUnmount of Controller')
  }

  hola(){
    //console.log('HOLA called')
  }

}