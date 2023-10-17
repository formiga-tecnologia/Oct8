
class Oct8Route{
    constructor(Route,Event){
        this.Routes=[]
        this.StatusRoutes = undefined
        this.NotFoundStatus =false
        this.NotFoundEvent = null
        this.CreateNewRoute(Route,Event)
        this.#_Route_Path_event()
    }

    CreateNewRoute(Route="/",Event=()=>{console.log("none")}){
        let ObjectRoute = {Route:[Route,Event]}
        this.Routes.push(ObjectRoute)
    }
    #_Route_Path_event(){
        window.addEventListener('hashchange',()=>{
            console.clear()
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
            this.Routes.forEach(element => {
                //console.log(element["Route"][0]+" "+Gethash.replace("#",''))
                if(Gethash.replace("#",'') == element["Route"][0].toLowerCase())
                {
                    console.log("Deu math")
                    this.NotFoundStatus = false
                    this.StatusRoutes = "ROUTE 200"
                    element["Route"][1]()
                    return this.StatusRoutes
                }
                else{
                    this.NotFoundStatus = true
                }
            });
            if(this.NotFoundStatus == true){
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
}

export default Oct8Route