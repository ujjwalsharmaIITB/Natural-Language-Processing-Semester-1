from inference import *


from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

model_linear = load_model("saved/SVM.Linear")
model_rbf = load_model("saved/SVM.Rbf")



@app.get("/")
def returnHomePage():
    return render_template("index.html")


@app.get("/getNERLinear/<sentence>")
def getNERV1(sentence):
    print(sentence)
    tagged_sentence = predict_ner(model_linear, scaler, sentence)
    return jsonify({
        'Actual' : sentence,
        'taggedSentence' : tagged_sentence
    })

@app.get("/getNERRbf/<sentence>")
def getNERV2(sentence):
    print(sentence)
    tagged_sentence = predict_ner(model_rbf, scaler, sentence)
    return jsonify({
        'Actual' : sentence,
        'taggedSentence' : tagged_sentence
    })


if __name__ == "__main__":
    app.run()