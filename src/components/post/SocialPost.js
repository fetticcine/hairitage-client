import React, { Component } from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getGoogleDriveHostUrl } from '../../utils';
import BaseButton from '../common/BaseButton';
import CardSection from '../common/CardSection';
import Card from '../common/Card';

// TODO: put drive links in json file (or get it from somewhere instead of hardcoding it) when it exists
const imageUrl = getGoogleDriveHostUrl('https://drive.google.com/file/d/1q-Gc5zBjSZvct45hAIkK4i-45r7D5Y9n/view?usp=sharing');
class SocialPost extends Component {
  state = { bookmark: false };

  render() {
    return (
       <Card>
          <CardSection>
            <ImageBackground
              style={{ width: '100%', height: 300, justifyContent: 'flex-end' }}
              imageStyle={{ width: '100%', height:'100%' }}
              source={{uri: imageUrl}}
            >
              <View style={{ flexDirection: 'row', marginLeft: 5, marginBottom: 5 }}>
                <BaseButton
                  // TODO: add functionality to the buttons when they're pressed.
                  onPress={() => alert('Go to profile.')} 
                  text="PROFILE"
                  buttonAlign='flex-start'
                />
                <TouchableOpacity
                  onPress={() => this.setState(prevState => ({ bookmark: !prevState.bookmark }))}
                >
                  <Icon 
                  name={this.state.bookmark ? "bookmark" : "bookmark-border"} 
                  size={30}
                  color="#c4c4c4" 
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </CardSection>

          <CardSection>
            <BaseButton
              // TODO: add functionality to the buttons when they're pressed.
              onPress={() => alert('Comments list should render.')}
              text="View all comments"
              borderColor='transparent'
            />
          </CardSection>
        </Card>   
    );
  }
}

export default SocialPost;
