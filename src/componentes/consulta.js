import { Button, FlatList, Text, View, SafeAreaView } from 'react-native';
import axios from "axios";
import { useState } from 'react';

const renderItem = ({ item }) => (
   <View>
      <Text>{item.id}</Text>
      <Text>{item.nome}</Text>
      <Text>{item.email}</Text>
   </View>
)

const Consulta = () => {   
   const [dados, setDados] = useState('')  
    
   const pega = () => {
      axios.get('http://localhost:3000/contatos')
         .then(data => setDados(data.data))
   }
   return (
      <View>
         <Button title="consultar" onPress={pega} />
         <SafeAreaView>
            <FlatList
               data={dados}
               renderItem={renderItem}
               keyExtractor={item => item.id}
            />
         </SafeAreaView>

      </View>
   )
}
export default Consulta