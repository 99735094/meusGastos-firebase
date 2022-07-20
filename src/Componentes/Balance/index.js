import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }) {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.simbolo}>R$</Text>
          <Text style={gastos > 1 ? styles.gastos : styles.gastos2}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 360,
    marginStart: 16,
    marginEnd: 16,
    marginTop: -50,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 22,
    paddingTop: 22,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 100,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dadada',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  simbolo: {
    color: '#dadada',
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  gastos: {
    fontSize: 32,
    color: '#2ecc71',
    fontWeight:'bold'
  },
  gastos2: {
    fontSize: 32,
    color: '#e74c3c',
    fontWeight:'bold'
  },
  item: {
    justifyContent: 'center',
    alignItems:'center',
    paddingStart: 120,
  }

})
