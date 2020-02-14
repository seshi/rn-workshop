import React, {Component} from 'react';
import {Platform, Dimensions, FlatList, Alert, Button, TextInput, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';

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
    const {width, height} = Dimensions.get('screen');
    const isPortrait = (width < height)? true: false;
    const backgroundColor = (isPortrait)? '#a9a9a9': '#555ddd';
    const headerText = (Platform.OS === 'ios')? 'iOS': 'Android';

    return(
      <View style={{ height: height/5, backgroundColor}}>
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
        <View style={styles.halfContainer}>
          <ScrollView
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
          </ScrollView>
        </View>
        <View style={styles.halfContainer}>
          {
            (this.state.list.length)?
            <FlatList 
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  halfContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: "center",
    alignItems: 'center'
  }
});
