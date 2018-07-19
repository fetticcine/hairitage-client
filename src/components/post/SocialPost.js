import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import BaseButton from '../common/BaseButton';
import CardSection from '../common/CardSection';
import Card from '../common/Card';

class SocialPost extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <ImageBackground
            style={{ width: '50%', height: '50%', justifyContent: 'flex-end', flex: 1 }}
            source={{ uri: 'https://i.pinimg.com/originals/54/29/bf/5429bfb768b377574416144e7b0dede0.png' }}
          >
            <BaseButton
            text="PROFILE"
            />
          </ImageBackground>
        </CardSection>

        <CardSection>
          <BaseButton
          text="View all comments"
          />
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
//   // cardStyle: {
//   //   borderWidth: 1,
//   //   borderRadius: 2,
//   //   borderColor: '#ddd',
//   //   borderBottomWidth: 0,
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.1,
//   //   elevation: 2,                                          
//   //   marginLeft: 5,
//   //   marginRight: 5,
//   //   marginTop: 10,
//   // },
//   // cardSectionStyle: {
//   //   borderBottomWidth: 1,
//   //   padding: 5,
//   //   borderColor: '#ddd',
//   //   backgroundColor: '#fff',
//   //   justifyContent: 'center',
//   //   flexDirection: 'row',
//   //   position: 'relative'
//   // },
// }

export default SocialPost;
