import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../Header';
import Corpo from '../Componentes/Corpo';

console.disableYellowBox = true;

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Meu gastos' />
      <Corpo />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 14,
    marginTop: 4,
  },
  list: {
    marginStart: 14,
    marginStart: 14,
  }
})
