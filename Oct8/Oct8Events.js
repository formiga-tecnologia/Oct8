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
        this.ElementHistory.push({ReactionNameId:ReactionNameId,ElementName:ElementTarget,Func:functionBase})
        this.Reaction.push({ReactionName:ReactionNameId,Iteration:0,Interval:
        setInterval(()=>{
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
            if(compare != OldObject){
                OldObject = ElementTarget
                ElementsHistory[this._SearchObj(ReactionNameId,ElementsHistory)].ElementName = compare
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
