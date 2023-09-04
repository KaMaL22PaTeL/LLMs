import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './old/screens/Home';
import Profile from './old/screens/Profile';
import MyLLMlist from './screens/MyLLMlist';
import Login from './old/screens/Login';
import Signup from './old/screens/Signup';
import TermsOfService from './old/screens/TermsOfService';
import PrivacyPolicy from './old/screens/PrivacyPolicy';
import CCode from './old/screens/CCode';
import AccountSetup from './old/screens/AccountSetup';
import CreateRelay from './old/screens/CreateRelay';
import RelaysInfo from './old/screens/RelaysInfo';
import ForgotPassword from './old/screens/ForgotPassword';
import RelaysList from './old/screens/RelaysList';
import NameLLM from './screens/NameLLM';
import FileUploadPage from './screens/FileUploadPage';
import FileUploadPromptPage from './screens/FileUploadPromptPage';
import FreightLogbook from './screens/FreightLogbook';
import Success from './screens/Success';
import Opps from './screens/Opps';
import FileNotCompatible from './screens/FileNotCompatible';

const Stack = createStackNavigator();

// function OldMyStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome", headerShown: false }} />
//             <Stack.Screen name="Login" component={Login} options={{ title: "Login", headerShown: false }} />
//             <Stack.Screen name="Signup" component={Signup} options={{ title: "Signup", headerShown: true }} />
//             <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Forgot Password", headerShown: true }} />
//             <Stack.Screen name="TermsOfService" component={TermsOfService} options={{ title: "Terms of Service", headerShown: true }} />
//             <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: "Privacy Policy", headerShown: true }} />
//             <Stack.Screen name="CCode" component={CCode} options={{ title: "", headerShown: false }} />
//             <Stack.Screen name="AccountSetup" component={AccountSetup} options={{ title: "", headerShown: false }} />
//             <Stack.Screen name="CreateRelay" component={CreateRelay} options={{ title: "Create a Relay", headerShown: true }} />
//             <Stack.Screen name="RelaysList" component={RelaysList} options={{ title: "Your Relays", headerShown: false }} />
//             <Stack.Screen name="RelaysInfo" component={RelaysInfo} options={{ title: "", headerShown: true }} />
//         </Stack.Navigator>
//     );
// }

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyLLMlist" component={MyLLMlist} options={{ title: "MyLLMlist", headerShown: false }} />
            <Stack.Screen name="NameLLM" component={NameLLM} options={{ title: "NameLLM", headerShown: false }} />
            <Stack.Screen name="FileUploadPromptPage" component={FileUploadPromptPage} options={{ title: "FileUploadPromptPage", headerShown: false }} />
            <Stack.Screen name="FileUploadPage" component={FileUploadPage} options={{ title: "FileUploadPage", headerShown: false }} />
            <Stack.Screen name="FreightLogbook" component={FreightLogbook} options={{ title: "FreightLogbook", headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ title: "Success", headerShown: false }} />
            <Stack.Screen name="Opps" component={Opps} options={{ title: "Opps", headerShown: false }} />
            <Stack.Screen name="FileNotCompatible" component={FileNotCompatible} options={{ title: "FileNotCompatible", headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function Root() {
    return (
        <NavigationContainer>
            {/* <OldMyStack /> */}
            <MyStack />
        </NavigationContainer>
    );
}
