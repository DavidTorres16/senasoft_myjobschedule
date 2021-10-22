from flask import Flask, json ,request ,jsonify
from flask_mysqldb import MySQL

from dotenv import load_dotenv
from flask_cors import CORS
from funtion_jwt import write_token,valida_token
from os import getenv
from datetime import datetime
from funtion_day import lastday
# Importamos librerias 

app = Flask(__name__)


# Configuracion de la base de datos 

app.config['MYSQL_HOST'] = getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = getenv('MYSQL_DB')

mysql = MySQL(app)


cors = CORS(app, resources={r"/*": {"origins": "*"}})



#Registro del personal de enfermeras
@app.route('/staffRegistry',methods=["POST"])
def staffRegistry():
    try:
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
    except:
        return (jsonify({"Message": "Faltan datos por ingresar"}))





#Registro del personal de enfermeras
@app.route('/staffDelete/<id>',methods=["POST"])
def staffDelete(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f"SELECT * FROM staff WHERE id='{id}'")
        alreadyExist= cur.fetchone()
        mysql.connection.commit()
        cur.close()
        if alreadyExist == None:
            cur = mysql.connection.cursor()
            cur.execute("DELETE FROM staff id='{id}' ")
            mysql.connection.commit()
            cur.close() 
            return (jsonify({"Message":"Se eliminio Correctamente"}))
    except:
        return (jsonify({"Message": "Faltan datos por ingresar"}))

#Registro del personal de enfermeras
@app.route('/staffUpdate/<id>',methods=["POST","GET"])
def staffUpdate(id):
    try:
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

        cur.execute(f"UPDATE `bwuzxlyofwi6xbiurafd`.`staff` SET `name` = '{name}', `lastname` = '{lastname}', `phonenumber` = '{phonenumber}', `specialities` = '{specialities}', `staffrestrictions` = '{staffrestricttions}', `password` = '{passwords}' WHERE (`id` = '{id}');")
        alreadyExist= cur.fetchone()
        mysql.connection.commit()
        cur.close()
        if alreadyExist == None:
            cur = mysql.connection.cursor()
            cur.execute("DELETE FROM staff )",
            (id,name,lastname,phonenumber,specialities,staffrestricttions,passwords))
            mysql.connection.commit()
            cur.close() 
            return (jsonify(exist = False))
        else:
            return (jsonify(exist = True))
    except:
        return (jsonify({"Message": "Faltan datos por ingresar"}))



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

# registrar turno
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
        serviceHours=data["serviceHours"]
        cur = mysql.connection.cursor()
        cur.execute(" INSERT INTO patientsgroup (`groupquantity`, `patientype`,servicehours )  VALUES(%s,%s,%s)",(groupquantity,patientype,serviceHours))
        mysql.connection.commit()
        cur.close()
        cur.execute(f"select *  from staff  where specialities='{patientype}' and id NOT IN  (select staffid from workshift  );")
        enfermera=cur.fetchone()

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

@app.route('/staffSchedule',methods=["POST"])
def staffSchedule():
    # token
    data=request.json
    
    #se debe crear el número de pacientes a atender 
    try:
        token=request.headers["Authorization"].split(' ')[1]
        data= (valida_token(token,output=True))
        id= data["id"]
        cur = mysql.connection.cursor()
        print ("falle")
    #    cur.execute(" INSERT INTO patientsgroup (`groupquantity`, `patientype`,servicehours )  VALUES(%s,%s,%s)",(groupquantity,patientype,serviceHours))
        mysql.connection.commit()
        cur.execute(f" select *  from staff  where id NOT IN  (select staffid from workshift )")
    #   cur.execute(f" select *  from staff  where specialities={patientype} and id NOT IN  (select staffid from workshift  )")
        mysql.connection.commit()
        return jsonify(data)

        #se debe crear el número de pacientes a atender 
        # creo la cantidad de  pacientes requeridos pacientes

    except : 
        return jsonify({"Message":"Faltan datos"})




@app.route('/indexPage',methods=["POST",'GET'])
def retorno():
    token=request.headers["Authorization"].split(' ')[1]
    data= (valida_token(token,output=True))
    id= data["id"]
    cur = mysql.connection.cursor()
    cur.execute(f" select id,name,lastname,specialities,password  from  staff   " )
    mysql.connection.commit()
    data =cur.fetchall()
    print(type(data))
    for item in data:
        print (item)
    return jsonify(data)


@app.route('/prueba')
def cronograma():
    data=request.json
    patientype=data["patientype"]
    year=datetime.now().year
    mes=datetime.now().month
    day=lastday(year,mes)
    cur = mysql.connection.cursor()
    mysql.connection.commit()

    cur.execute(f"select *  from staff  where specialities='{patientype}' and id NOT IN  (select staffid from workshift  )")
    

    enfermera=cur.fetchone()
    idenfermera=enfermera[0]
    for i in range(datetime.now().day,day):
        if(i>0):
            if(i%5!=0 and i %7==0):
                cur.execute(f"INSERT INTO `bwuzxlyofwi6xbiurafd`.`workshift` (`staffid`, `shiftDay`, `starttime`, `finishtime`, `patientsgroup`, `day`) VALUES ('{enfermera[0]}', '{0}', '{datetime.now()}', '{0}', '{1}', '{i}')")
                mysql.connection.commit()

    # Ya se cuenta con la enfermera
    
    data=cur.execute(f"select  shiftid,staffid,patientsgroup ,day   from workshift where staffid='{idenfermera}' ")
    
    #envio el cronograma a enviar 

    cronograma=cur.fetchall()
    return jsonify({"shiftid":cronograma[0],
                    "staffid":cronograma[1],
                    "patientsgroup":cronograma[2],
                    "day":cronograma[3],
                    "turn":cronograma[4]})


if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True,port=getenv('PORT'))
