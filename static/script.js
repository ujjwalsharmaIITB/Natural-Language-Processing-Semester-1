
TagsToPOS = {
        ADJ : "adjective",
        ADP : "adposition",
        ADV : "adverb",
        AUX : "auxiliary",
        CCONJ : "coordinating conjunction",
        DET : "determiner",
        INTJ : "interjection",
        NOUN : "noun",
        NUM : "numeral",
        PART : "particle",
        PRON : "pronoun",
        PROPN : "proper noun",
        PUNCT : "punctuation",
        SCONJ : "subordinating conjunction",
        SYM : "symbol",
        VERB : "verb",
        X : "other"
        }

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
        const apiEndpoint = '/getPOSTag/'+sentence;

        fetch(apiEndpoint, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                posResult.innerHTML = `<h3>Entered Sentence:</h3><p>${sentence}</p>`;
                posResult.innerHTML += `<h3>POS Tagged Sentence:</h3><p>${data.taggedSentence}</p>`;
                posTableBody.innerHTML = '';

                console.log(data)

                data.wordPosPairs.forEach(pair => {
                    console.log(pair)
                    const row = document.createElement('tr');
                    const wordCell = document.createElement('td');
                    const posTagCell = document.createElement('td');
                    const posTagFullName = document.createElement('td');
                    console.log(pair.word)
                    console.log(pair.posTag)
                    wordCell.textContent = pair.word;
                    posTagCell.textContent = pair.posTag;
                    posTagFullName.textContent = TagsToPOS[pair.posTag]

                    row.appendChild(wordCell);
                    row.appendChild(posTagCell);
                    row.appendChild(posTagFullName)
                    posTableBody.appendChild(row);
                });
                posTableCard.style.display = 'block';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
