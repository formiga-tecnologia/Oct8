import subprocess

p = subprocess.Popen(["dir"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
output, error = p.communicate()

if output:
    print("Saída:", output.decode())
if error:
    print("Erro:", error.decode())