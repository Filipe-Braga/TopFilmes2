import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsPages from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";

const Stack =  createNativeStackNavigator();

export default function AppRotes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MoviesPage" component={MoviesPage} options={{headerShown: false}}/>
            <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPages} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}