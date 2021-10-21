from flask import Flask ,request ,jsonify
from flask_mysqldb import MySQL
from routes.auth import routes_auth
from dotenv import load_dotenv
from flask_cors import CORS
from funtion_jwt import write_token,valida_token
from funtion_mail import sendMail
from os import getenv

# Importamos librerias 

app = Flask(__name__)


# Configuracion de la base de datos 

app.config['MYSQL_HOST'] = getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = getenv('MYSQL_DB')

mysql = MySQL(app)


cors = CORS(app, resources={r"/*": {"origins": "*"}})


app.register_blueprint(routes_auth,url_prefix="/api")

#Registro del personal de enfermeras
@app.route('/staffRegistry',methods=["POST"])
def staffRegistry():
    data=request.json
    id=data["id"]
    name=data["name"]
    lastname=data["lastname"]
    phonenumber=data["phonenumber"]
    specialities=data["specialities"]
    staffrestricttions=data["staffrestrictions"]
    passwords=data["passwords"]

    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM staff WHERE id='{id}'")
    alreadyExist= cur.fetchone()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO staff (id,name,lastname,phonenumber,specialities,staffrestrictions,passwords) VALUES(%s,%s,%s,%s,%s,%s,%s)",
        (id,name,lastname,phonenumber,specialities,staffrestricttions,passwords))
        mysql.connection.commit()
        cur.close() 
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)

#Inicio de Sesión
@app.route('/login', methods=['POST'])
def login():
    data=request.json
    id=data["id"]
    password=data["password"]
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM staff WHERE id = '{id}' and password = '{password}'")
    data= cur.fetchone()
    if data != None:
        token=str(write_token(request.get_json())).split("'")[1]
        return jsonify({"token":token})
    else:
        return jsonify(exist = False)

@app.route('/verify')
def verify():
    token=request.headers["Authorization"].split(' ')[1]
    return valida_token(token,output=True)

@app.route('/verify')
def verifyToken():
    token=request.get_json()
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
    

@app.route('/cronograma')
def cronograma():
    data=request.json
    gropuquantity=data["gropuquantity"]
    patientype=data["patientype"]
    turno=data["turno"]
    cur = mysql.connection.cursor()
    
    #se debe crear el número de pacientes a atender 
    # creo la cantidad de  pacientes requeridos pacientes
    cur.execute(f"SELECT * FROM patientsgroup WHERE gropuquantity = '{gropuquantity}' ")
    if data.fetchall()>1:
        mysql.connection.commit()
        cur.execute(f"SELECT * FROM staff WHERE specialities= '{patientype}'")
    else:
        pass
    # buscar si hay enfermeras para ese tipo de paciente 

if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True,port=getenv('PORT'))
