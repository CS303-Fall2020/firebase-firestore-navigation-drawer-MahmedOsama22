import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button
} from "react-native";


export default function ReviewDetails({ navigation, route }) {
  const [title, setTitle] = useState(navigation.getParam('item').title);

  const changeHandler = val => {
    setTitle(val);
  };
  const f = navigation.getParam('edit');



  return (
    <View>

      <TextInput
        style={styles.item}
        value={title == '' ? navigation.getParam('item').title : title}
        onChangeText={(title) => changeHandler(title)}
        multiline={true}
      />
      <Button onPress={() => f(navigation.getParam('item').id, title)} title='Done' color='green' />

    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
})