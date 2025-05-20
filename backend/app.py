import os
from flask import Flask, request, jsonify
from flask import send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text


# instancia de flask
app = Flask(__name__, static_folder='frontend/dist', static_url_path='')

CORS(app,)
#configuracion de la base de datos conexion a la base de datos

#conexion en local
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

#seguimiento de modificacion
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#instancia para la conexion base datos 
db = SQLAlchemy(app)
 
#crearemos nuestra tabla mediante una clase Usuarios
class Users(db.Model):
    #columnas
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    status = db.Column(db.Integer, nullable=False)

    # metodo convertir diccionario mapear  los datos
    def to_dic(self):
        #retornamos un objeto con nuestras columnas al realizar la consulta
        return {
            'id' : self.id,
            'name' : self.name,
            'email' : self.email,
            'age' : self.age,
            'status' : self.status
        }
    
# creamos la tabla 
with app.app_context():
    #creacion modelos con la class db. si la tabala existe no crea. si no crea la tabla
    db.create_all()

    # metodo o instruccion para verificar la db
    #try y except nos traemos el error, si llega a suceder y los renombramos con 'e'
    try:
        db.session.execute(text('SELECT 1'))
        print('conexion exitosa')
    except Exception as e:
        print(f'Error al conectar db:{str(e)}')


# endpoing 


#obtener usuarios creados

@app.route('/api/data/users', methods=['GET'])
def get_users():

    #obtenemos los registros de nuestra tabla 
    users = Users.query.all()


    #convertir los usuarios json
    data = [user.to_dic() for user in users]

    return jsonify({'message' : ' se obtuvieron los estudiantes con exito', 'data': data}), 200
    
    


#crear usuarios

@app.route('/api/create/users', methods=['POST'])
def create_user():

    data = request.get_json()
    # variable con la estructura de la tabala de users. instancia de nuestra clase
    new_user = Users (
        name = data['name'],
        email = data['email'],
        age = data['age'],
        status = data['status']
    )
    # add = a insert 
    db.session.add(new_user)
    # commit confirma de guardado en la db
    db.session.commit()

    #Convertir en diccionario con nuestra instancia tenemos acceso a nuetros metodos de la clase users. 
    return jsonify({
        "message": "Usuario creado exitosamente",
        "data": new_user.to_dic()
     }), 201


# actualizar usuarios

@app.route('/api/update/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    
    # Obtener los datos del usuario a actualizar
    data = request.get_json()
    user = Users.query.get(user_id)
    if not user:
        return jsonify({'mesajes' : 'usuario no encontrado'}), 404
    
        # actualizar el usuario en la base de datos
    
    user.name = data['name']
    user.age = data['age']
    user.email = data['email']

    db.session.commit()
   
    return jsonify({'mesaje': 'usuario actulizado correctamente',
                    'data' :user.to_dic() }), 200


# Enviar usuario a la papelera
@app.route('/api/trash/users/<int:user_id>', methods=['PATCH'])
def send_trash_user(user_id):

    # Obtener los datos del usuario a actualizar
    data = request.get_json()
    user = Users.query.get(user_id)
    if not user:
        return jsonify({'mesajes' : 'usuario no encontrado'}), 404
    
        # actualizar el usuario en la base de datos
    
    user.status = data['status']

    db.session.commit()
   
    return jsonify({'mensaje': 'usuario enviado a papelera correctamente', 'data' :user.to_dic() }), 200 


# Restaurar usuario de la papelera
@app.route('/api/restore/users/<int:user_id>', methods=['PATCH'])
def restore_user(user_id):

    #obtener los datos del usuario a restaurar
    data = request.get_json()
    user = Users.query.get(user_id)
    if not user:
        return jsonify({'mesajes' : 'usuario no encontrado'}), 404
    
    #actualizar el usuario en la base de datos
    user.status = data['status']

    db.session.commit()
   
    return jsonify({'mensaje': 'Usuario restaurado',  'data' :user.to_dic() }), 200

    

# Eliminar usuario de la papelera
@app.route('/api/delet/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):

    # Obtener el usuario a eliminar
    user = Users.query.get(user_id)
    if not user:
        return jsonify({'mesajes' : 'usuario no encontrado'}), 404

    # Eliminar el usuario de la base de datos
    db.session.delete(user)
    db.session.commit()
    

    return jsonify({'message': 'User permanently deleted'}), 200


# Servir archivos estáticos de React
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
