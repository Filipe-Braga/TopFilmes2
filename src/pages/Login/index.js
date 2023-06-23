import {Text, View } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";

import styles from "../RegisterPage/styles";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function LoginPage(){
   
    const {signIn} = useContext(AuthContext); 

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/Logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email" style={styles.input}></TextInput>
            <TextInput placeholder="password" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={() => signIn()}>
                <Text style={styles.text} >Login</Text>
            </TouchableOpacity>

            <Link to={{screen: 'RegisterPage'}} style={styles.links}>Registre-se</Link>
            <Link to={{screen: 'ForgotPassword'}} style={styles.links}>Esqueci minha senha</Link>

        </View>
    );
}