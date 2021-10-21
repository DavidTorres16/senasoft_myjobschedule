from flask import Flask ,request ,jsonify
from flask_mysqldb import MySQL
from routes.auth import routes_auth
from dotenv import load_dotenv
from flask_cors import CORS
from funtion_jwt import write_token,valida_token
from funtion_mail import sendMail
from os import getenv

app = Flask(__name__)

app.config['MYSQL_HOST'] = getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = getenv('MYSQL_DB')

mysql = MySQL(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.register_blueprint(routes_auth,url_prefix="/api")

@app.route('/staffRegistry',methods=["POST"])
def staffRegistry():
    data=request.json
    id=data["id"]
    name=data["name"]
    lastname=data["lastname"]
    phonenumber=data["phonenumber"]
    specialities=data["specialities"]
    specialities=data["specialities"]
    staffrestricttions=data["staffrestrictions"]
    passwords=data["passwords"]

    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM Staff WHERE id='{id}'")
    alreadyExist= cur.fetchone()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO staff (id,name,lastname,phonenumber,specialities,staffrestrictions) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",
        (id,name,lastname,phonenumber,specialities,staffrestricttions,passwords))
        mysql.connection.commit()
        cur.close() 
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)


@app.route('/login', methods=['POST'])
def login():
    data=request.json
    id=data["id"]
    password=data["password"]
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM Staff WHERE id = '{id}' and password = '{password}'")
    data= cur.fetchone()
    if data != None:
        token=write_token(data)
        token=str(token).split("'")[1]
        return jsonify({"token":token})
        print()
    else:
        return jsonify(exist = False)

@app.route('/verify')
def verify():
    token=request.headers["Authorization"].split(' ')[1]
    return valida_token(token,output=True)

@app.route('/registerWorkshift',methods=["POST"])
def registerWorkshift():
    data=request.json()
    id=data["id"]
    staffid=data["staffid"]
    shiftDay=data["shift_day"]
    starttime=data["starttime"]
    finishtime=data["finishtime"]
    patientsgroup=data["patientsgroup"]
    cur = mysql.connection.cursor()
    alreadyExist= cur.fetchall()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO workshift (`shiftid`, `staffid`, `shfitDay`, `starttime, `finishtime`, `patientsgroup` ) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(id,staffid,staffid,shiftDay,starttime,finishtime,patientsgroup))
        mysql.connection.commit()
        cur.close()
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)
    

if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True)