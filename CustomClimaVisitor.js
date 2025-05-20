import ClimaVisitor from "./generated/ClimaVisitor.js";

export class CustomClimaVisitor extends ClimaVisitor {
  constructor() {
    super();
    this.jsCode = "";
    this.objetoNombre = "";
  }

  visitClima_script(ctx) {
    this.objetoNombre = ctx.IDENTIFICADOR().getText();
    this.jsCode += `const ${this.objetoNombre} = {\n` +
      `  imprimir: function(texto, minutos) {\n` +
      `    setInterval(function() {\n` +
      `      console.log(texto);\n` +
      `    }, minutos * 60000);\n` +
      `  },\n` +
      `  monitorear: function(sensor, minutos) {\n` +
      `    setInterval(function() {\n` +
      `      console.log("Monitoreando " + sensor);\n` +
      `    }, minutos * 60000);\n` +
      `  },\n` +
      `  respuesta: function(sensor, valor, aspecto) {\n` +
      `    console.log("Si " + sensor + " sube de " + valor + ", activar " + aspecto);\n` +
      `  }\n` +
      `};\n\n`;

    ctx.accion().forEach(a => this.visit(a));
    return this.jsCode;
  }

  visitImprimir(ctx) {
    const texto = ctx.TEXTO().getText();
    const minutos = ctx.NUMERO().getText();
    this.jsCode += `${this.objetoNombre}.imprimir(${texto}, ${minutos});\n`;
  }

  visitMonitoreo(ctx) {
    const sensor = ctx.sensor_clima().getText();
    const minutos = ctx.NUMERO().getText();
    this.jsCode += `${this.objetoNombre}.monitorear("${sensor}", ${minutos});\n`;
  }

  visitRespuesta(ctx) {
    const sensor = ctx.sensor_clima().getText();
    const valor = ctx.NUMERO().getText();
    const aspecto = ctx.aspecto().getText();
    this.jsCode += `${this.objetoNombre}.respuesta("${sensor}", ${valor}, "${aspecto}");\n`;
  }
}