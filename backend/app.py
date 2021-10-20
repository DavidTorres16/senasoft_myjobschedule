from MySQLdb import cursors
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
    name=data["name"]
    lastname=data["lastname"]
    phonenumber=data["phonenumber"]
    email=data["email"]
    password=data["password"]
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM Staff WHERE email='{email}'")
    alreadyExist= cur.fetchone()
    mysql.connection.commit()
    cur.close()
    if alreadyExist == None:
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Staff (name,lastname,phonenumber,email,password) VALUES(%s,%s,%s,%s,%s)",
        (name,lastname,phonenumber,email,password))
        mysql.connection.commit()
        cur.close() 
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)

@app.route('/login', methods=['POST'])
def login():
    data2=request.json
    token=write_token(data2)
    print(request.json)
    email = request.json["email"]
    password= request.json["password"]
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM Staff WHERE email = '{email}' and password = '{password}'")
    data= cur.fetchone()
    if data != None:
        return write_token(data=request.get_json())
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
        cur.execute(f"INSERT INTO `sena`.`workshift` (`shiftid`, `staffid`, `position`, `staffname`, `stafflastname`, `shiftDay`, `starttime`, `finishtime`, `news`) VALUES ('{}', '2', '2', '2', '4', '5', '05:00:00', '05:00:00', 'yes')",
        (name,lastname,phonenumber,email,password))
        mysql.connection.commit()
        cur.close()
        return jsonify(exist = False)
    else:
        return jsonify(exist = True)



@app.route('/validateHours/<id>')

def validateHours(id):
    cur=mysql.Connection()
    cur.execute(""" SELECT * from Workshift where  (starttime) """)


if __name__ == '__main__':
    load_dotenv()
    app.run(debug=True)