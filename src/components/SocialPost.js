import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import { Card, CardSection, Button, TextButton } from './common';

class SocialPost extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <ImageBackground
            style={{ width: '100%', height: '100%', justifyContent: 'flex-end' }}
            source={{ uri: 'https://i.pinimg.com/originals/54/29/bf/5429bfb768b377574416144e7b0dede0.png' }}
          >
            <Button>
              <Text>PROFILE</Text>
            </Button>
          </ImageBackground>
        </CardSection>

        <CardSection>
          <TextButton>View all comments</TextButton>
        </CardSection>
      </Card>
    );
  }
}

export default SocialPost;
