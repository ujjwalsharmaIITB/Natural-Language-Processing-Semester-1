document.addEventListener('DOMContentLoaded', function() {
    const sentenceVal = document.getElementById('Sentence');
    const modelSelect = document.getElementById('modelSelect');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    predictButton.addEventListener('click', function() {
        const sentence = sentenceVal.value;
        const selectedModel = modelSelect.value;
        
        // Creating a request object to send to the backend API
        // Just replace '/api/predict' with the actual API endpoint URL
        var api = ""
        if(selectedModel === "linear") {
            api = "/getNERLinear/"+sentence
        } else {
            api = "/getNERRbf/"+sentence
        }

        console.log(api)

        const request = new Request(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        fetch(request)
            .then(response => response.json())
            .then(data => {
                // handle the reesponse data here
                console.log(data)
                predictionResult.innerHTML = `<h2>Predicted result :</h2><br> <b>${data.taggedSentence}</b>`;
                predictionResult.classList.add('show');
            })
            .catch(error => {
                predictionResult.textContent = 'Error: Unable to fetch prediction.';
                console.error(error);
            });
    });
});
