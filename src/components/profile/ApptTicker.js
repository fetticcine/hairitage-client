import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getGoogleDriveHostUrl } from '../../utils';

const barberImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1REdU8QK8TqF9lX8yzqA4nzpa5NUZtETn/view?usp=sharing');

//TODO: create static json file for appt data
class ApptTicker extends Component {
    render() {

        const { apptTickerContainerStyle, nextApptTextStyle, apptDetailsContainerStyle, iconImageStyle, nameTextStyle, textStyle } = styles;

        return (
            <View style={apptTickerContainerStyle}>
            <View style={{ marginLeft: 10 }}>
                <Text style={nextApptTextStyle}>NEXT</Text>
                <Text style={nextApptTextStyle}>APPOINTMENT</Text>
            </View>          
            <View style={apptDetailsContainerStyle}>
                <View style={{ flexDirection: 'column' }}>
                    <Icon name="star-border" size={10} color="#c4c4c4" />
                    <Icon name="star" size={10} color="#c4c4c4" />
                    <Icon name="star" size={10} color="#c4c4c4" />
                    <Icon name="star" size={10} color="#c4c4c4" />
                    <Icon name="star" size={10} color="#c4c4c4" />
                </View>  
                <TouchableOpacity>
                    <Image style={iconImageStyle} source={{ uri: barberImage }} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity>
                        <Text style={nameTextStyle}>ELFRID PAYTON</Text>
                    </TouchableOpacity>    
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={textStyle}>Tomorrow</Text>
                        <Text style={textStyle}>9-9:30 am</Text>
                        <Text style={textStyle}>Low Fade</Text>
                    </View>
                </View>
            </View>
          </View>
        );
    }
};

const styles = {
    apptTickerContainerStyle: {
        flexDirection: 'row', 
        marginTop: 10,
         marginBottom: 200,
    },
    nextApptTextStyle: {
        fontFamily: 'Futura-CondensedMedium', 
        fontSize: 24, 
        color: "#c4c4c4",
    },
    apptDetailsContainerStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        position: 'absolute', 
        right: 0, 
        marginRight: 10,
    },
    iconImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    nameTextStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 20,
        color: "#c4c4c4",
    },
    textStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        marginRight: 5,
        color: "#c4c4c4",
    },
  };

export default ApptTicker;





