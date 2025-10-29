import { testimonials } from "../common/constants"
import { TestimonialCard } from "./TestimonialCard"

export function Testimonials() {
  return (
    <div className="relative flex flex-col gap-6 items-center pt-6 w-[280px] md:w-[480px] mx-auto xl:flex-row xl:w-[920px]">
      <img className="size-6 absolute top-0 left-8" src="/images/bg-quotes.png" alt="bg-quotes" />
      {
        testimonials.map(testimonial => (
            <TestimonialCard 
                {...testimonial}
                key={ testimonial.name }
            />
        ))
      }
    </div>
  )
}
