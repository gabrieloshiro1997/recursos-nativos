import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';

import Cores from '../constantes/Cores';
import PreviewDoMapa from './PreviewDoMapa';

const CapturaLocalizacao = (props) => {
  const [estaCapturando, setEstaCapturando] = useState(false);
  const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();
  const verificarPermissoes = async () => {
    const resultado = await Location.requestBackgroundPermissionsAsync();

    if (resultado.status !== 'granted') {
      Alert.alert(
        'Sem permissão para uso do mecanismo de localização',
        'É preciso liberar acesso ao mecanismo de localização',
        [{ text: 'OK' }]
      );

      return false;
    }
    return true;
  };

  const capturarLocalizacao = async () => {
    const temPermissao = await verificarPermissoes();
    if (temPermissao) {
      try {
        setEstaCapturando(true);
        let localizacao = await Location.getCurrentPositionAsync({
          accuracy: 6,
        });

        setLocalizacaoSelecionada({
          lat: localizacao.coords.latitude,
          lng: localizacao.coords.longitude,
        });
      } catch (erro) {
        console.log(erro);
        Alert.alert(
          'Impossível obter localização',
          'Tente novamente mais tarde ou escolha uma no mapa',
          [{ text: 'OK' }]
        );
      }

      setEstaCapturando(false);
    }
  };

  return (
    <View style={styles.capturaLocalizacao}>
      <PreviewDoMapa
        style={styles.previewDoMapa}
        localizacao={localizacaoSelecionada}
      >
        {estaCapturando ? (
          <ActivityIndicator size='large' color={Cores.primary} />
        ) : (
          <Text>Nenhuma localização disponível</Text>
        )}
      </PreviewDoMapa>
      <Button
        title='Obter localização'
        color={Cores.primary}
        onPress={() => capturarLocalizacao()}
      />
    </View>
  );
};

export default CapturaLocalizacao;

const styles = StyleSheet.create({
  capturaLocalizacao: {
    marginBottom: 16,
  },
  previewDoMapa: {
    marginBottom: 12,
    width: '100%',
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
});
