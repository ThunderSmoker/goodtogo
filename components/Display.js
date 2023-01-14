import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const Display = ({ navigation, route }) => {
  const name = route.params.data.data;
  console.log(name);
  return ( <ScrollView style={{width:"100%"}} alwaysBounceHorizontal>
  {name.map((nam, i) => {
    return (
     
      <View key={i}>
        <Card>
          <Card.Title>{nam.train_base.train_name}</Card.Title>
          <Card.Divider />
          <Card.Image source={{uri:'https://media.istockphoto.com/id/1003204840/vector/train.jpg?s=612x612&w=0&k=20&c=IExoOX1EPuE-war9608NrUAmk6eIXWQk0DuteVGAcLI='}} style={{marginRight:200,height:70,width:100}}/>
          <Text style={{ marginBottom: 10,position:"absolute",marginTop:34,marginLeft:5 ,fontWeight:'700'}}>
            Trn.No:{nam.train_base.train_no}
            
          </Text>
          <Text style={{ marginBottom: 10,position:"absolute",marginTop:45,marginLeft:140 ,fontWeight:'700' }}>
          {nam.train_base.source_stn_code} ➡ {nam.train_base.dstn_stn_code}
            
          </Text>
          <Text style={{ marginBottom: 10,position:"absolute",marginTop:65,marginLeft:140 ,fontWeight:'700'}}>
              {nam.train_base.from_time}           {nam.train_base.to_time}
            
          </Text>
          <Text style={{ marginBottom: 10,position:"absolute",marginTop:85,marginLeft:140 ,fontWeight:'700'}}>
              Duration:   {nam.train_base.travel_time}
            
          </Text>
          <Button
             color="black"
            title="🗺View Route"
          />
        </Card>
      </View>
    );
  })}
  </ScrollView>)
};
export default Display;
