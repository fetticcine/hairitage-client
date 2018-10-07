import React from 'react';
import { FlatList } from 'react-native';

import SocialPost from './SocialPost';

class SocialPostList extends React.Component {
    render() {
        return (
            <FlatList
                data={[{}, {}, {}, {}]}
                renderItem={() => <SocialPost />} 
            />
        );
    }
}

export default SocialPostList;