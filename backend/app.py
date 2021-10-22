from flask import Flask, json ,request ,jsonify
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
    print(request.json)
    data=request.json
    id=data["id"]
    name=data["name"]
    lastname=data["lastname"]
    phonenumber=data["phonenumber"]
    specialities=data["specialities"]
    staffrestricttions= 1
    passwords=data["passwords"]


    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM staff WHERE id='{id}'")
    alreadyExist= cur.fetchone()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO staff (id,name,lastname,phonenumber,specialities,staffrestrictions,password) VALUES(%s,%s,%s,%s,%s,%s,%s)",
        (id,name,lastname,phonenumber,specialities,staffrestricttions,passwords))
        mysql.connection.commit()
        cur.close() 
        return (jsonify(exist = False))
    else:
        return (jsonify(exist = True))

#Inicio de Sesión
@app.route('/login', methods=['POST'])
def login():
    data=request.json
    print(request.json)
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
    try:

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
    except :
        return jsonify({"Message":"Datos Faltantes"})
#Se crea el paciente
@app.route('/patientRegistry', methods=["POST"])
def patientRegistry():
    data=request.json
    #se debe crear el número de pacientes a atender 
    try:
        patientype=data["patientype"]
        groupquantity=data["patientsNumber"]
        erviceHours=data["serviceHours"]
        cur = mysql.connection.cursor()
        cur.execute(" INSERT INTO patientsgroup (`groupquantity`, `patientype`,servicehours )  VALUES(%s,%s,%s)",(groupquantity,patientype,serviceHours))
        mysql.connection.commit()
        cur.close()
        return jsonify({"Message":"Pacientes Registrados"})


    except : 
        return jsonify({"Message":"Faltan datos"})

    cur.execute(f"SELECT * FROM patientsgroup WHERE gropuquantity = '{gropuquantity}' ")
    if data.fetchall()>1:
        mysql.connection.commit()
        cur.execute(f"SELECT * FROM staff WHERE specialities= '{patientype}'")
    else:
        pass
    # buscar si hay enfermeras para ese tipo de paciente 


def cronograma():

    # token


    data=request.json
    #se debe crear el número de pacientes a atender 
    try:
        patientype=data["patientype"]
        groupquantity=data["patientsNumber"]
        serviceHours=data["serviceHours"]
        cur = mysql.connection.cursor()
        cur.execute(" INSERT INTO patientsgroup (`groupquantity`, `patientype`,servicehours )  VALUES(%s,%s,%s)",(groupquantity,patientype,serviceHours))
        mysql.connection.commit()
        cur.close()

        # se debe verificar primero que existen enfermeras y adicional de la categoria libres 
        return jsonify({"Message":"Pacientes Registrados"})
        #se debe crear el número de pacientes a atender 
        # creo la cantidad de  pacientes requeridos pacientes


        

    except : 
        return jsonify({"Message":"Faltan datos"})



@app.route('/indexPage',methods=["POST",'GET'])
def retorno():
    token=request.headers["Authorization"].split(' ')[1]

    return jsonify(valida_token(token,output=True))




if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True,port=getenv('PORT'))
