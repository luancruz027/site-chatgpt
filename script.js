// Seleciona o formulário e a tabela
const form = document.getElementById('contactForm');
const contactTable = document.getElementById('contactTable');

// Função que adiciona contato à tabela
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém valores dos inputs
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const row = document.createElement('tr');
    
    // Cria as colunas (células) da linha
    const nameCell = document.createElement('td');
    nameCell.textContent = nome;
    const phoneCell = document.createElement('td');
    phoneCell.textContent = telefone;

    // Adiciona as células à linha
    row.appendChild(nameCell);
    row.appendChild(phoneCell);

    // Adiciona a nova linha à tabela
    contactTable.appendChild(row);

    // Limpa os campos do formulário
    form.reset();
});
