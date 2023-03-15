import { SafeAreaView, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CommonStyleSheet from './CommonStyles/CommonStyleSheet';
import { Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from './redux/ApiActionCreator';
import { NEXT } from './image/imageFile';
import DetailScreenItem from './CommonStyles/DetailScreenPageItem';
import { MAIL, NAME } from './image/imageFile';
import ErrorMessage from './CommonStyles/ErrorMesssage';

type Props = {}

const Screen2 = (props: Props) => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const isLoading = useSelector((state) => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiCall('https://randomuser.me/api/?results=20'));
  }, []);

  return (
     <SafeAreaView style={CommonStyleSheet.viewAlignment}>
        {isLoading ? (<ActivityIndicator size="large" color="black" />) :
          ((data.length < 5) ? (<ErrorMessage message="Data Is Not Available Due To Json Response Failed" />) : (<FlatList
            data={data.results}
            ItemSeparatorComponent={
              () => <View style={{ height: 5 }}></View>
            }
            // If the results length is zero then we display data not available
            renderItem={({ item }) => data.results.length > 0 ? (
              <View>
                <Card style={CommonStyleSheet.screen2cardStyling}>
                  <Card.Content>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Detail Screen', { item })}>
                      <View style={CommonStyleSheet.screen2ViewStyling}>
                        <View style={{ width: '92%', flexDirection: 'column' }}>
                          <DetailScreenItem iconName={NAME} label="Name"
                            labelValue={item.name.title + " " + item.name.first + " " + item.name.last} />
                          <DetailScreenItem iconName={MAIL} label="Email ID"
                            labelValue={item.email} />
                        </View>
                        <Image source={NEXT} />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>
            ) : (<ErrorMessage message="Data Is Not Available Due To Result Array Empty" />)}
          >
          </FlatList>))
        }
      </SafeAreaView>

  )
}
export default Screen2