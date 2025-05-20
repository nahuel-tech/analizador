import ClimaLexer from "./generated/ClimaLexer.js";
import ClimaParser from "./generated/ClimaParser.js";
import { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';
import readline from 'readline';
import { CustomClimaVisitor } from "./CustomClimaVisitor.js";

async function main() {
    let input;

    // Intentar leer la entrada desde archivo
    try {
        input = fs.readFileSync('input.txt', 'utf8').trim();
        if (!input) throw new Error("Archivo vacío");
    } catch {
        // Si falla, pedir entrada por teclado
        input = await leerCadena();
        if (!input) {
            console.error("No se ingresó ninguna cadena.");
            return;
        }
    }

    // Procesar tokens con el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new ClimaLexer(inputStream);

    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    // Mostrar tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = ClimaLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = (token.text || '').replace(/\n/g, '\\n');
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Volver a crear lexer y parser para analizar sintaxis
    inputStream = CharStreams.fromString(input);
    lexer = new ClimaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ClimaParser(tokenStream);
    const tree = parser.clima_script();

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        console.log(`Árbol de derivación: ${tree.toStringTree(parser.ruleNames)}`);

        const visitor= new CustomClimaVisitor();
        const jsCode = visitor.visit(tree);
        console.log("\nCodigo JavaScript generado:");
        console.log("--------------------------------------------------");
        console.log(jsCode);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

main();
