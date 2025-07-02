import os
import threading
import webbrowser
from flask import Flask, redirect, request, jsonify
from dotenv import load_dotenv
from functions.inicio import inicio_bp

app = Flask(__name__)

app.register_blueprint(inicio_bp)


@app.route('/')
def index():
    return redirect("/inicio/")

def abrir_navegador():
    webbrowser.open_new("http://127.0.0.1:3000/inicio/")


if __name__ == '__main__':
    if os.environ.get("WERKZEUG_RUN_MAIN")== "false":
        threading.Timer(1, abrir_navegador).start()
    app.run(host="0.0.0.0", port=3000, debug=True, threaded=True)