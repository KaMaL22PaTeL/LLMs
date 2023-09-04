import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import InputText from '../../components/InputText';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginuser } from '../../utils/Constant';
import APIManager from '../../services/APIManager';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {

    const [email, setEmail] = React.useState(
        // ""
        "sefope8963@tipent.com"
    );
    const [password, setPassword] = React.useState(
        // ""
        "Test@123"
    );

    const [message, setMessage] = React.useState("");

    React.useEffect(async () => {
    }, []);

    function validatedata() {
        if (email === "") {
            setMessage("Email required!!")
            return false
        }
        else if (password === "") {
            setMessage("Password required!!")
            return false
        } else {
            setMessage("")
            return true
        }

    }

    function userLogin() {
        APIManager.postAPI(
            loginuser,
            {
                "email": email,
                "password": password
            },
            null,
            true
        ).then(async (response) => {
            await AsyncStorage.setItem('token', response.access_token);
            navigation.navigate('AccountSetup')
        });

    }


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Log in</Text>
            {/* <Image source={require('../../old/assets/login.png')} style={styles.avatar} /> */}
            <Card>
                <InputText
                    label="Email"
                    value={email}
                    onChageValue={(e) => { setEmail(e) }}
                />
                <InputText
                    label="Password"
                    value={password}
                    isPassword={true}
                    onChageValue={(e) => { setPassword(e) }}
                />
            </Card>
            {!!message ?
                <Text style={{ color: Styles.colors.red500 }}>{message}</Text> : <></>}
            <Button
                style={{ width: '80%' }}
                text="Log in"
                bgColor={Styles.colors.yellow2}
                onPress={() => {
                    if (validatedata()) {
                        userLogin()
                    }
                }}
            />
            <TouchableOpacity onPress={() => {
                navigation.navigate('ForgotPassword')
            }}>
                <Text style={styles.textForgetpassword}>Forgot Password?</Text></TouchableOpacity>
            <View style={styles.bottomview}>
                <Text>Don’t have account? </Text>
                <Text onPress={() => { navigation.navigate('Signup') }} style={styles.textSignup}>Sign Up Now.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontFamily: "Poppins-Bold"
    },
    avatar: {
        width: 220,
        height: 220,
    },
    inputview: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    textForgetpassword: {
        marginTop: 10,
        fontFamily: "Poppins-SemiBold"
    },
    bottomview: {
        flexDirection: "row",
        marginTop: 4,
        alignItems: 'baseline'
    },
    textSignup: {
        color: Styles.colors.blue2,
        fontFamily: "Poppins-SemiBold"
    },
});