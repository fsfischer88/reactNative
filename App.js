
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/componentes/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/componentes/cadastro';
import Consulta from './src/componentes/consulta';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Consulta" component={Consulta} />


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
