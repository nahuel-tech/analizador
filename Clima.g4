grammar Clima;

clima_script
    : AUTOMATE CLIMA IDENTIFICADOR LLAVE_ABRE accion* LLAVE_CIERRA
    ;

accion
    : monitoreo
    | respuesta
    | imprimir
    ;

monitoreo
    : MONITOREAR sensor_clima CADA NUMERO MIN PUNTOYCOMA
    ;

respuesta
    : CUANDO sensor_clima SUBE DE NUMERO HACER ACTIVAR aspecto PUNTOYCOMA
    ;

imprimir
    : IMPRIMIR TEXTO CADA NUMERO MIN PUNTOYCOMA
    ;

sensor_clima
    : TEMPERATURA
    | HUMEDAD
    ;

aspecto
    : VENTILACION
    | RIEGO
    ;

AUTOMATE     : 'automate' ;
CLIMA        : 'clima' ;
IMPRIMIR     : 'imprimir' ;
CADA         : 'cada' ;
MIN          : 'min' ;
MONITOREAR   : 'monitorear' ;
CUANDO       : 'cuando' ;
SUBE         : 'sube' ;
DE           : 'de' ;
HACER        : 'hacer' ;
ACTIVAR      : 'activar' ;
TEMPERATURA  : 'temperatura' ;
HUMEDAD      : 'humedad' ;
VENTILACION  : 'ventilacion' ;
RIEGO        : 'riego' ;
LLAVE_ABRE   : '{' ;
LLAVE_CIERRA : '}' ;
PUNTOYCOMA   : ';' ;

IDENTIFICADOR
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;


NUMERO
    : [0-9]+
    ;

TEXTO
    : '"' (~["\\] | '\\' .)* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;


