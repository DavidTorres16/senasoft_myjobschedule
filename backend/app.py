from flask import Flask, redirect, json, jsonify
from flask_mysqldb import MySQL, MySQLdb
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True, port=5000)