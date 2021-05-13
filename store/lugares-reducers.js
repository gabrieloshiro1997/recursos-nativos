import * as lugaresActions from './lugares-action';
import Lugar from '../modelo/lugar';
export const estadoInicial = {
  lugares: [],
};

export default (estado = estadoInicial, action) => {
  switch (action.type) {
    case lugaresActions.ADD_LUGAR:
      const lugar = new Lugar(
        action.dadosLugar.id.toString(),
        action.dadosLugar.nomeLugar,
        action.dadosLugar.imagemUri
      );
      return {
        lugares: estado.lugares.concat(lugar),
      };
    case lugaresActions.LISTA_LUGARES:
      console.log(action.lugares);

      console.log(action.lugares);
      return {
        lugares: action.lugares.map(
          (lugar) => new Lugar(lugar.id.toString(), lugar.nome, lugar.imagemUri)
        ),
      };
    default:
      return estado;
  }
};
