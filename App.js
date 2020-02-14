import React, {Component} from 'react';
import {FlatList, Alert, Button, TextInput, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';

export default class App extends Component<Props> {
  state = {
    list: []
  }

  componentDidMount() {
    setTimeout(() => this.fillList(100), 1000);
  }

  fillList = (numberOfRows) => {
    const list = [...Array(numberOfRows)].map( (x,i) => ({key: `a${i}`}) );
    this.setState({list});
  }
  
  renderItem = (item) => {
    return(
      <TouchableOpacity 
      onPress={() => Alert.alert(`you cliked ${item.key}`)}
      style={{backgroundColor: '#afe'}}
      >
        <Text style={styles.input}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => <View style={{ height:10, backgroundColor: '#D4AF37'}}></View>

  renderHeader = () => {
    

    return(
      <View style={{ height: height/5, backgroundColor: '#a9a9a9'}}>
        <Text style={[styles.welcome, {color: '#fff'} ]}>welcome to the {headerText} header</Text>
      </View>
    )
  }

  renderFooter = () => {
    return(
      <View style={{ height: 100, backgroundColor: '#000'}}>
        <Text style={[styles.welcome, {color: '#fff'} ]}>Footer</Text>
      </View>
    )
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    
    return (      
      <View style={styles.container}>
        {/* <ScrollView
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center'}}
        centerContent
        maximumZoomScale={2}
        minimumZoomScale={1}
        >
          <TouchableHighlight>
            <Image 
              style={{width: 300, height: 300}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
          </TouchableHighlight>
        </ScrollView> */}
        {
          (this.state.list.length)?
          <FlatList 
            style={{marginTop: 50, marginBottom: 50}}
            data={this.state.list}
            renderItem={ ({item}) => this.renderItem(item)}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={() => this.fillList(this.state.list.length + 50) }
            onEndReachedThreshold={0.1}            
          />: <ActivityIndicator />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    width: 400,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black'
  }
});
