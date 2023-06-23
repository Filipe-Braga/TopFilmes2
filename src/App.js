import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './components/Filme/styles';
import Rotes from './rotes';
import { AuthProvider } from './context/AuthContext';

const Stack =  createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <Rotes/>
      </AuthProvider>
    </NavigationContainer>
    
  );
}

