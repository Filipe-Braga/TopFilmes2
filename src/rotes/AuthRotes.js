import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/Login';
import Register from '../pages/RegisterPage';
import ForgotPass from '../pages/ForgotPassword';

const Stack =  createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name='RegisterPage' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPass} options={{headerShown: false}}/>
        </Stack.Navigator>

    );
}