import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isAnserShowing, setIsAnserShowing] = useState(false)
  return (
    <article className="faq" onClick={()=>setIsAnserShowing((prev) => !prev)}>
      <div>
        <h4> {question} </h4>
        <button className="faq__icon">
          {
            isAnserShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {isAnserShowing && <p> {answer} </p>}
    </article>
  )
}

export default FAQ