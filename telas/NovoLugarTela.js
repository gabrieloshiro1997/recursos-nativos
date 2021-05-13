import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as lugaresActions from '../store/lugares-action';
import Cores from '../constantes/Cores';
import TiraFoto from '../componentes/TiraFoto';
import CapturaLocalizacao from '../componentes/CapturaLocalizacao';

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();

  const [novoLugar, setNovoLugar] = useState('');
  const [imagemUri, setImagemUri] = useState('');

  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  };

  const adicionarLugar = () => {
    dispatch(lugaresActions.addLugar(novoLugar, imagemUri));
    props.navigation.goBack();
  };

  const fotoTirada = (imagem) => {
    setImagemUri(imagem);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo Lugar</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <TiraFoto onFotoTirada={fotoTirada} />
        <CapturaLocalizacao />
        <Button
          title='Salvar'
          color={Cores.primary}
          onPress={() => adicionarLugar()}
        />
      </View>
    </ScrollView>
  );
};

export default NovoLugarTela;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 16,
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 8,
    paddingVertical: 4,
  },
});
