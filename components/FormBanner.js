import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, images, icons, FONTS} from '../constants';

const FormBanner = ({icon, title}) => {
  return (
    <View style={{marginTop: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: COLORS.lightGray1,
            borderRadius: 5,
          }}
          onPress={() => console.log('form')}>
          <Image
            source={icon}
            style={{height: 20, width: 20, tintColor: COLORS.red_600}}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 18,
            color: COLORS.darkGray,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default FormBanner;
