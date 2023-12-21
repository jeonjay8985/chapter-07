//colormanager/hooks.js
import {useState} from "react"
//export default, export 차이
//export default - .js 오직 하나만 내보낼 때
//export - 여러개를 내 보낼 때
export const useInput=initialValue=>{
  const [value,setValue]=useState(initialValue)
  return [
    {value,onChange:e=>setValue(e.target.value)},
    ()=>setValue(initialValue)
  ]
}