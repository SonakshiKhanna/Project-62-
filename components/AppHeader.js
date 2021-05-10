import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textCont}>
        <Text style={styles.text}> School Attendance </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textCont:{
    backgroundColor: 'yellow',
  },
  text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
