//console.log(zoo)

function printZoo(pListaAnimales) {

    let contenido = '<section class="zoo">'

    for (let animal of pListaAnimales) {

        contenido += `<article class="${dimeColor(animal.peligrosidad)}">
                        <h3>${animal.nombre}</h3>
                        <ul>
                            <li>Peso: ${animal.peso}</li>
                            <li>Peligrosidad: ${animal.peligrosidad}</li>
                            <li>Categoria: ${animal.categoria}</li>
                        </ul>
                      </article>`
    }

    contenido += '</section>'
    document.write(contenido);

}

function dimeColor(pPeligrosidad) {
    let color = ""

    switch (pPeligrosidad) {
        case 5:
            color = 'peligroso'
            break;
        case 4:
            color = 'cuidadin'
            break;
        case 3:
            color = 'ojito'
            break;
        case 2:
            color = 'tranquilito'
            break;
        case 1:
            color = 'docil'
            break;

    }
    return color;

}

//printZoo(zoo)

//obtener los animales de categoria concreta.

function filterByCategory(pCategory, pListaAnimales) {

    let listaFiltrada = new Array();

    for (let animal of pListaAnimales) {
        if (animal.categoria === pCategory) {
            listaFiltrada[listaFiltrada.length] = animal
        }
    }

    return listaFiltrada;

}

//callback
//printZoo(filterByCategory('Carnivoro', zoo))

//sin callback
//let herbivoros = filterByCategory('Herbivoro', zoo);
//printZoo(herbivoros);


//filtrar por rango de peso, quiero animales que pesen entre 100 y 200 kilos.


function filterByWeight(pPesoMin, pPesoMax, pListaAnimales) {
    let listaFiltrada = new Array();

    for (let animal of pListaAnimales) {
        if (animal.peso >= pPesoMin && animal.peso <= pPesoMax) {
            listaFiltrada[listaFiltrada.length] = animal;
            //listaFiltrada.push(animal)
        }

    }

    return listaFiltrada;
}

//callback
//printZoo(filterByWeight(100, 500, zoo))

//sin callback
let listaEntre100500 = filterByWeight(100, 500, zoo)
printZoo(listaEntre100500)



