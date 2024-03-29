from flask import Flask, jsonify, request
import requests

app = Flask(__name__)
TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTI2YmY1ZDRkMTIwMDAyM2NjN2JiMTcyZTQ3OWU0MSIsInN1YiI6IjY2MDYzNzA0MzAzYzg1MDE3Y2I4NzU3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kB3AeH4Gm5gLdkTyEOEeCZdckS8onu0gHc6tkzbplxI"

@app.route('/movies', methods=['GET'])
def get_movies():
    url = "https://api.themoviedb.org/3/account/21151538"
    headers = {
    "accept": "application/json",
    "Authorization": f"Bearer {TMBD_TOKEN}"
    }

    response = requests.get(url, headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)