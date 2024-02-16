from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import mysql.connector
import bcrypt



mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="shop"
)


app = Flask(__name__)
CORS(app)

def hashPassword(password):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(bytes(password, 'utf-8'), salt)
    return hashed

def is_authenticated():
    cursor = mydb.cursor()
    cursor.execute("Select password FROM users WHERE username=%s", (request.json.get('username'),))
    res = cursor.fetchone()
    passwordHashed = res[0]
    print(passwordHashed)
    print(bcrypt.hashpw(bytes(request.json.get('password'), 'utf-8'), bytes(passwordHashed, 'utf-8'))   )
    return passwordHashed == bcrypt.hashpw(bytes(request.json.get('password'), 'utf-8'), bytes(passwordHashed, 'utf-8')).decode('utf-8') 

@app.post('/signup')
def signup():
    if(request.json.get('username') =="" or request.json.get('password')=="" or request.json.get('firstname') =="" or request.json.get('lastname') =="" or request.json.get('email') ==""):
        return jsonify({"message":"Signup data is missing."}), 400;
    else:
        cursor = mydb.cursor()
        cursor.execute("Select count(*) FROM users WHERE username=%s", (request.json.get('username'),))
        res = cursor.fetchone()
        countUsers = res[0]
        if(countUsers==0):
            cursor.execute("INSERT INTO users (username, firstname, lastname, password, email) VALUES (%s,%s,%s,%s,%s)", (request.json.get('username'), request.json.get('firstname'), request.json.get('lastname'), hashPassword(request.json.get('password')), request.json.get('email')))
            mydb.commit()
            cursor = mydb.cursor(dictionary=True)
            cursor.execute("Select id, username, firstname, lastname, email FROM users WHERE username=%s", (request.json.get('username'),))
            res = cursor.fetchall()
            return jsonify({ "data":res[0]})
        return jsonify({"message":"Username already used."}), 400
    
@app.post('/login')
def login():
    if(is_authenticated()):
        cursor = mydb.cursor(dictionary=True)
        cursor.execute("Select id, username, firstname, lastname, email FROM users WHERE username=%s", (request.json.get('username'),))
        res = cursor.fetchall()
        return jsonify({ "data":res[0]})
    return jsonify({"message":"Username or Password invalid."}), 401

@app.post("/changePassword")
def changePassword():
    if(request.json.get("newPassword")==""):
        return jsonify({"message":"New Password is empty."}), 400
    elif(is_authenticated()):
        cursor = mydb.cursor()
        cursor.execute("UPDATE users SET password = %s where username = %s", (hashPassword(request.json.get('newPassword')), request.json.get('username')))
        mydb.commit()
        return jsonify({"message":"Password has been changed."})
    else:
        return jsonify({"message":"Username or Password invalid."}), 401


@app.get('/users')
def getUsers():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT id, username, firstname, lastname, email FROM users")
    res = cursor.fetchall()
    return jsonify({"data":res})

@app.delete('/user/<user_id>')
def deleteUser(user_id):
    cursor = mydb.cursor()
    cursor.execute("DELETE FROM users where ID =%s",(user_id,))
    mydb.commit()
    if(cursor.rowcount==0):
        return jsonify({"message":"User with id "+user_id+" does not exist."}), 400
    return jsonify({"message":"User deleted successfully."})
    
@app.get('/products')
def getProducts():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT id, name, description, price FROM products")
    res = cursor.fetchall()
    return jsonify({"data":res})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)