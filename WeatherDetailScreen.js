import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform,ActivityIndicator,ImageBackground } from 'react-native';
import { Constants } from 'expo';
import getImageForWeather from './getImagesForWeather';

const APP_ID = '9cdf9a8968f14244abd62ac12ecfe910';
//const ondo;

export default class WeatherDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
     const city = navigation.getParam('city', null);
    //const city = 'Daejeon';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;
    
    if(celsius<=4){
      source=require('./assets/cloth/ondo1.png');
    }
    else if(celsius>4&&celsius<=8){
      source=require('./assets/cloth/ondo2.png');
    }
    else if(celsius>8&&celsius<=11){
      source=require('./assets/cloth/ondo3.png');
    }
    else if(celsius>11&&celsius<=16){
      source=require('./assets/cloth/ondo4.png');
    }
    else if(celsius>16&&celsius<=19){
      source=require('./assets/cloth/ondo5.png');
    }
    else if(celsius>19&&celsius<=22){
      source=require('./assets/cloth/ondo6.png');
    }
    else if(celsius>22&&celsius<=27){
      //ondo={ondo7};
      //source=getImageForWeather(ondo);
      source=require('./assets/cloth/ondo7.png');
    }
    else if(celsius>27){
      source=require('./assets/cloth/ondo8.png');
    }

    return (
      <ImageBackground
          //source={getImageForWeather(ondo)}
          source={source}
					style={styles.imageContainer}
					imageStyle={styles.image}
				>
      <View>
        <Text style={styles.textTop}>
            Temperature
          </Text>
        <Text style={styles.textMiddle}>
            {celsius.toFixed(1)}
          </Text>
          <Text style={styles.recommend}>
            We recommend you to wear this kind of clothes in this weather! :)
          </Text>
      </View>
      </ImageBackground>
    );

  }
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  }*/
  textTop: {
		paddingTop: 90,
		textAlign: 'center',
    fontSize: 35,
    color: '#6E6E6E'
	},
  textMiddle: {
		marginTop: 100,
		textAlign: 'center',
    fontSize: 50,
  },

  imageContainer: {
		flex: 1
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
  },
  recommend: {
    marginTop: 120,
    textAlign: 'center',
    fontSize: 16,
    color: '#FF8000'
	}
});