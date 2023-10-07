document.addEventListener('DOMContentLoaded', function () {
    const sentenceInput = document.getElementById('sentenceInput');
    const tagSentenceBtn = document.getElementById('tagSentenceBtn');
    const posResult = document.getElementById('posResult');
    const posTableCard = document.getElementById('posTableCard'); // Updated to target the card

    // tagSentenceBtn.addEventListener('click', function () {
    //     const sentence = sentenceInput.value;
    //     const dummyData = {
    //         taggedSentence: "This is a POS-tagged sentence.",
    //         wordPosPairs: [
    //             { word: "This", posTag: "DT" },
    //             { word: "is", posTag: "VBZ" },
    //             { word: "a", posTag: "DT" },
    //             { word: "POS-tagged", posTag: "JJ" },
    //             { word: "sentence.", posTag: "NN" }
    //         ]
    //     };

    //     posResult.innerHTML = `<h3>Entered Sentence:</h3><p>${sentence}</p>`;

    //     posResult.innerHTML += `<h3>POS Tagged Sentence:</h3><p>${dummyData.taggedSentence}</p>`;

    //     posTableBody.innerHTML = '';

    //     dummyData.wordPosPairs.forEach(pair => {
    //         const row = document.createElement('tr');
    //         const wordCell = document.createElement('td');
    //         const posTagCell = document.createElement('td');

    //         wordCell.textContent = pair.word;
    //         posTagCell.textContent = pair.posTag;

    //         row.appendChild(wordCell);
    //         row.appendChild(posTagCell);
    //         posTableBody.appendChild(row);
    //     });

    //     posTableCard.style.display = 'block';

    // });

    tagSentenceBtn.addEventListener('click', function () {
        const sentence = sentenceInput.value;

        // ADD BACKEND API URL HERE:
        const apiEndpoint = '';

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sentence }),
        })
            .then(response => response.json())
            .then(data => {
                posResult.innerHTML = `<h3>Entered Sentence:</h3><p>${sentence}</p>`;
                posResult.innerHTML += `<h3>POS Tagged Sentence:</h3><p>${data.taggedSentence}</p>`;
                posTableBody.innerHTML = '';

                data.wordPosPairs.forEach(pair => {
                    const row = document.createElement('tr');
                    const wordCell = document.createElement('td');
                    const posTagCell = document.createElement('td');

                    wordCell.textContent = pair.word;
                    posTagCell.textContent = pair.posTag;

                    row.appendChild(wordCell);
                    row.appendChild(posTagCell);
                    posTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
