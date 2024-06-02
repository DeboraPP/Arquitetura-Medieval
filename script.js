// Adicionar conteúdo dinâmico ao clicar no botão
document.addEventListener('DOMContentLoaded', () => {
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            box.textContent = `A arquitetura gótica, surgida na Idade Média na Europa, revolucionou a construção com suas inovações estéticas e estruturais. Destacaram-se os arcos ogivais, que permitiram que fossem maiores, e as abóbadas de cruzaria, que distribuíssem o peso para diversos pontos, possibilitando edificações mais altas. O peso restante era suportado por contrafortes externos, conectados por arcobotantes. Esse estilo influenciou também a pintura e a escultura da época.`;
        });

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = '#ccc';
        });

        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = '';
        });
    });

    const newButton = document.createElement('button');
    newButton.textContent = 'Mais informações!';
    document.body.appendChild(newButton);

    newButton.addEventListener('click', () => {
        const newBox = document.createElement('div');
        newBox.classList.add('text-box');
        newBox.textContent = 'Estilos da Arquitetura Medieval';
        document.querySelector('.text-section').appendChild(newBox);


        newBox.addEventListener('click', () => {
            newBox.textContent = 'Estilo Romântico';
        });

        newBox.addEventListener('mouseenter', () => {
            newBox.style.backgroundColor = '#ccc';
        });

        newBox.addEventListener('mouseleave', () => {
            newBox.style.backgroundColor = '';
        });
    });
});
