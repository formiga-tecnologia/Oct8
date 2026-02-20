import { Oct8 } from "../../TS/Oct8/Oct.js"

class WarningLabel extends Oct8.FactoryClass{
    constructor(props){
        super()
        this.props = props 
        this.FactoryObj = `
            <div ${Oct8.Styled.CssClassList.LabelWarning}> Oct8 V2026 <p> Demo beta for Oct8 </p> </div>
        `
    }
}

export {WarningLabel}