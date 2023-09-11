/*
  CREATE EVENTS TO PROCESSING
   * FISICS EVENTS (Where colider, where move, where wind..etc)
   * ANIMATION EVENTS Where Animate (Where animate the target object)
   * OBJECT EVENT Where modify one proprie with Heigth or widht
   * GENERIC EVENTS mouse, keyboard and other events providers with periferics
*/
export default class Oct8Events {
    ElementHistory=[]
    Reaction = []
  
    WhereColide(PyshicsOct8, timeColider, Callfunction) {
        setInterval(() => {
            if (PyshicsOct8.colider == true) { 
                Callfunction();
            }
            console.log(PyshicsOct8.colider);
        }, timeColider);
    }

        /**
     * Creating a state monitoring for the target element.
     * @param {HTMLElement} ElementTarget Target element.
     * @param {Object} functionBase Function execution if it is upgraded.
     * @param {string} ReactionName Identifier of the reaction created.
     */
    CreateReactiveState(ElementTarget=HTMLElement,functionBase=Object,ReactionNameId =""){
        ElementTarget = document.getElementById(ReactionNameId).innerHTML
        let ValueAtribute = false
        console.log(ElementTarget+"<<<!")
        if(ElementTarget ==""){
            ElementTarget = document.getElementById(ReactionNameId).value
            ValueAtribute = true
        }
        this.ElementHistory.push({ReactionNameId:ReactionNameId,ElementName:ElementTarget,Func:functionBase})
        this.Reaction.push({ReactionName:ReactionNameId,Iteration:0,Interval:
        setInterval(()=>{
            let valueBase = ValueAtribute
            let OldObject = ""
            let FunctionExec = null
            let IdTarget = ""
            let ElementsHistory = this.ElementHistory
            this.ElementHistory.forEach(element => {
                if(element.ReactionNameId == ReactionNameId){
                    OldObject = element.ElementName
                    FunctionExec = element.Func
                    IdTarget = element.ReactionNameId
                }
            });
            let compare = document.getElementById(IdTarget).innerHTML
            let compare2 = document.getElementById(IdTarget).value
            console.log(compare2+"  "+OldObject)
            console.log(valueBase)
            if(compare != OldObject && valueBase == false){
                OldObject = ElementTarget
                ElementsHistory[this._SearchObj(ReactionNameId,ElementsHistory)].ElementName = compare
                FunctionExec()
            }
            if(compare2!=OldObject && valueBase == true){
                OldObject = ElementTarget
                ElementsHistory[this._SearchObj(ReactionNameId,ElementsHistory)].ElementName = compare2
                FunctionExec()
            }
        },200)
        })
    }

    RunReaction(ReactionName = ""){

    }

    _SearchObj(TargetText,Vetor,PropVetor){
        for (let index = 0; index < Vetor.length; index++) {
            if(Vetor[index].ReactionNameId == TargetText){
                return index
            }
        }
    }
    
    ResponsiveForMobile(HorizontalMobile, VerticalMobile) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (w < 500) {
            VerticalMobile();
        }
        if (w > 400 && h < 400) {
            HorizontalMobile();
        }
        window.addEventListener("resize", () => {
            window.location.reload();
        }, false);
        window.addEventListener("load", () => {
            if (w < 500) {
                VerticalMobile();
            }
            if (w > 400 && h < 400) {
                HorizontalMobile();
            }
        }, false);
    }
}
