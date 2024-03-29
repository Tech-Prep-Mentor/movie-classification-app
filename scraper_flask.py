from flask import Flask, jsonify, request
import requests

app = Flask(__name__)
TMDB_TOKEN = 'replace-with-token'

@app.route('/movies', methods=['GET'])
def get_movies():
    url = "https://api.themoviedb.org/3/account/21151538"
    headers = {
    "accept": "application/json",
    "Authorization": f"Bearer {TMDB_TOKEN}"
    }

    response = requests.get(url, headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=False)