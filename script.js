/**
 *  Script creado por Nicolas Alberto Ramburger
 *  Fecha de creacion: 15-10-2022
 * 
 */


/**
 *  
 *  Configurar intereses
 * 
 */

const intereses = [10, 25, 30]


preciop = Number(prompt("Ingrese el valor de su producto"))
console.log('\n')
let resultadof


do {
    console.log("Usted ingreso un producto con un valor de: " + preciop)
    console.log("Puede elegir entre las siguientes cuotas")
    console.log("1 - De 1 a 3 cuotas")
    console.log("2 - De 4 a 6 cuotas")
    console.log("3 - De 7 a 12 cuotas")
    console.log("0 - Para cancelar operacion")
    console.log('\n')

    i = Number(prompt("Ingrese una opcion"))

    switch (i) {

        case 1:
            resultadof = calcularinteres(intereses[0], preciop)
            console.log("El interes total pagando entre 1 y 3 cuotas es de: " + resultadof)
            console.log('\n')
            break;
        case 2:
            resultadof = calcularinteres(intereses[1], preciop)
            console.log("El interes total pagando entre 4 y 6 cuotas es de: " + resultadof)
            console.log('\n')
            break;
        case 3:
            resultadof = calcularinteres(intereses[2], preciop)
            console.log("El interes total pagando entre 7 y 12 cuotas es de: " + resultadof)
            console.log('\n')
            break;
    }


} while (i > 0 && i <= 3)




function calcularinteres(interes, precioproducto) {

    resultado = precioproducto + precioproducto * interes / 1000
    return (resultado)

}