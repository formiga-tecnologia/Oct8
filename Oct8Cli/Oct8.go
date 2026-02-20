package main

import (
	"fmt"
	"os"
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

	default:
		fmt.Println("Comando desconhecido:", command)
		showHelp()
	}
}

func showHelp() {
	fmt.Println("Oct8 CLI")
	fmt.Println("")
	fmt.Println("Uso:")
	fmt.Println("  oct8 new comp <nome>   Cria um novo componente")
	fmt.Println("  oct8 help              Mostra ajuda")
}