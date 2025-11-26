import secrets
import os

senha = secrets.token_hex(5)
print(senha)

caminho = os.path.join(
    r"C:\Users\renat\OneDrive\Documentos\GitHub\teste\back-end",
    "senha.txt"
)

with open(caminho, "w") as arquivo:   # <-- Mudar para "w"
    arquivo.write(f"{senha}")

print(f"Senha gerada e salva em {caminho}")
