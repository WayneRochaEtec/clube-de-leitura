(() => {
    const db = new Database();

    document.getElementById('botao').addEventListener('click', () => {
        const selectBoxElement = document.getElementById('storedBox');
        const name = document.getElementById('nome').value;
        const collectionNumber = document.getElementById('numero-colecao').value;
        const type = document.getElementById('senioridade').value;
        const box = selectBoxElement.value;
        const boxId = selectBoxElement.options[selectBoxElement.selectedIndex].getAttribute('data-box-id');

        db.register_magazine(name, collectionNumber, type, box, boxId);
    });

    db.getBoxArray().then(data => {
        const select = document.getElementById('storedBox');
        data.forEach(box => {
            const option = `<option data-box-id="${box.id}" value="${box.numero}">Caixa ${box.numero}</option>`;
            select.innerHTML += option;
        });
        document.querySelector('#storedBox > option:nth-child(1)').setAttribute('selected', '');
    });
})();