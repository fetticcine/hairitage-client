import React, { Component } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import ApptTicker from './ApptTicker';

import { getGoogleDriveHostUrl } from '../../utils';

const galleryImage = getGoogleDriveHostUrl('https://drive.google.com/file/d/1o-RfM-r7Rp0uuKR1gsUqic5g1tPYKUTs/view?usp=sharing');

//TODO: create static json file for user data
class MyCuts extends Component {
    render() {
        return (
            <View>
                <FlatList
                data={[{}, {}, {}, {}]}
                renderItem={() => <TouchableOpacity>
                    <Image style={styles.galleryImageStyle} source={{ uri: galleryImage }} />
                    </TouchableOpacity>} 
                horizontal={true}
                />
            </View>
        );
    }
};

const styles = {
    galleryImageStyle: {
        height: 150,
        width: 150,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
    },
};

export default MyCuts;