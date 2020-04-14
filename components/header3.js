import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

export default function Header3() {
    const OnSignOut = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.header}>
            <Button title="SignOut" color="green" onPress={OnSignOut} />
            <Text style={styles.title1}>Profile</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',

        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title1: {

        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        right: 20
    }
})