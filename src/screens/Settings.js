import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Settings extends React.Component {
  render() {
    const { sectionHeaderTextStyle, rowContainerStyle, itemHeaderTextStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={sectionHeaderTextStyle}>Account</Text>
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Account Details</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
        
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Change Password</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
        
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Payment Details</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
        
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Invite Friends</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>

        <Text style={sectionHeaderTextStyle}>General</Text>
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Location Services</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
        
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>Notifications</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
        
        <View style={rowContainerStyle}>
          <Text style={itemHeaderTextStyle}>About Hairitage</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={30} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  rowContainerStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignContent: 'center', 
    padding: 10,
  },
  sectionHeaderTextStyle: {
    fontFamily: 'Futura-CondensedMedium',
    fontSize: 22,
    color: '#c4c4c4',
    margin: 10,
  },
  itemHeaderTextStyle: {
    fontFamily: 'Futura-CondensedMedium',
    fontSize: 18,
    color: '#c4c4c4',
  }
}
