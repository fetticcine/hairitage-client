import React from 'react';

import data from '../../data/messageData.json';
import MessagesList from './MessagesList';

class MessageListContainer extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({
            data
        })
    }

    render() {
        return (
            <MessagesList data={this.state.data} />
        );
    }
}

export default MessageListContainer;