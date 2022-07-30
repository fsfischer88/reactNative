import { Button, Text, View } from 'react-native';

const Home = ({navigation}) =>{
    return(
        <View>
            <Button 
                title="Cadastro"
                onPress={() =>
                    navigation.navigate('Cadastro')
                }
                />
          
            <Button
                title="Consulta"
                onPress={() =>
                    navigation.navigate('Consulta')
                }
                />
            
           
        </View>
    )
}
export default Home