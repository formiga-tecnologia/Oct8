import os
Current_folder = str(os.getcwd()).split("\\")
Project_name = Current_folder[len(Current_folder)-1]

def Command_zada():
    print("Run command to "+Project_name)
    Command = input("> ")
    if(Command == "run"):
        os.system("npm start")       

#os.system("npm start")
        
Command_zada()