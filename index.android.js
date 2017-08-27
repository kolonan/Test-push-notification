

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import io from 'socket.io-client/dist/socket.io.js';

var alt;

export default class Test extends Component {
  constructor(props){
    super(props);
    alt = this;
    this.socket = io("http://child-tracker.herokuapp.com");
    this.socket.on("noti",function(data){
      alt.ShowNoti(data);
    })
  }

  ShowNoti(newData){
      PushNotification.configure({
      onRegister: function(token) {
          console.log( 'TOKEN:', token );
      },
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
      },
      senderID: "900062695595",
    });
      PushNotification.localNotification({
      message:"HELLO"+newData,
    });

  }
    render(){
      return(
        <View>
          <TouchableOpacity onPress={this.ShowNoti.bind(this)}>
            <Text></Text>
          </TouchableOpacity>
        </View>
      );
    }

}

AppRegistry.registerComponent('Test', () => Test);
