import React from 'react';
import { Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SocialPost from './SocialPost';


const imageStyle = {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
};

class SocialPostList extends React.Component {
    renderItem = ({item}) => {
        return (
        <SocialPost
            // senderName={item.senderName}
            // msgPreviewText={item.msgPreviewText}
            // // TODO: figure out way to use image links and not react nodes
            // // reason is b/c require takes in a string literal and is not dynamic
            // image={<Image style={imageStyle} source={require('../../assets/fade.jpg')} />}
            // timeStamp={item.timeStamp} 
        />
    )};

    render() {
        return (
            <FlatList
                //data={this.props.data}
                renderItem={this.renderItem} 
            />
        );
    }
}

// SocialPostList.propTypes = {
//     data: PropTypes.array.isRequired,
// };

export default SocialPostList;