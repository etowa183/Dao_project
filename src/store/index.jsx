import { createGlobalState } from "react-hooks-global-state"
import moment from "moment"
  
const {setGlobalState,getGlobalState,useGlobalState}=createGlobalState({
    createModal:"scale",
    connectedAccount:"",
    contract:null,
    proposals:[],
    isStakeholder:false,
    balance:0,
    myBalance:0,
})

const truncate=(text,startChar,endChar,maxLength) =>{
    if(text,lehgth>maxLength){
        let start=text.substring(0,startchar)
        let end=text.substring(text.length-endChar,text.length)
        while(start.length+end.length<max.Length){
            start=start+'.'
        }
        return start+end
    }
    return text
}
const daysRemaining=(days) =>{
    const todaysdate=moment()
    days=Number((days+'000').slice(0))
    days=moment(days).format('YYYY-MM-DD')
    days=moment(days)
    days=days.diff((todaysdate,"days"))
    return days==1 ?"1 day":days+"days"
}
export {
    truncate,
    setGlobalState,
    useGlobalState,
    getGlobalState,
    daysRemaining
}