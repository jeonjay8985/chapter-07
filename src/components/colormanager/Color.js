//colormanager/Color.js
//css 색 넣기

import StarRating from "../starrating/StarRating";
import {FaTrash} from "react-icons/fa"

export default function Color(
  {id,title,color,rating,onRemove=f=>f,onRate=f=>f}){
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={()=>onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{height:50,backgroundColor:color}}
      />
      <StarRating selectedStars={rating}
        onRate={rating=>onRate(id,rating)}/>
    </section>
  )
}

/*lightblue, rgb(100,100,100), #00c4e2
export default function Color(
  {id, title,color,rating, onRemove=f=>f, onRate=f=>f}){ //onRemove=f=>f: onRemove가함수라는것을 알려주기
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={()=>onRemove(id)}>
        <FaTrash/>
      </button>
      <div style={{height:50,backgroundColor:color}}
      />
      <StarRating selectedStars={rating}
      onRate={rating=>onRate(id, rating)}/> {/*두가지 매개변수를 위로 올려보냄*/
   