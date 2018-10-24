import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import BaseButton from '../common/BaseButton';
import { getGoogleDriveHostUrl } from '../../utils';
import ApptTicker from './ApptTicker';

const barberOneImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/11FAcxF6wMBaHjtsyWl7d5hKqyN22t_Ds/view?usp=sharing');
const barberTwoImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1tzzXQdPG3qKJzWpttCLgVEqWoxnP_Z4L/view?usp=sharing');
const barberThreeImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1REdU8QK8TqF9lX8yzqA4nzpa5NUZtETn/view?usp=sharing');

//TODO: create static json file for barber data
class MyBarbers extends Component {
    render() {
        const { containerStyle, imageStyle, nameTextStyle, textStyle, buttonViewStyle } = styles;

        return (
            <View>
                <View style={containerStyle}> 
                    <TouchableOpacity>
                        <Image style={imageStyle} source={{ uri: barberOneImage }} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={nameTextStyle}>JAYLEN BROWN</Text>
                        </TouchableOpacity>    
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={textStyle}>Next available: Mon April 9 at 10 am</Text>
                        </View>
                    </View>
                    <View style={buttonViewStyle}>
                        <BaseButton
                            onPress={() => alert('Go to booking flow.')} 
                            text="BOOK"
                            backgroundColor="#c4c4c4"
                            textColor="#fff"
                        />
                    </View>
                </View>

                 <View style={containerStyle}> 
                    <TouchableOpacity>
                        <Image style={imageStyle} source={{ uri: barberTwoImage }} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={nameTextStyle}>JAYSON TATUM</Text>
                        </TouchableOpacity>    
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={textStyle}>Next available: Thu April 12 at 2 pm</Text>
                        </View>
                    </View>
                    <View style={buttonViewStyle}>
                        <BaseButton
                            onPress={() => alert('Go to booking flow.')} 
                            text="BOOK"
                            backgroundColor="#c4c4c4"
                            textColor="#fff"
                        />
                    </View>
                </View>

                <View style={containerStyle}> 
                    <TouchableOpacity>
                        <Image style={imageStyle} source={{ uri: barberThreeImage }} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={nameTextStyle}>ELFRID PAYTON</Text>
                        </TouchableOpacity>    
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={textStyle}>Next available: Fri April 13 at 4:30 pm</Text>
                        </View>
                    </View>
                    <View style={buttonViewStyle}>
                        <BaseButton
                            onPress={() => alert('Go to booking flow.')} 
                            text="BOOK"
                            backgroundColor="#c4c4c4"
                            textColor="#fff"
                        />
                    </View>
                </View>
            </View>     
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        padding: 5,
        alignItems: 'center',
      },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    textStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        marginRight: 5,
        color: "#c4c4c4",
    },
    nameTextStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 20,
        color: "#c4c4c4",
    },
    buttonViewStyle: {
        position: 'absolute', 
        right: 0, 
        marginRight: 10,
    }
  };


export default MyBarbers;
