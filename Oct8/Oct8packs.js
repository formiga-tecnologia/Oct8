
class oct8Pack{
    _State_pack = ""
    Object_pack = ""
    Style_pack = ""
    Var_packs = ""
    PacksProps(){
        let index = 1
        this.Var_packs.forEach(element => {
            if(String(this.Object_pack).includes("$"+index)){
                this.Object_pack = String(this.Object_pack).replace("{$"+index+"}",element)
            }
            index+=1
        });
    }
    RenderStyle(){
        let index = 1
        this.Style_pack.forEach(styles =>{
            if(String(this.Object_pack).includes("#"+index)){
                this.Object_pack = String(this.Object_pack).replace("{#"+index+"}",styles)
            }
            index+=1
        })
    }
    RenderPack(Element){
        Element.innerHTML+= this.Object_pack
    }
     ReadPack(PackUrl){
        fetch(PackUrl).then(Response=>{
            return Response.json()
        }).then(data=>{
            this._State_pack = data
            this.Object_pack = data[0]["Pack"]["component"]
            this.Var_packs = data[0]["Pack"]["Prop"]
            this.Style_pack = data[0]["Pack"]["style"]
        })
    }
}

export default oct8Pack