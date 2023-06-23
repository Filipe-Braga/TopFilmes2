import { Button, Image, Text, View } from "react-native";
import {Link} from "@react-navigation/native";
import styles from './styles';
import { TouchableOpacity } from "react-native";

const imgURL = 'https://api.otaviolube.com';

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{ uri: imgURL + props.filme.poster.data.attributes.url }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.titulo}>Título: {props.filme.titulo}</Text>
                <Text style={styles.sinopse}>Sinopse: {props.filme.sinopse}</Text>
                <Link to={{ screen: 'MovieDetailsPage'}}> Saiba mais...</Link>
                
                <Button style={styles.btt} title="Comprar"/>
            </View>
        </View>
    );
}