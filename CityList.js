import React ,{Component} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity,TextInput,View } from 'react-native';
import { Constants } from 'expo';


export default class CityList extends Component {
  static navigationOptions = {
    title: 'Cities',
  };

  state = {
    text: ''
  }; //


  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }
  handleChangeText = text => {
		this.setState({ text });
	};

	handleSubmitEditing = () => {
		if (!this.state.text) return;

		this.props.onSubmit(this.state.text);
		this.setState({ text: '' });
	};


  componentDidMount() {
    fetch('http://demo6468405.mockable.io/weather-crawlers/cities')
      .then(response => response.json())
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities
        });
      });
  }

  onPressCity(item) {
    this.props.navigation.navigate(
      'Detail',
      {
        city: item
      }
    );
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.searchBar}>
      <FlatList style={styles.container}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item}
                data={this.state.cities}
      />
      
      <TextInput
        value={this.state.text}
        autoCorrect={false}
        placeholder={this.props.placeholder}
        placeholderTextColor="#ffffff"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmitEditing}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'blue',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  searchBar: {
		flex: 1,
    paddingTop: 50
  },
  
	textInput: {
		width: 300,
		height: 50,
		marginTop: 40,
		backgroundColor: '#ccbfec',
		marginHorizontal: 20,
		paddingHorizontal: 10,
		alignSelf: 'center',
		color: '#ffffff'
  }
});