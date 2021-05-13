import * as FileSystem from 'expo-file-system';
import { inserirLugar, buscarLugares } from '../helpers/db';

export const ADD_LUGAR = 'ADD_LUGAR';
export const LISTA_LUGARES = 'LISTA_LUGARES';

export const listarLugares = () => {
  return async (dispatch) => {
    try {
      const resultadoDB = await buscarLugares();
      dispatch({
        type: LISTA_LUGARES,
        lugares: resultadoDB.rows._array,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const addLugar = (nomeLugar, imagemUri) => {
  return async (dispatch) => {
    const nomeArquivo = imagemUri.split('/').pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    console.log('novo path', novoPath);
    try {
      await FileSystem.moveAsync({
        from: imagemUri,
        to: novoPath,
      });

      const resultadoDB = await inserirLugar(
        nomeLugar,
        novoPath,
        'Paris',
        48.254,
        2.314
      );

      dispatch({
        type: ADD_LUGAR,
        dadosLugar: {
          id: resultadoDB.insertId,
          nomeLugar,
          imagemUri: novoPath,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
