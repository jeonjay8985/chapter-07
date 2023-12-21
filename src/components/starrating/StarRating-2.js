// src/components/starrating/StarRating.js
import Star from "./Star"
//상태를 리액트 함수 컴포넌트에 넣을 때는 훅스(Hooks)라고
//부르는 리액트 기능을 사용

const createArray=length=>[...Array(length)]

export default function StarRating(
    {totalStars=5,selectedStars=0,onRate=f=>f}){
  return (
    <>
      {createArray(totalStars).map((n,i)=>
        <Star 
          key={i}
          selected={i<selectedStars}
          onSelect={()=>onRate(i+1)}
        />)}
      <p>{selectedStars}/{totalStars}</p>
    </>
  )
}