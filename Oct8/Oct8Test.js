
class Oct8Test{
    constructor(){

    }
    RunTest(){
        //https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
        console.log('\nI\'m the normal output')
        console.log('\x1b[31mAnd now I\'m red!')
        console.log('Shoot, why am I still red?')
        console.log('I need to \x1b[0mreset my console to get back to normal')
        console.log('Colors \x1b[32mcan \x1b[33mchange \x1b[35min \x1b[36mthe \x1b[34msame \x1b[0mlog')
        console.log('\x1b[1mBRIGHT colors \x1b[32mare \x1b[33mbolded \x1b[35mand \x1b[36mbrighter \x1b[0m')
        console.log('\x1b[2mDIM colors \x1b[32mare \x1b[33mdarker \x1b[0m')
        console.log('and of course, \x1b[41mwe have \x1b[30m\x1b[43mbackground colors\x1b[0m')
        console.log('\x1b[7mReverse \x1b[32mswap \x1b[33mforeground \x1b[35mand \x1b[36mbackground\x1b[0m')
        console.log('\x1b[8m\x1b[41mthis text \x1b[43mis hidden \x1b[42mbut the background\x1b[42m still comes \x1b[45mthrough\x1b[0m')
        console.log('\x1b[4mgetting fancy with underlines \x1b[30m\x1b[3m\x1b[105mand italics\x1b[0m')
        this.#ReturnErro()
    }
    #ReturnErro(){
        console.log('\x1b[31m Your test have Errors!!')
        console.log('========================================== \x1b[0m')
        
        console.log("Erro aqui")
    }
    #ReturnSucess(){

    }
    #ReturnReport(){
        
    }
}

let oct_test = new Oct8Test()
oct_test.RunTest()