
class oct8Pack{
    _State_pack = ""
    RenderPack(Atribute){
        console.log(Atribute)
        this._State_pack = Atribute
        return Atribute
    }
     ReadPack(PackUrl,SaveState){
        fetch(PackUrl).then(Response=>{
            return Response.json()
        }).then(data=>{
            this._State_pack = data
        })
    }
}

export default oct8Pack