from os import name
from flask import Flask, redirect, json, jsonify, request
from flask_mysqldb import MySQL, MySQLdb
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/staffRegistry', methods=["POST"])
def helloWorld():
    print(request.json)
    return jsonify(hello = True)


@app.route('/login', methods=["POST"])
def hello():
    print(request.json)
    return jsonify(hello = True)

if __name__ == '__main__':
    app.run(debug=True, port=5000)