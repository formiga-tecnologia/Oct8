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
                }
                this.Object_pack = ObjReplace
            }
            index+=1
        })
    }
    RenderPack(Element){
        Element.innerHTML+= this.__JoinObjects(this.Object_pack)
        this.RenderStyle()
    }
    NewElementObjectPack(element){
        this.Object_pack+=element
        this.RenderStyle()
        this.PacksProps()
    }

    NewPropPack(prop){
        this.Var_packs.push(prop)
        this.PacksProps()
    }

    NewStylePack(style){
        this.Style_pack.push(style)
        this.RenderStyle()
    }
     ReadPack(PackUrl,PackName){
        fetch(PackUrl).then(Response=>{
            return Response.json()
        }).then(data=>{
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
    __JoinObjects(){
        var newObject = ""
        var ObjctVetor = this.Object_pack.split(',')
        ObjctVetor.forEach(elem =>{
            newObject += " "+elem
        })
        return newObject
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