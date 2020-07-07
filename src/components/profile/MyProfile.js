import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ApptTicker from './ApptTicker';
import MyBarbers from './MyBarbers';
import MyCuts from './MyCuts'
import MyBookmarks from './MyBookmarks';


class MyProfile extends Component {
    state = {
        myBarbersView: true,
        myCutsView: false,
        myBookmarksView: false
    };

    onMyBarbersPress = () => {
        if (!this.state.myBarbersView) this.setState({ myBarbersView: true, myCutsView: false, myBookmarksView: false });
    };

    onMyCutsPress = () => {
        if (!this.state.myCutsView) this.setState({ myBarbersView: false, myCutsView: true, myBookmarksView: false });
    };

    onMyBookmarksPress = () => {
        if (!this.state.myBookmarksView) this.setState({ myBarbersView: false, myCutsView: false, myBookmarksView: true });
    };
  
    renderProfileScreen() {
        if (this.state.myBarbersView) {
            return (
                <MyBarbers />
            )
        } 
        else if (this.state.myCutsView) {
            return (
                <MyCuts />
            )
        }
        else if (this.state.myBookmarksView) {
            return (
                <MyBookmarks />
            )
        }
    };
    
    render() {
        return (
            <View>
                <ApptTicker />
                
                <View style={styles.TabsContainer}>
                    <View style={this.state.myBarbersView ? styles.selectedButton : styles.unselectedButton}>
                        <TouchableOpacity onPress={this.onMyBarbersPress}>
                                <Text style={styles.TabText}>My Barbers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.myCutsView ? styles.selectedButton : styles.unselectedButton}>
                        <TouchableOpacity onPress={this.onMyCutsPress}>
                            <Text style={styles.TabText}>My Cuts</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.myBookmarksView ? styles.selectedButton : styles.unselectedButton}>
                        <TouchableOpacity onPress={this.onMyBookmarksPress}>
                            <Text style={styles.TabText}>Bookmarks</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {this.renderProfileScreen()}
            </View>
        )
    }
}

const styles = {
    TabsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30, 
    },
    TabText: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 20,
        color: '#c4c4c4',
        paddingBottom: 5,
    },
    selectedButton: {
        borderColor: '#c4c4c4',
        borderBottomWidth: 2,
    },
    unselectedButton: {
        backgroundColor: 'transparent',
    },
};

export default MyProfile;