import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {HeaderBar, FormBanner} from '../components';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import CheckBox from '@react-native-community/checkbox';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const EventDetails = ({navigation}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [partyStartDate, setPartyStartDate] = React.useState('');
  const [partyEndDate, setPartyEndDate] = React.useState('');
  const [partyStartTime, setPartyStartTime] = React.useState('');
  const [partyEndTime, setPartyEndTime] = React.useState('');
  const [location, setlocation] = React.useState('');
  const [partyType, setPartytype] = React.useState('');
  const [partyLimit, setPartyLimit] = React.useState('');
  const [startPeopleAge, setStartPeopleAge] = React.useState('');
  const [endPeopleAge, setEndPeopleAge] = React.useState('');

  const arr = [
    {id: 1, img: images.p1},
    {id: 2, img: images.p2},
    {id: 3, img: images.p3},
    {id: 4, img: images.p4},
    {id: 5, img: images.p5},
  ];
  const [invitePeople, setInvitePeople] = React.useState(arr);

  const [partyStatusCheckBox, setpartyStatusCheckBox] = React.useState(false);
  const [partyStatusCheckBox1, setpartyStatusCheckBox1] = React.useState(false);

  const [maleCheckBox, setMaleCheckBox] = React.useState(false);
  const [femaleCheckBox, setFemaleCheckBox] = React.useState(false);
  const [coupleCheckBox, setCoupleCheckBox] = React.useState(false);
  const [otherCheckBox, setOtherCheckBox] = React.useState(false);

  //------------
  // DATE & TIME
  const [date, setDate] = React.useState(new Date());
  const formatedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, '0');
  let strTime = hours + ':' + minutes + ' ' + ampm;
  const formatedTime = strTime;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      locale: 'en-IN',
      display: 'calendar',
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  function renderStartDate() {
    return (
      <View>
        <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
          Target date & Time
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: SIZES.base,
            backgroundColor: COLORS.gray3,
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.base,
            // ...styles.shadow,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.darkGray,
                }}>
                Date - {formatedDate}
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.darkGray,
                  left: 10,
                }}>
                Time - {date.toLocaleTimeString()}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={showDatepicker}>
                <Image
                  source={icons.date}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.black,
                    right: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={showTimepicker}>
                <Image
                  source={icons.time}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.lightGray1,
              padding: 8,
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.arrow}
              style={{
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
          <View></View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 30,
            backgroundColor: COLORS.red_900,
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
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => console.log('Mic')}>
            <View
              style={{
                backgroundColor: COLORS.red_700,
                padding: 8,
                borderRadius: 20,
              }}>
              <Image
                source={icons.microphone}
                style={{height: 22, width: 22, tintColor: COLORS.white}}
              />
            </View>
            <Text
              style={{
                left: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.red_900,
              }}>
              Host New Event
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.gray2,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
            }}
            onPress={() => console.log('next')}>
            <Text
              style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.line}
              style={{height: 40, width: 20, tintColor: COLORS.darkGray}}
            />
            <TextInput
              style={{fontSize: 30}}
              placeholder="Add title"
              placeholderTextColor={COLORS.darkGray}
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.menu}
              style={{height: 20, width: 20, tintColor: COLORS.darkGray}}
            />
            <TextInput
              style={{fontSize: 16, left: 10}}
              placeholder="Add Description"
              placeholderTextColor={COLORS.darkGray}
              onChangeText={text => setDescription(text)}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginVertical: 5,
              borderColor: COLORS.lightGray1,
            }}></View>
          <FormBanner icon={icons.gallery} title="Add cover photo" />
          <FormBanner icon={icons.calendar} title="Date and time" />

          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="Party Start Date"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setPartyStartDate(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.calendar}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="Party End Date"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setPartyEndDate(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.calendar}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="Party Start Time"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setPartyStartTime(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.clock}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="Party End Time"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setPartyEndTime(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.clock}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.location} title="Add location" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // width: '45%',
                borderBottomWidth: 1,
                borderColor: COLORS.blue,
              }}>
              <TextInput
                style={{color: COLORS.black}}
                placeholder="Select your live location on google"
                placeholderTextColor={COLORS.blue}
                onChangeText={text => setlocation(text)}
              />
              <Image
                source={icons.location}
                style={{height: 16, width: 16, tintColor: COLORS.blue}}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.party} title="Party type" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // width: '45%',
                borderBottomWidth: 1,
                borderColor: COLORS.blue,
              }}>
              <TextInput
                style={{color: COLORS.black}}
                placeholder="House party"
                placeholderTextColor={COLORS.blue}
                onChangeText={text => setPartytype(text)}
              />
              <Image
                source={icons.chevron}
                style={{height: 16, width: 16, tintColor: COLORS.blue}}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.sex} title="Gender" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <CheckBox
                  disabled={false}
                  value={maleCheckBox}
                  onValueChange={newValue => setMaleCheckBox(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>Male</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={femaleCheckBox}
                  onValueChange={newValue => setFemaleCheckBox(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>
                  Female
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={coupleCheckBox}
                  onValueChange={newValue => setCoupleCheckBox(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>
                  Couple
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={otherCheckBox}
                  onValueChange={newValue => setOtherCheckBox(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>
                  Other
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.group} title="Age group" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="Start age"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setStartPeopleAge(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.clock}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                  borderBottomWidth: 1,
                  borderColor: COLORS.blue,
                }}>
                <TextInput
                  style={{color: COLORS.black}}
                  placeholder="End age"
                  placeholderTextColor={COLORS.blue}
                  onChangeText={text => setEndPeopleAge(text)}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  <Image
                    source={icons.clock}
                    style={{height: 16, width: 16, tintColor: COLORS.blue}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.alert} title="Party people limit" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // width: '45%',
                borderBottomWidth: 1,
                borderColor: COLORS.blue,
              }}>
              <TextInput
                style={{color: COLORS.black}}
                placeholder="House party"
                value="30"
                placeholderTextColor={COLORS.blue}
                onChangeText={text => setPartyLimit(text)}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.check} title="Party status" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 50,
                }}>
                <CheckBox
                  disabled={false}
                  value={partyStatusCheckBox}
                  onValueChange={newValue => setpartyStatusCheckBox(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>Full</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={partyStatusCheckBox1}
                  onValueChange={newValue => setpartyStatusCheckBox1(newValue)}
                />
                <Text style={{fontSize: 14, color: COLORS.darkGray}}>
                  Awaited
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <FormBanner icon={icons.add_group} title="Invite people" />
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 50,
                }}>
                {invitePeople.map((obj, index) => (
                  <TouchableOpacity
                    style={{
                      borderWidth: 1.5,
                      height: 35,
                      width: 35,
                      borderColor: COLORS.yellow_400,
                      borderRadius: 30,
                      marginLeft: -12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={index}>
                    <Image
                      source={obj.img}
                      style={{
                        height: 25,
                        width: 25,
                        borderColor: COLORS.yellow_400,
                        borderRadius: 30,
                        // marginLeft: -18,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.blue,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 12,
                }}
                onPress={() => console.log('invite')}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.white,
                  }}>
                  INVITE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 60, alignItems: 'center'}}>
            <Image
              source={icons.minus}
              style={{height: 30, width: 80, tintColor: COLORS.red_800}}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
      </ScrollView>
    </View>
  );
};

export default EventDetails;
