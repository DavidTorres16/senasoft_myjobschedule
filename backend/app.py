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

def token():
    data=request.json
    token=write_token(data)
    print(data)
    print(f"token {token}")

    return token

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
        return jsonify({"Token":token})
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
    name=data["name"]
    lastname=data["lastname"]
    phonenumber=data["phonenumber"]
    email=data["email"]
    password=data["password"]
    cur = mysql.connection.cursor()
    alreadyExist= cur.fetchall()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO `sena`.`workshift` (`shiftid`, `staffid`, `position`, `staffname`, `stafflastname`, `shiftDay`, `starttime`, `finishtime`, `news`) VALUES ('', '2', '2', '2', '4', '5', '05:00:00', '05:00:00', 'yes')",
        (name,lastname,phonenumber,email,password))
        mysql.connection.commit()
        cur.close()
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)
    

    def cronograma():
        pacientes={
            "número":25,
            "id":"especialidad",
            "turno":"1"
        }
        paciente1={
            "tipoPaciente":25,
            "especialidad":"niños",
            "turno":"3"
        }
        paciente2={
            "tipoPaciente":25,
            "especialidad":"niños",
            "turno":"2"
        }

        enfermera1={
            "idNombre":1,
            "Nombre":"Camila",
            "especialidad":"niños"
        }

        enfermera2={
            "idNombre":1,
            "Nombre":"luisa",
            "especialidad":"general"
        }
        enfermera3={
            "idNombre":1,
            "Nombre":"rosa",
            "especialidad":"pediatria"
        }




if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True)