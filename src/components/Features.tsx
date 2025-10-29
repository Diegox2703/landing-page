import { features } from "../common/constants";

export function Features() {
  return (
    <div className="grid grid-cols-1 gap-20 mt-[140px] md:grid-cols-2 max-w-[920px] mx-auto">
      {
        features.map(feature => (
            <div key={ feature.title } className="flex flex-col items-center text-center">
                <img src={feature.iconUrl} alt={feature.title} />
                <div>
                    <h3 className="font-bold mb-2">{ feature.title }</h3>
                    <p>{ feature.description }</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}
