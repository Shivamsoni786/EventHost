import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import {FormInput, HorizontalList} from '../../components';

const Home = ({navigation}) => {
  const [search, setSearch] = React.useState('');

  const cityArr = [
    {id: 1, name: 'nearby', img: icons.send},
    {id: 2, name: 'bangalore', img: images.bangalore},
    {id: 3, name: 'chennai', img: images.channai},
    {id: 4, name: 'delhi', img: images.delhi},
    {id: 5, name: 'gurgaon', img: images.gurgaon},
    {id: 6, name: 'mumbai', img: images.mumbai},
  ];

  const [cities, setCities] = React.useState(cityArr);

  const nearByPeopleArr = [
    {id: 1, name: 'joy', img: images.p1},
    {id: 2, name: 'brad', img: images.p2},
    {id: 3, name: 'jane', img: images.p2},
    {id: 4, name: 'granck', img: images.p4},
    {id: 5, name: 'john', img: images.p5},
  ];

  const [nearByPeople, setNearByPeople] = React.useState(nearByPeopleArr);

  const todayArr = [
    {id: 1, name: 'joy', bg_img: images.stadium, img: images.p1},
    {id: 2, name: 'brad', bg_img: images.painting},
  ];
  const [today, setToday] = React.useState(todayArr);

  function renderHeader() {
    return (
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => console.log('menu')}>
            <Image
              source={icons.menu}
              style={{height: 25, width: 25, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.transparentBlack2,
              padding: 6,
              borderRadius: 20,
            }}
            onPress={() => console.log('notification')}>
            <Image
              source={icons.bell}
              style={{height: 25, width: 25, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              maxHeight: 40,
              width: '80%',
            }}>
            <Image
              source={icons.search}
              style={{height: 20, width: 20, tintColor: COLORS.darkGray}}
            />
            <TextInput
              style={{flex: 1, color: COLORS.black}}
              placeholder="Search for Party, City or Location"
              placeholderTextColor={COLORS.darkGray}
              onChangeText={text => setSearch(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.yellow_400,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
            }}
            onPress={() => console.log('filter')}>
            <Image
              source={icons.filter}
              style={{height: 22, width: 22, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={{marginTop: 15}}>
          {cities.map((obj, index) => {
            return (
              <TouchableOpacity
                onPress={() => console.log(obj.name)}
                key={index}
                style={{
                  paddingLeft: index != 0 ? 15 : null,
                  alignItems: 'center',
                }}>
                <ImageBackground
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: COLORS.white,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={obj.img}
                    style={{
                      height: index == 0 ? 20 : 45,
                      width: index == 0 ? 20 : 45,
                      borderRadius: index == 0 ? 0 : 50,
                      tintColor: index == 0 ? COLORS.red_700 : null,
                    }}
                  />
                </ImageBackground>
                <Text
                  style={{
                    marginTop: 3,
                    ...FONTS.h4,
                    color: COLORS.white,
                    textTransform: 'capitalize',
                  }}>
                  {obj.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  function renderPeopleNearby() {
    return (
      <View style={{}}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 20,
            color: COLORS.white,
            fontWeight: '500',
          }}>
          People nearby
        </Text>
        <View
          style={{
            marginTop: 5,
            backgroundColor: COLORS.transparentBlack1,
            padding: 20,
          }}>
          <ScrollView horizontal>
            {nearByPeople.map((obj, index) => {
              return (
                <TouchableOpacity
                  onPress={() => console.log(obj.name)}
                  key={index}
                  style={{
                    paddingLeft: index != 0 ? 25 : null,
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    colors={[COLORS.yellow_500, COLORS.yellow_700]}
                    style={{
                      height: 55,
                      width: 55,
                      backgroundColor: COLORS.white,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={obj.img}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                      }}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        padding: 5,
                        backgroundColor: COLORS.transparentBlack5,
                        top: 0,
                        right: -10,
                        borderRadius: 20,
                      }}>
                      <Image
                        source={icons.heart}
                        style={{
                          height: 12,
                          width: 12,
                          tintColor: index % 2 ? COLORS.white : COLORS.red,
                        }}
                      />
                    </View>
                  </LinearGradient>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 3,
                    }}>
                    <Image
                      source={icons.message}
                      style={{
                        marginTop: 5,
                        height: 12,
                        width: 12,
                        tintColor: COLORS.lightGray1,
                      }}
                    />
                    <Text
                      style={{
                        left: 6,
                        ...FONTS.h4,
                        color: COLORS.lightGray1,
                        textTransform: 'capitalize',
                      }}>
                      {obj.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }

  function renderTodayTommContent() {
    return (
      <View style={{marginTop: 20}}>
        <View
          style={{
            marginHorizontal: 50,
            backgroundColor: '#C66F67',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 6,
            paddingVertical: 5,
            borderRadius: 30,
            elevation: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.darkGray,
              backgroundColor: COLORS.white,
              paddingHorizontal: 18,
              paddingVertical: 5,
              borderRadius: 30,
            }}>
            Individuals
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.white,
              //   backgroundColor: COLORS.white,
              padding: 5,
              borderRadius: 30,
            }}>
            Organizations
          </Text>
        </View>

        <View style={{padding: 20}}>
          <HorizontalList data={today} heading="Today" />
          <HorizontalList data={today} heading="Tomorrow" />
        </View>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#D82210', '#550505']} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        {renderHeader()}
        {renderPeopleNearby()}
        {renderTodayTommContent()}

        <TouchableOpacity
          onPress={() => navigation.navigate('EventDetails')}
          style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Text style={{color: COLORS.white, fontSize: 20, fontWeight: '500'}}>
            Click to go Second page...
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
