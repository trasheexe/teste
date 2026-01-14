import secrets
import os

senha = secrets.token_hex(5)
print(senha)

base_dir = os.path.dirname(os.path.abspath(__file__))
caminho = os.path.join(base_dir, "senha.txt")

os.makedirs(os.path.dirname(caminho), exist_ok=True)

with open(caminho, "w", encoding="utf-8") as arquivo:
    arquivo.write(senha)

print(f"Senha gerada e salva em {caminho}")
