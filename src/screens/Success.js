import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Styles from '../constants/Styles';
import PoppinsText from '../components/PoppinsText';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Success({ navigation }) {

    React.useEffect(() => {
        async function fetchData() {
            if (await AsyncStorage.getItem('token') == null) {

            } else {

            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/bg4.png')} style={styles.avatar} />

            <PoppinsText bold={true} style={styles.title}>
                Success!
            </PoppinsText>

            <PoppinsText bold={true} style={[styles.title, { color: Styles.colors.black }]}>
                File Uploaded Successfully.
            </PoppinsText>
            <Image source={require('../assets/check.png')} style={{
                width: 60,
                height: 60,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: "center",
                margin: 20,
                marginBottom: 50
            }} />

            <View style={{ margin: 20, marginEnd: 30 }}>
                <Button bgColor={Styles.colors.skyblue} text='RETURN TO LLM' onPress={() => {
                    navigation.navigate('Opps')
                }} />
                <Button bgColor={Styles.colors.skyblue} text='BEGIN CHAT' onPress={() => {
                    navigation.navigate('FileUploadPage')
                }} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        width: '100%',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    avatar: {
        width: '100%',
        position: 'absolute'
    },
    title: {
        color: Styles.colors.white,
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        marginBottom: Styles.spacing.padding,
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 10
    },
    text: {
        color: Styles.colors.white,
        fontSize: 14,
        // lineHeight: 23.46,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold",
        marginBottom: 50
    },
    inputContainer: {
        marginBottom: Styles.spacing.padding * 2
    },
    inputLabel: {
        color: Styles.colors.green600
    },
    input: {
        color: Styles.colors.white,
        fontSize: 18,
        paddingVertical: Styles.spacing.padding * 0.25,
        borderBottomWidth: 1,
        borderColor: Styles.colors.white,
        borderStyle: 'solid'
    },
});