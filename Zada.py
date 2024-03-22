import os
import shutil



def Command_base():
    print("OCT8. ZADA Version")
    Command = input("Enter your command >")
    if Command!="false":
        if Command == "new":
            Project_name = input("Name of your Project >")
            try:
                shutil.copytree("./BaseZada", "./"+Project_name)
                print(f'Pasta copiada com sucesso')
                print("Installing Dependencies...")
            except shutil.Error as e:
                print(f'Error copy folder: {e}')
    if Command != "false":
        os.system("cls")
        Command_base()


Command_base()
