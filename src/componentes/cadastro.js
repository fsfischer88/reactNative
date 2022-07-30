import axios from 'axios';
import { useState } from 'react';
import { Text, TextInput, TouchableHighlight, View, StyleSheet } from 'react-native';

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

  
    const save = () =>{
        if(nome==''){
            alert('Informe nome')
            return
        }

        if(email==''){
            alert('Informe email')
            return
        }


        axios.post('http://localhost:3000/contatos',{
            nome: nome,
            email: email
        }).then(data => console.log(data))
    }

     return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Informe nome"
                    onChangeText={x => setNome(x)}
                    defaultValue ={nome}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Informe o seu email"
                    onChangeText={x => setEmail(x)}
                    defaultValue ={email}
                />

                <TouchableHighlight
                    onPress={save}
                    style={styles.button}
                >
                   <Text>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});



export default Cadastro