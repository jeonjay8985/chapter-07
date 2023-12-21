//colormanager/AddColorForm.js
import {useRef} from "react"

export default function AddColorForm({onNewColor=f=>f}){
  const txtTitle=useRef()
  const hexColor=useRef()

  const submit=e=>{
    e.preventDefault()
    // console.log(txtTitle.current.value)
    // console.log(hexColor.current.value)
    const title=txtTitle.current.value
    const color=hexColor.current.value
    onNewColor(title,color)
    txtTitle.current.value=""
    hexColor.current.value=""
  }

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  )
}