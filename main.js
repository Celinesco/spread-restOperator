console.log("Ejercicios de Spread/Rest Operator")

const textoRespuesta = (numero) => {
    return(`Respuesta EJERCICIO ${numero}: `)
}

////////////////////////////////////////////////////////////////////////////////
// Ejercicio 1
// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator).
// const delUnoAlTres = [1, 2, 3];

// const delUnoAlCinco = // ACA LA SOLUCION

// console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]

const delUnoAlTres = [1, 2, 3];
const delUnoAlCinco = [...delUnoAlTres, 4, 5]
 console.log(textoRespuesta(1), delUnoAlCinco)


////////////////////////////////////////////////////////////////////////////////
// Ejercicio 2
// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’
// const arrayDado = ['UNO', 'DOS', 'TRES'];

// const nuevoArray = // ACA LA SOLUCION

// console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

const arrayDado = ['UNO', 'DOS', 'TRES'];
const nuevoArray = ['CERO', ...arrayDado, 'CUATRO']
console.log(textoRespuesta(2), nuevoArray)


////////////////////////////////////////////////////////////////////////////////
// Ejercicio 3
// Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.
// const frase0 = ['¡', 'Hola'];
// const frase1 = [',', ' ', 'Mundo'];
// const frase2 = ['!'];

// const fraseCompleta = // ACA LA SOLUCION

// console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

const fraseEnArray = [...frase0, ...frase1, ...frase2]
const fraseCompleta = fraseEnArray.join('')
console.log(textoRespuesta(3), fraseCompleta);


////////////////////////////////////////////////////////////////////////////////
// Ejercicio 4
// Completá el siguiente código para llegar al resultado esperado (respetar orden).
// Quiero obtener un único objeto final con todas las propiedades
// const reviews = {
//  reviewIMDB: 9,
//  reviewFilmAffinity: 8.1
// };

// const peliInfo = {
//  titulo: 'The Dark Knight',
//  anio: 2008
// };

// const pelicula = // ACA LA SOLUCION

// console.log(pelicula);
// // {
// //   titulo: 'The Dark Knight',
// //   anio: 2008,
// //   reviewIMDB: 9,
// //   reviewFilmAffinity: 8.1
// // }

const reviews = {
    reviewIMDB: 9,
    reviewFilmAffinity: 8.1
};

const peliInfo = {
    titulo: 'The Dark Knight',
    anio: 2008
};


const pelicula = {...reviews, ...peliInfo}
console.log(textoRespuesta(4), pelicula)



////////////////////////////////////////////////////////////////////////////////
// Ejercicio 5
// Completá el siguiente código para llegar al resultado esperado (respetar orden).
// Tengo un objeto con propiedades que representa una alumna
// Las propiedades que contiene son: nombre y apellido
// Queremos agregar la propiedad sabeJS con valor true, y la propiedad edad con el valor 27
// La propiedad sabeJS queremos que esté al principio y la propiedad edad al final
// const estudiante = {
//  nombre: 'Ada',
//  apellido: 'Lovelace'
// };

// const estudianteJS = // SOLUCION

// console.log(estudianteJS);
// // { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }


const estudiante = {
 nombre: 'Ada',
 apellido: 'Lovelace'
};

const estudianteJS = { sabeJs: true, ...estudiante, edad: 27}

console.log(textoRespuesta(5), estudianteJS)



////////////////////////////////////////////////////////////////////////////////

// Ejercicio 6
// La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
// ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?
// console.log( Math.max(4, 7) ); // 7

// const tresNums = [9, 4, 7];
// console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
// console.log( Math.max(tresNums) ); // NaN

// const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
// console.log( Math.max(masNums) ); // NaN, y debería ser 132

const tresNums = [9, 4, 7];
const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];


console.log(textoRespuesta(6),"Array tresNums:", (Math.max(...tresNums)), "Array masNums:",(Math.max(...masNums)))


////////////////////////////////////////////////////////////////////////////////
// Ejercicio 7
// Escribir una arrow function llamada agregarNumeroAlArray, que recibe un número como primer parámetro y un array como segundo parámetro
// Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
// Utilizar Spread Operator
// // ejemplo de uso
// console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
// console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]


const agregarNumeroAlArray = (num, array) => {
    return ([...array, num])
}

console.log(textoRespuesta(7), "Primer ejemplo:", agregarNumeroAlArray(1, [6, 19]), "Segundo ejemplo:",(agregarNumeroAlArray(4, [1, 2, 3])))



////////////////////////////////////////////////////////////////////////////////

// Ejercicio 8
// Crear la función contarLosArgumentos, que toma un número variable de parámetros y retorna la cantidad de parámetros que tiene
// Utilizar Rest Operator
// contarLosArgumentos('uno', 'dos'); // 2
// contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
// contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16


const contarLosArgumentos = (...parametros) => {
    return parametros.length
}


console.log(textoRespuesta(8), "Ejemplo 1:", contarLosArgumentos('uno', 'dos'), "Ejemplo 2:", contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'), "Ejemplo 3:", contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17))




////////////////////////////////////////////////////////////////////////////////
// Ejercicio 9
// Escribir la función alCuadradoYSumar, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
// Utilizar Rest Operator
// alCuadradoYSumar(2, 4, 3); // 29
// alCuadradoYSumar(1, 2); // 5


const alCuadradoYSumar = (...parametros) => {
    return (parametros.reduce((acc, current)=> {
        return acc + current*current
    }, 0))
}

console.log(textoRespuesta(9), "Ejemplo 1:", alCuadradoYSumar(2,4,3), "Ejemplo 2:", alCuadradoYSumar(1, 2))


////////////////////////////////////////////////////////////////////////////////
// Ejercicio 10
// Tengo un array con arrays adentro
// Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que desde un array de arrays, me retorne un solo array con todos los elementos juntos?

const fraseEnPartes = [
  ['¡', 'Hola'],
  [',', ' ', 'Mundo'],
  ['!']
];

// const fraseCompleta = // ACA LA SOLUCION

// console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

const convertirLengthArray = (arrayDeArrays) => {
    const paso1 = [...arrayDeArrays]
    const paso2 = paso1.reduce((acc, current)=> {
        return acc + current.join("")
    },"")
    return paso2
}

console.log(textoRespuesta(10), convertirLengthArray(fraseEnPartes))



////////////////////////////////////////////////////////////////////////////////
// Ejercicio 11
// Escribir la función combinarArrays, que toma un número variable de parámetros
// Cada parámetro es un array
// Combinar todos los arrays y retornar uno solo para obtener el resultado esperado
// Utilizar Rest Operator y Spread operator
// combinarArrays([1, 2], [4, 5, 6]); // [1, 2, 4, 5, 6]
// combinarArrays(['a', 'b']); // ['a', 'b']
// combinarArrays([true, false], [1, 2, 3], ['a'], [{}]) // [true, false, 1, 2, 3, 'a', {}]

const combinarArrays = (...arrays) => {
    let arrayAuxiliar = []
    const paso1 = [...arrays]
    paso1.forEach(current=> {
            current.forEach((subcurrent)=> {
                arrayAuxiliar.push(subcurrent)
            }) 
    })
    return arrayAuxiliar
}


console.log(textoRespuesta(11), "Ejemplo 1:", combinarArrays([1],[2]), "Ejemplo 2:", combinarArrays(['a', 'b']), "Ejemplo 3:",  combinarArrays([true, false], [1, 2, 3], ['a'], [{}]))

