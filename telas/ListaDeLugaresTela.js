import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import * as lugaresActions from '../store/lugares-action';
import BotaoCabecalho from '../componentes/BotaoCabecalho';
import LugarItem from '../componentes/LugarItem';

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector((estado) => {
    console.log('useSelector', estado.lugares.lugares);
    return estado.lugares.lugares;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lugaresActions.listarLugares());
  }, [dispatch]);

  return (
    <FlatList
      data={lugares}
      keyExtractor={(lugar) => lugar.id}
      renderItem={(lugar) => (
        <LugarItem
          nomeLugar={lugar.item.titulo}
          imagem={lugar.item.imagemUri}
          endereco={null}
          onSelect={() => {
            props.navigation.navigate('DetalhesDoLugar', {
              tituloLugar: lugar.item.titulo,
              idLugar: lugar.id,
            });
          }}
        />
      )}
    />
  );
};

ListaDeLugaresTela.navigationOptions = (dadosNav) => {
  return {
    headerTitle: 'Todos os lugares',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title='Adicionar'
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => dadosNav.navigation.navigate('NovoLugar')}
        />
      </HeaderButtons>
    ),
  };
};
export default ListaDeLugaresTela;

const styles = StyleSheet.create({});
