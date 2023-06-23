import AppRotes from "./AppRotes";
import AuthRoutes from "./AuthRotes";
import { useAuth } from "../context/AuthContext";
import { View } from "react-native-web";
import { ActivityIndicator } from "react-native";

export default function Rotes() {

    const {logado, loading} = useAuth();
    
    if(loading){
        return(
            <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator/>
            </View>
        )
    }

    return (
        logado == true ? <AppRotes/> : <AuthRoutes/>
    );
}