import { onDBChange } from "./firebase.js";

const citasTBody = document.getElementById("citas-tbody");
console.log(1);

onDBChange(querySnapshot => {
    let tbodyHtml = "";

    querySnapshot.forEach(doc => {
        const data = doc.data();
        
        tbodyHtml += `
            <tr>
                <th scope="row">${doc.id}</th>
                <td>${data.usuario}</td>
                <td>${data.fecha}</td>
                <td>${data.hora}</td>
                <td>${data.motivo}</td>
            </tr>
        `;
    });

    citasTBody.innerHTML = tbodyHtml;
});