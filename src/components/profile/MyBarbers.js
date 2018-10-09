import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BaseButton from '../common/BaseButton';
import { getGoogleDriveHostUrl } from '../../utils';

const barberOneImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/11FAcxF6wMBaHjtsyWl7d5hKqyN22t_Ds/view?usp=sharing');
const barberTwoImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1tzzXQdPG3qKJzWpttCLgVEqWoxnP_Z4L/view?usp=sharing');

class MyBarbers extends Component {
    render() {

        const { imageStyle, nameTextStyle, textStyle, containerStyle } = styles;

        return (
            <View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 200 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Futura-CondensedMedium', fontSize: 24, color: "#c4c4c4" }}>NEXT</Text>
                        <Text style={{ fontFamily: 'Futura-CondensedMedium', fontSize: 24, color: "#c4c4c4" }}>APPOINTMENT</Text>
                    </View>          
                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 0, marginRight: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Icon name="star-border" size={10} color="#c4c4c4" />
                            <Icon name="star" size={10} color="#c4c4c4" />
                            <Icon name="star" size={10} color="#c4c4c4" />
                            <Icon name="star" size={10} color="#c4c4c4" />
                            <Icon name="star" size={10} color="#c4c4c4" />
                        </View>  
                        <TouchableOpacity>
                            <Image style={imageStyle} source={{ uri: barberOneImage }} />
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Text style={nameTextStyle}>JAYLEN BROWN</Text>
                            </TouchableOpacity>    
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={textStyle}>Tomorrow</Text>
                                <Text style={textStyle}>9-9:30 am</Text>
                                <Text style={textStyle}>Low Fade</Text>
                            </View>
                        </View>
                    </View>
                </View>


              
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
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
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
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
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
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        padding: 5,
        alignItems: 'center',
      }
  };


export default MyBarbers;
