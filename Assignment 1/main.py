import natural_language_processing_assignment_1

from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.get("/")
def returnHomePage():
    return render_template("index.html")


@app.get("/neuralnet/<city>")
def returnNNpred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getNeuralNetPrediction(city)
    })

@app.get("/decisiontree/<city>")
def returnDTpred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getDecisionTreePrediction(city)
    })

@app.get("/randomforest/<city>")
def returnRTpred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getRandomForestPrediction(city)
    })

@app.get("/naivebayes/<city>")
def returnNBpred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getNaiveBayesPrediction(city)
    })

@app.get("/svm/<city>")
def returnSVMpred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getSVMPrediction(city)
    })

@app.get("/ensemble/<city>")
def returnEnsemblepred(city):
    return jsonify({
        'prediction' : natural_language_processing_assignment_1.getEnsemblePrediction(city)
    })



# def main():
#     while(True):
#         city = input("Enter City Name : (enter exit to exit) ")
#         if city.lower() == "exit":
#             exit(0)
#         natural_language_processing_assignment_1.predictDenonym(city)


# if __name__ == "__main__":
#     main()