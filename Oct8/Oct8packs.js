import Oct8Route from "./Oct8Route.js"

class oct8Pack extends (Oct8Route){
    _State_pack = ""
    Object_pack = ""
    Style_pack = ""
    Var_packs = ""
    Comp_name =""

    PacksProps(){
        let index = 1
        this.Var_packs.forEach(element => {
            if(String(this.Object_pack).includes("$"+index)){
                var RegexValue = /\$/g
                var ObjReplace = String(this.Object_pack)
                var Count = String(this.Object_pack).match(RegexValue).length
                for (let _index = 0; _index <= Count; _index++) {
                    ObjReplace = ObjReplace.replace("{$"+index+"}",element)
                    console.log("Find"+"#"+index+" "+_index)
                }
                this.Object_pack = ObjReplace
                //this.Object_pack = String(this.Object_pack).replace("{$"+index+"}",element)
            }
            index+=1
        });
    }
    RenderStyle(){
        let index = 1
        this.Style_pack.forEach(styles =>{
            if(String(this.Object_pack).includes("#"+index)){
                var RegexValue = /\#/g
                var ObjReplace = String(this.Object_pack)
                var Count = String(this.Object_pack).match(RegexValue).length
                for (let _index = 0; _index <= Count; _index++) {
                    ObjReplace = ObjReplace.replace("{#"+index+"}",styles)
                    console.log("Find"+"#"+index+" "+_index)
                }
                this.Object_pack = ObjReplace
            }
            index+=1
        })
    }
    RenderPack(Element){
        console.log(this.Object_pack)
        Element.innerHTML+= this.Object_pack
        console.log("op")
        this.RenderStyle()
    }
    NewElementObjectPack(element){
        this.Object_pack+=element
        this.RenderStyle()
        this.PacksProps()
    }
     ReadPack(PackUrl,PackName){
        fetch(PackUrl).then(Response=>{
            return Response.json()
        }).then(data=>{
            console.log(data)
            data.forEach(elem =>{
                if(elem["Name"]==PackName)
                {
                    this._State_pack = elem
                    this.Object_pack = elem["Pack"]["component"]
                    this.Var_packs = elem["Pack"]["Prop"]
                    this.Style_pack = elem["Pack"]["style"]
                    this.Comp_name = elem["Name"]
                }
            })

        })

    }
    PackAssembly(PackFunction,time){
        let A_Ps = setInterval(()=>{
            this.PacksProps()
            this.RenderStyle()
            PackFunction()
            clearInterval(A_Ps)
        },time)
    }
}

export default oct8Pack