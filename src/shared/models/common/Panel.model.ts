export class PanelModel {
  enRevision?;
  highlights?;
  highlightsAtendidas?;
  expired?;
  revisados?;
  lastUpdateSync?;
}

interface EnRevisionModel {
  enRevisionPendientesPickup;
  enRevisionAtendidasPickup;

  enRevisionPendientesTienda;
  enRevisionAtendidasTienda;
}

interface ExpiredModel {
  enRevisionVencidas;
  revisadasVencidas;
}

interface HighlightsModel {
  callCenter;
  ecommerce;
  total_ordenes;
}

interface RevisadosModel {
  revisadosPendientesPickup;
  revisadosAtendidasPickup;

  revisadosPendientesTienda;
  revisadosAtendidasTienda;
}
