
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Modal

} from 'react-native';


import { getFirestore, getDocs, collection, addDoc} from 'firebase/firestore';
import firebaseApp from './src/Firebse/FirebaseConfig';
import Movimentos from './src/Movimentos';


const App = () => {

  const [valor, setValor] = useState('');
  const [label, setLabel] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);

  const [teste, setTeste] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "teste");


  //salvando no banco
  async function guardar() {

        const banco = await addDoc(userCollectionRef, {
            valor,
            label,
            data,
            type,
        })
        getUsers();
       
    }
  //pegando do banco de dados
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    const value = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setTeste(value);

  };

  useEffect(() => {
    getUsers();
    guardar();


  }, []);


  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TextInput
        style={styles.input}
        placeholder='Descricao'
        onChangeText={(text) => setLabel(text)}

      />
      <TextInput
        style={styles.input}
        placeholder='Valor'
        onChangeText={(text) => setValor(text)}
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        placeholder='Data'
        onChangeText={(text) => setData(text)}
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        placeholder='Observacao'
        onChangeText={(text) => setType(text)}
      />

      <TouchableOpacity
        style={styles.guardar}
        onPress={guardar}
      >

        <Text style={styles.txt} >Carregar</Text>
      </TouchableOpacity>

      <FlatList
        data={teste}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Movimentos data={item} />
        )}
      />

    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 150,

    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    //borderWidth: 1,
    //borderColor: '#000',
    margin: 5,
    padding: 10,
    width: '90%',
    height: 40,
    //borderRadius: 10,
    borderBottomWidth: 1,

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#000'
  },

  caixa: {
    //flex:1,
    width: 350,
    marginTop: 16,
    marginBottom: 24,
    borderBottomWidth: 0.5,
  },
  data: {
    color: '#dadada',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 16,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 20,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  retiradas: {
    fontSize: 20,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  guardar: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  txt: {
    fontSize: 20,
    color: '#fff'
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,


  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button1: {
    marginLeft: 300,
    borderRadius: 40,
    padding: 10,
    elevation: 2
  },
  button: {

    borderRadius: 40,
    padding: 10,
    elevation: 2
  },
  //icon  +
  buttonOpen: {
    backgroundColor: "#fafafa",
    elevation: 0,
    marginTop: -10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    //color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
    fontSize: 20,

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  },
  shadowOffset: {
    width: 0,
    height: 2,

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

})
/*

 <Balance saldo={5555} gastos={4444} />

*/