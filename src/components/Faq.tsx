import StarIcon from '../assets/icons/icon-star.svg'
import { Questions } from './Questions'

export function Faq() {
  
  return(
    <section className='flex flex-col gap-5 bg-(--card-bg-color) max-w-[95vw]  w-3xl p-6 rounded-[1.250rem]'>
      <div className='flex gap-1'>
        <img src={StarIcon} alt="Star icon" />
        <h1 className='font-[WorkSans] font-bold text-4xl text-(--card-h-color)'>FAQs</h1>
      </div>
      <Questions />
    </section>
  )
}