import { useState } from "react";
//export default와 export의 차이
//export default: .js파일에서 오직 하나의 hook만 내보냄
//export: .js파일에서 여러개의 hooks를 내보냄

export const useInput=initialValue=>{
    const [value,setValue]=useState(initialValue)
    return [
      {value,onChange:e=>setValue(e.target.value)},
      ()=>setValue(initialValue)
    ]
  }