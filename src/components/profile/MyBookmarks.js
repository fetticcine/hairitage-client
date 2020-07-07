import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, FlatList } from 'react-native';

import { getGoogleDriveHostUrl } from '../../utils';

const galleryImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1o-RfM-r7Rp0uuKR1gsUqic5g1tPYKUTs/view?usp=sharing');

//TODO: create static json file for user data
class MyBookmarks extends Component {
    render() {
        const { backgroundImageStyle, containerStyle, nameTextStyle } = styles;
        
        return (
            <View>
                <FlatList
                data={[{}, {}, {}, {}]}
                renderItem={() => 
                <TouchableOpacity>
                        <ImageBackground
                            style={backgroundImageStyle}
                            imageStyle={{ width: '100%', height:'100%', borderRadius: 10 }}
                            source={{uri: galleryImage}}
                        >
                            <View style={containerStyle}>
                                <Text style={nameTextStyle}>HIGH FADE</Text>
                            </View>
                        </ImageBackground>
                </TouchableOpacity>} 
                horizontal={true}
                />
            </View>
        );
    }
};

const styles = {
    backgroundImageStyle: {
        height: 150,
        width: 150,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'flex-end',
    },
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    nameTextStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        color: "#c4c4c4",
    },
};

export default MyBookmarks;