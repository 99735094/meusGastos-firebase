import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

// importacao para criar funcao delete
import firebaseApp from '../../Firebse/FirebaseConfig';
import { getFirestore, getDocs, collection, addDoc,deleteDoc, doc  } from 'firebase/firestore';

export default function Movimentos({ data }) {

    const [valores, setValores] = useState(false);
  

    const db = getFirestore(firebaseApp);
   // const userCollectionRef = collection(db, "teste");

    // deletar
    async function deleteUser(id){
        // importar deleteDoc  e doc do firestore
        const userDoc = doc(db, "teste", id);
        await deleteDoc(userDoc); 
    }

    return (
        <View style={styles.container} >
            <Text style={styles.data}>{data.data}</Text>
            <Text style={styles.data2}>{data.type}</Text>
            <TouchableOpacity
                // criar a funcao delete e chamar data.id, que vem da flatList
                onPress={()=> deleteUser(data.id)}
            >
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 290 }}> Deletar </Text>

            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <TouchableOpacity onPress={() => setValores(!valores)}>
                    {valores ? (
                        <Text style={data.valor > 1 ? styles.valor : styles.retiradas}>
                            R$ {data.valor}</Text>
                    ) : (
                        <View style={styles.esconderValor}>

                        </View>
                    )}
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 380,
        marginTop: 16,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        paddingHorizontal:12.
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 16,
        marginBottom: 8,
    },
    data: {
        color: '#c2c2c2',
        fontWeight: 'bold',
        fontSize: 20,
    },
    data2: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
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
    esconderValor: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8,
    }
})