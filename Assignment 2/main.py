from part_of_speech_tagging_using_hidden_markov_model_assignment_2 import getPartOfSpeechTagging


from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.get("/")
def returnHomePage():
    return render_template("index.html")


@app.get("/getPOSTag/<sentence>")
def returnPartOfSpeechTag(sentence):
    print(sentence)
    posTags = getPartOfSpeechTagging(sentence)
    returnArray = []
    for word , pos in zip(sentence.strip().split() , posTags[1:-1]):
        intermediateDict = {}
        intermediateDict['word'] = word
        intermediateDict['posTag'] = pos
        returnArray.append(intermediateDict)

    return jsonify({
        'wordPosPairs' : returnArray,
        'taggedSentence' : posTags
    })

