import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, icons, images, SIZES} from '../constants';

const HorizontalList = ({heading, data}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        marginLeft: index == 0 ? 0 : 5,
        marginRight: 5,
      }}>
      <View
        style={{
          height: 100,
          width: 180,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.amber_200,
        }}>
        <ImageBackground
          source={item.bg_img}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          {index == 0 && (
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                height: 35,
                width: 35,
                margin: 10,
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: COLORS.white,
              }}
            />
          )}
        </ImageBackground>
      </View>
      <View
        style={{
          padding: SIZES.radius,
          backgroundColor: COLORS.white,
          borderRadius: 25,
          top: -15,
          height: 100,
          width: 180,
          elevation: 5,
        }}>
        <View
          style={{
            top: -22,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.yellow_400,
            borderRadius: 15,
            padding: 2,
            alignSelf: 'flex-end',
            width: 65,
            justifyContent: 'center',
            borderWidth: 1.5,
            borderColor: COLORS.white,
          }}>
          <Image
            source={icons.button}
            resizeMode="cover"
            style={{
              height: 18,
              width: 18,
              tintColor: COLORS.white,
            }}
          />
          <Text
            style={{
              left: 5,
              color: COLORS.white,
              fontSize: 12,
              fontWeight: '500',
            }}>
            Join
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{top: -22, fontSize: 10, color: COLORS.darkGray}}>
            TODAY{' - '}
          </Text>
          <Text style={{top: -22, fontSize: 10, color: COLORS.red}}>
            08:00 PM
          </Text>
        </View>
        <Text style={{top: -18, fontSize: 16, color: COLORS.darkGray}}>
          Dance party at My Home With Music
        </Text>
        <View style={{alignSelf: 'flex-end', top: -16}}>
          <Text
            style={{fontSize: 12, fontWeight: '400', color: COLORS.darkGray}}>
            15/30
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Text
        style={{
          marginVertical: 6,
          color: COLORS.white,
          fontSize: 20,
          fontWeight: '500',
        }}>
        {heading}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalList;
