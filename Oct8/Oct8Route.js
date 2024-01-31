import Oct8Animation from "./Oct8Animate.js"
class Oct8Route{
    constructor(Route,Event){
        this.Routes=[]
        this.StatusRoutes = undefined
        this.NotFoundStatus =false
        this.NotFoundEvent = null
        this.LocalVars = []
        this.TypeVars =[]
    }

    CreateNewRoute(Route="/",Event=()=>{console.log("none")},ConfigVarsRoute=null){
        let ObjectRoute = {Route:[Route,Event]}
        this.TypeVars = ConfigVarsRoute
        this.Routes.push(ObjectRoute)
    }

    CreateDefaultRoute(FunctionDefault){
        this.Routes.push({"/":[FunctionDefault]})
    }

    #_Route_Path_event(){
        window.addEventListener('hashchange',()=>{
            this.#_Search_Route()
        })

    }
    LoadRoutes(){
        window.addEventListener("load",()=>[
            this.#_Search_Route()
        ])
    }
    #_Search_Route(){
        let Gethash = window.location.hash
            Gethash = Gethash.toLowerCase()
            let foundStatus = null
            this.Routes.forEach(element => {
                //console.log(element["Route"][0]+" "+Gethash.replace("#",''))
                if(window.location.hash == ''){
                    
                    if(this.Routes["/"] != undefined){
                        this.Routes["/"][0]()
                    }
                    return 0 
                }
                if(Gethash.replace("#",'') == element["Route"][0].toLowerCase() && !element["Route"][0].includes("/:"))
                {
                    this.NotFoundStatus = false
                    this.StatusRoutes = "ROUTE 200"
                    foundStatus = true
                    element["Route"][1]()
                    return this.StatusRoutes
                    
                }
                if(element["Route"][0].includes("/:")){
                    let GetHashVector = Gethash.replace("#",'').split("/")
                    let LocationRoute =  element["Route"][0].replace("#",'').split("/")
                    if(GetHashVector[0] == LocationRoute[0]){
                        if(this.#_GetHashNumber('/',Gethash) == this.#_GetHashNumber('/',element["Route"][0])){
                            let VarsLocals = Gethash.split("/:").splice(1)
                            VarsLocals = String(VarsLocals).split("?")
                            VarsLocals = String(VarsLocals).split("&")
                            VarsLocals = String(VarsLocals).split(",") 
                            VarsLocals.forEach(elem=>{
                                if(elem.includes("="))
                                {
                                    
                                    let val = elem.split("=")
                                    VarsLocals = VarsLocals.filter((a)=>{
                                        return a !== elem
                                    })
                                    VarsLocals.push((elem))
                                }
                            })
                            console.log(VarsLocals)
                            this.LocalVars = VarsLocals
                            element["Route"][1]()
                            this.StatusRoutes = "ROUTE 200"
                            this.NotFoundStatus = false
                            return this.StatusRoutes
                        }
                    }
                }
                else{
                    this.NotFoundStatus = true
                }
            });
            if(this.NotFoundStatus == true && foundStatus == null){
                this.StatusRoutes = "ROUTE 404"
                if(this.NotFoundEvent != null){
                    this.NotFoundEvent()
                }
                else{
                    document.getElementsByTagName("body")[0].innerHTML = this.StatusRoutes
                }
                
                return this.StatusRoutes
            }
    }
    AddNotFoundPage(Event404){
        this.NotFoundEvent = Event404
    }
    ReturnParamsURLRoute(Indice=null){
        if(Indice==null)
        {
            return this.LocalVars    
        }
        return this.LocalVars[Indice]
    }
    #_GetHashNumber(Char,Url){
        let Count =0
        for (let index = 0; index < Url.length; index++) {
            if(Url[index] == Char){
                Count++
            }
        }
        return Count
    }
}

export default Oct8Route