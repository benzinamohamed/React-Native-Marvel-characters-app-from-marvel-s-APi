import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Marvels from './Screens/Marvels';
import Profile from './Screens/profile';
import Comics from './Screens/comics';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
   <Stack.Navigator    screenOptions={{ headerStyle: {
          backgroundColor: "#151c26", 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize : 25,
          },
          headerTitleAlign: 'center'}}>
   <Stack.Screen
          name="Marvel Characters"
          component={Marvels}
        />
        <Stack.Screen name="Character Details" component={Profile} />
        <Stack.Screen name ="Comics" component={Comics} />
</Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
