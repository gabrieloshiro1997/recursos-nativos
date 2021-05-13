import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Cores from '../constantes/Cores';
const LugarItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
      <Image style={styles.imagem} source={{ uri: props.imagem }}></Image>
      <View style={styles.infoContainer}>
        <Text style={styles.nomeLugar}>{props.nomeLugar}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LugarItem;

const styles = StyleSheet.create({
  endereco: {
    color: '#777',
    fontSize: 16,
  },
  nomeLugar: {
    color: 'black',
    fontSize: 18,
    marginBottom: 4,
  },
  lugarItem: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#CCC',
    borderColor: Cores.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 24,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
