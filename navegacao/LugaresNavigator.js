import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import MapaTela from '../telas/MapaTela';

import Cores from '../constantes/Cores';

const LugaresNavigator = createStackNavigator(
  {
    ListaDeLugares: ListaDeLugaresTela,
    DetalhesDoLugar: DetalhesDoLugarTela,
    NovoLugar: NovoLugarTela,
    Mapa: MapaTela,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary,
    },
  }
);

export default createAppContainer(LugaresNavigator);
