import {Text, View } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";

import styles from "./styles";

export default function Register(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/Logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="Username" style={styles.input}></TextInput>
            <TextInput placeholder="email" style={styles.input}></TextInput>
            <TextInput placeholder="password" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <Link to={{screen: 'LoginPage'}} style={styles.links}>Voltar</Link>
        </View>
    );
}