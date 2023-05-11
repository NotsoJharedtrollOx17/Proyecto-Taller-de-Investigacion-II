# lorem ipsum dolor...

# TODO realizar API minima para conectar el frontend con el backend de flask
from flask import Flask, jsonify
from flask_cors import CORS

# Setting app route for proper startup headers  
app = Flask(__name__)
CORS(app)

@app.route('/test/test_function', )
def test():
    return jsonify("TEXT FROM THE BACKEND :D")


if __name__ == '__main__':
    app.run()