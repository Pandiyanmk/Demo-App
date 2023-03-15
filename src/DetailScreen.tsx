import { SafeAreaView, View, Image, ScrollView } from 'react-native';
import React from 'react';
import CommonStyleSheet from './CommonStyles/CommonStyleSheet';
import { Card } from 'react-native-paper';
import { IDCARD, ADDRESS, AGE, DOB, GENDER, MAIL, MOBILE, NAME } from './image/imageFile';
import DetailScreenItem from './CommonStyles/DetailScreenPageItem';

type Props = {}

const ScreenB = (props: Props) => {

  const nameOfUser = props.route.params.item.name.title + " " + props.route.params.item.name.first + " " + props.route.params.item.name.last
  const emailId = props.route.params.item.email
  const Gender = props.route.params.item.gender
  const mobileNumber = props.route.params.item.phone
  const DateOfBirth = new Date(props.route.params.item.dob.date).toLocaleDateString()
  const Age = props.route.params.item.dob.age
  const Address = props.route.params.item.location.street.number + " " + props.route.params.item.location.street.name
  const City = props.route.params.item.location.city
  const State = props.route.params.item.location.state
  const Country = props.route.params.item.location.country
  const UUID = props.route.params.item.login.uuid

  return (
    <SafeAreaView style={CommonStyleSheet.viewAlignment}>
      <ScrollView>
        <View style={{ height: 10 }}></View>
        <View style={CommonStyleSheet.viewAlignment}>
          <Image
            style={CommonStyleSheet.imageAlignment}
            source={{ uri: props.route.params.item.picture.large }} />
        </View>
        <Card style={CommonStyleSheet.DetailScreencardStyling}>
          <Card.Content>
            <View>
              <DetailScreenItem iconName={IDCARD} label="ID"
                labelValue={UUID} />
              <DetailScreenItem iconName={NAME} label="Name"
                labelValue={nameOfUser} />
              <DetailScreenItem iconName={MAIL} label="Email ID"
                labelValue={emailId} />
              <DetailScreenItem iconName={GENDER} label="Gender"
                labelValue={Gender} />
              <DetailScreenItem iconName={MOBILE} label="Mobile No"
                labelValue={mobileNumber} />
              <DetailScreenItem iconName={DOB} label="DOB"
                labelValue={DateOfBirth} />
              <DetailScreenItem iconName={AGE} label="Age"
                labelValue={Age} />
              <DetailScreenItem iconName={ADDRESS} label="Address"
                labelValue={Address} />
              <DetailScreenItem iconName={ADDRESS} label="City"
                labelValue={City} />
              <DetailScreenItem iconName={ADDRESS} label="State"
                labelValue={State} />
              <DetailScreenItem iconName={ADDRESS} label="Country"
                labelValue={Country} />
              <View style={{ height: 10 }}></View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScreenB
