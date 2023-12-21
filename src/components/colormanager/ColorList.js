//ColorList.js
import Color from "./Color"

export default function ColorList(
  {colors=[],onRemoveColor=f=>f,onRateColor=f=>f}){
  if(!colors.length) return <div>표시할 색이 없습니다.</div>
  return (
    <div>
      {colors.map(color=><Color 
        key={color.id} {...color}
        onRemove={onRemoveColor}
        onRate={onRateColor}
      />)}
    </div>
  )
}

/*
export default function ColorList(
  {colors=[], onRemoveColor=f=>f, onRateColor=f=>f}){//위로 올려보낼 매개변수(함수) 정하기
  if(!colors.length) return <div>표시할 색이 없습니다.</div>
  return (
    <div>
      {colors.map(color=><Color //*최종 도착점 map
      key={color.id}{...color}
      onRemove={onRemoveColor}
      onRate={onRateColor}/>)} {/*onRateColor를 위로 올려보낸다*/
