import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Cores from '../constantes/Cores';

const BotaoCabecalho = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'black' : Cores.primary}
    />
  );
};

export default BotaoCabecalho;

const styles = StyleSheet.create({});
