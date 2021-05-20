import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ENV from '../env';

const PreviewDoMapa = (props) => {
  let mapaUrl;

  if (props.localizacao) {
    mapaURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.localizacao.lat},${props.localizacao.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props.localizacao.lat},${props.localizacao.lng}&key=${ENV.apiKey}`;
  }

  return (
    <View style={{ ...styles.previewDoMapa, ...props.style }}>
      {props.localizacao ? (
        <Image style={styles.mapaImagem} source={{ uri: mapaUrl }} />
      ) : (
        props.children
      )}
      <Text></Text>
    </View>
  );
};

export default PreviewDoMapa;

const styles = StyleSheet.create({
  previewDoMapa: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapaImagem: {
    width: '100%',
    height: '100%',
  },
});
