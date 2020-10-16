import * as moment from 'moment';

export class UserSelectionModel {
  selectedStore?: StoreSelectorModel;
  fecha_inicio?: string;
  fecha_final?: string;
  num_tienda?: string;
  num_orden?: string;
  num_socio?: string;
  estado?: string;
  via_envio?: string;
  picking?: any;

  constructor() {

    const defaultStore = {
      selectedStore: {
        storeId: '35',
        storeName: 'Sucursal 35 Monterrey',
      },
      num_tienda: '35'
    };

    let temp2;

    const temp = (localStorage.getItem('userSelection'));

    if (temp) {
      temp2 = JSON.parse(temp);
    } else {
      temp2 = defaultStore;
    }

    this.selectedStore = {
      storeId: temp2.selectedStore.storeId,
      storeName: temp2.selectedStore.storeName,
    };
    this.num_tienda = temp2.num_tienda;
    this.fecha_inicio = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
    this.fecha_inicio = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    this.picking = new PickingModel();
  }
}

interface StoreSelectorModel {
  storeId: string;
  storeName: string;
}

class PickingModel {
  num_orden?: string;
  num_fila?: string;
  num_empleado?: string;
  nombre_empleado?: string;
  generico?: string;
  descripcion?: string;
  cantidad?: number;
  surtido?: string;
  fecha_surtido?: string;
  hora_surtido?: string;
  num_tienda?: string;
}
