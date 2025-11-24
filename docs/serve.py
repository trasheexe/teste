from flask import Flask, request, jsonify
import secrets
import os

app = Flask(__name__)

# Caminho onde as senhas serão salvas
CAMINHO = r"C:\Users\renat\OneDrive\Documentos\GitHub\teste\back-end\senha.txt"


@app.route("/registrar", methods=["POST"])
def registrar():
    usuario = request.form["usuario"]
    senha = secrets.token_hex(8)

    with open(CAMINHO, "a") as arq:
        arq.write(f"{usuario}:{senha}\n")

    return jsonify({"status": "ok", "usuario": usuario, "senha": senha})


@app.route("/LOGIN_index.html", methods=["POST"])
def login():
    usuario = request.form["usuario"]
    senha = request.form["senha"]

    if not os.path.exists(CAMINHO):
        return jsonify({"status": "erro", "mensagem": "Nenhum usuário registrado"})

    with open(CAMINHO, "r") as arq:
        linhas = arq.readlines()

    for linha in linhas:
        user, passw = linha.strip().split(":")
        if user == usuario and passw == senha:
            return jsonify({"status": "ok"})

    return jsonify({"status": "erro", "mensagem": "Usuário ou senha inválidos"})


app.run(debug=True)
