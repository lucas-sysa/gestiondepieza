function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents);

    if (p.tipoReporte === "GDP") {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("GDPBD");
      if (p.usuario && p.codigo && p.descripcion) {
        sheet.appendRow([
          new Date(),
          p.usuario,
          p.codigo,
          p.descripcion,
          p.entrada,
          p.salida,
          p.estanteria,
          p.linea,
          p.observaciones
        ]);
      }
    }

    if (p.tipoReporte === "Scrap") {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Scrap");
      if (p.fecha && p.responsable && p.modelo && p.pieza) {
        sheet.appendRow([
          p.fecha,
          p.responsable,
          p.modelo,
          p.pieza,
          p.cantidad,
          p.orden,
          p.sector,
          p.caja
        ]);
      }
    }

    return ContentService.createTextOutput("Datos recibidos");
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message);
  }
}
