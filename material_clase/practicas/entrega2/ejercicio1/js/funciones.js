

/* const printAllPatients = (pPatientsList) => {
    for (let patient of pPatientsList) {
        printOnePatient(patient);
    }
} */

const printAllPatients = (pPatientList) => {
    pPatientList.forEach(patient => printOnePatient(patient))
}
//printAllPatients(pacientes);


function printOnePatient(pPatient) {
    const contenidoHtml = ` <article>
        <h2>${pPatient.nombre} ${pPatient.apellido}</h2>
        <ul>
            <li>Edad: ${pPatient.edad} años</li>
            <li>Diagnostico: ${pPatient.diagnostico}  </li>
            <li>Numero Seguridad Social: ${pPatient.numeroSS}</li>
        </ul>
        <hr>
    </article>`
    document.write(contenidoHtml);
}

function filterByAge(pPatientList, pMinAge, pMaxAge) {
    const filterList = new Array()
    for (let patient of pPatientList) {
        if (patient.edad >= pMinAge && patient.edad <= pMaxAge) {
            filterList.push(patient);
        }
    }

    return filterList;
}

/* const listaPacientes18a35 = filterByAge(pacientes, 18, 35);
const listaPacientes5a18 = filterByAge(pacientes, 5, 18);

printAllPatients(listaPacientes18a35); */


/*opcion1 
const filterByDiagnosis = (pPatientList, pDiagnosis) => {
    const filterList = pPatientList.filter(patient => {
        return patient.diagnostico.toLowerCase() === pDiagnosis.toLowerCase()
    })

    return filterList
}*/

/* opcion 2*/
const filterByDiagnosis = (pPatientList, pDiagnosis) => pPatientList.filter(patient => patient.diagnostico.toLowerCase() === pDiagnosis.toLowerCase());



/* const listaPacientesCoronavirus = filterByDiagnosis(pacientes, 'coronavirus')

printAllPatients(listaPacientesCoronavirus) */

/* Bola extra */

function filterByLastCharacter(pPatients, pCharacter) {

    const filterList = pPatients.filter(patient => patient.numeroSS.endsWith(pCharacter));

    return filterList
}

printAllPatients(filterByLastCharacter(pacientes, '0'))