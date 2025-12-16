import { questions } from "../data/questions";
import PlusIcon from "../assets/icons/icon-plus.svg"

export function Questions() {
  return (
    <div className="flex flex-col gap-5">
      {questions.map(({ title, question }) => (
        <div className="border-b-2 border-b-(--card-border-color) pb-3">
          <div className="flex justify-between relative">
            <h1 className="font-[WorkSans] text-(--card-h-color) font-semibold cursor-pointer transition-colors duration-150 hover:text-(--card-hover-color)">{title}</h1>
            <img className="cursor-pointer" src={PlusIcon} alt="Plus icon" />
          </div>
          <p className="absolute hidden">{question}</p>
        </div>
      ))}
    </div>
  )
}