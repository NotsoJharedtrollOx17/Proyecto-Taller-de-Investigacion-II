# lorem ipsum dolor...

# TODO realizar API minima para conectar el frontend con el backend de flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from bvh import Bvh # pip install Bvh

# Setting app route for proper startup headers  
app = Flask(__name__)
CORS(app)

# * From ChatGPT:
'''
In HTTP, there are several methods used to interact with a web server, and two of the most commonly used ones are 'GET' and 'POST' requests. 
The main differences between these two requests are:

• GET requests are used to retrieve data from the server, while POST requests are used to send data to the server to be processed.

• GET requests are limited in the amount of data they can send, because the data is sent in the URL query string. In contrast, POST requests can send larger amounts of data, because the data is sent in the request body.

• GET requests can be cached, which means that if the same request is made again, the response can be retrieved from the cache instead of the server. POST requests cannot be cached.

• GET requests are generally considered to be less secure, because the data is sent in the URL, which can be intercepted and viewed by third parties. POST requests are generally considered to be more secure, 
because the data is sent in the request body, which is not visible in the URL.
'''

@app.route('/api/bvh_upload', methods=['POST'])
def upload_bvh_file():
    file = request.files['file']
    file.save('./data')
    return 'File uploaded successfully'

@app.route('/api/rom_data', methods=['GET'])
def get_rom_data():
    return jsonify()


@app.route('/test/test_function', )
def test():
    return jsonify("TEXT FROM THE BACKEND :D")

if __name__ == '__main__':
    app.run()