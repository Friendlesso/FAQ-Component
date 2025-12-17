import { questions } from "../data/questions";
import PlusIcon from "../assets/icons/icon-plus.svg"
import MinusIcon from "../assets/icons/icon-minus.svg"
import { useState } from "react";

export function Questions() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-5">
      {questions.map(({ title, question }, index) => {

        const isActive = active === index;

        return (
          <div key={index} className="border-b-2 border-b-(--card-border-color) relative overflow-hidden pb-3">
            <div className="flex justify-between relative">
              <h1
                className="font-[WorkSans] text-(--card-h-color) font-semibold cursor-pointer transition-colors duration-150 hover:text-(--card-hover-color)"
                onClick={() => {
                  setActive(isActive ? null : index);
                  console.log(isActive)
                }}
              >
                {title}
              </h1>
              <img
                className="cursor-pointer"
                src={isActive ? MinusIcon : PlusIcon}
                alt="Plus icon"
                onClick={() => {
                  setActive(isActive ? null : index);
                  console.log(isActive)
                }}
              />
            </div>
            <div className=
              {`overflow-hidden transition-all duration-300 ease-in-out
                  ${isActive
                  ? 'max-h-70 opacity-100 mt-3'
                  : 'max-h-0 opacity-0'
                }
                `}>
              <p className="font-[WorkSans] w-[80%] px-2 text-(--card-p-color)">
                {question}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}