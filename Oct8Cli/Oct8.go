package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
)

func main() {
	if len(os.Args) < 2 {
		showHelp()
		return
	}

	command := os.Args[1]

	switch command {

	case "help":
		showHelp()

	case "init":
		InitProj()

	case "update":
		Update()

	case "server":
		Server()

	default:
		fmt.Println("Comando desconhecido:", command)
		showHelp()
	}
}

func UpdateVersion(repoUrl string, tempdir string) error {
	fmt.Println("Download Oct8...................0")
	cmd := exec.Command("git", "clone", repoUrl, tempdir+"/temp")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Run()
	fmt.Println("Download Oct8 finish!...............100% ")
	return nil
}

func Clone(repoUrl string, tempdir string) error {
	fmt.Println("Download Oct8...................0")
	cmd := exec.Command("git", "clone", repoUrl, tempdir+"/temp")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Run()
	fmt.Println("Download Oct8 finish!...............100% ")
	fmt.Println("Create Folders..........................0")
	os.Mkdir(tempdir+"/js", 0775)
	os.Mkdir(tempdir+"/css", 0775)
	os.Mkdir(tempdir+"/css/components", 0775)
	os.Mkdir(tempdir+"/js/components", 0775)
	os.Mkdir(tempdir+"/js/pages", 0775)
	Jsfiles, err := os.Create(tempdir + "/js/app.js")
	Jsfiles.WriteString(Jsfile())
	os.Create(tempdir + "/css/style.css")
	htmlfile, err := os.Create(tempdir + "/index.html")
	if err != nil {
		panic(err)
	}
	htmlfile.WriteString(HtmlFile())
	htmlfile.Close()
	fmt.Println("Create Folders..........................100%")
	os.Rename(tempdir+"/temp/Oct8", tempdir+"/js/Oct8")
	os.RemoveAll(tempdir + "/temp")
	fmt.Println("Project Oct8 created!")
	return nil
}

func Jsfile() string {
	return `
	import {Oct8} from "./Oct8/Oct8.js"
	Oct8.App(()=>{
        //Start your app here.
	})
	`
}
func HtmlFile() string {
	return `
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
    	<title>New Oct8 Project</title>
	</head>
	<body>
    	<h1>Welcome to Oct8</h1>
		<div id='app'></div>
    	<script src="./js/app.js" type="module"></script>
	</body>
</html>
	`
}

func Copy(src string, dst string) error {
	return filepath.Walk(src, func(path string, info os.FileInfo, err error) error {
		relPat_, _ := filepath.Rel(src, path)
		desPath_ := filepath.Join(dst, relPat_)
		if info.IsDir() {
			return os.MkdirAll(desPath_, os.ModePerm)
		}

		srcfile, err := os.Open(path)
		if err != nil {
			return err
		}

		defer srcfile.Close()

		dstFile, err := os.Create(desPath_)
		if err != nil {

			return err
		}
		defer dstFile.Close()

		_, err = io.Copy(dstFile, srcfile)
		return err
	})
}

func showHelp() {
	fmt.Println("Oct8 CLI")
	fmt.Println("")
	fmt.Println("Uso:")
	fmt.Println("  oct8 new comp <nome>   Cria um novo componente")
	fmt.Println("  oct8 help              Mostra ajuda")
}

func CreateConfigOct8(directory string) {
	os.Create(directory + "/Oct8_config.json")
}

func InitProj() {
	var path string
	fmt.Print("Destiny folder")
	fmt.Scanln(&path)

	Clone("https://github.com/formiga-tecnologia/Oct8", path)
	CreateConfigOct8(path)

}
func Update() {
	var path string
	fmt.Print("Destiny folder")
	fmt.Scanln(&path)
	UpdateVersion("https://github.com/formiga-tecnologia/Oct8", path) //

}

func Server() {
	var path string
	fmt.Print("Destiny project Oct8")
	fmt.Scanln(&path)

	fs := http.FileServer(http.Dir(path))

	http.Handle("/", fs)

	fmt.Println("Server running on http://localhost:8080")

	http.ListenAndServe(":8080", nil)
}
