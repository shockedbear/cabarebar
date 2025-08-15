import { BARDATA } from "@/data/bar.data"
import { BarCard } from "@/components/BarCard"

export function FullBar() {
    return(
        <div className="max-w-5xl mx-auto mt-10">
             <div className="mx-6">
               <h1  data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="1500" className="text-center text-white text-5xl lg:text-6xl font-cactus-classical">БАР</h1>
               <h2  data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="1500" className="text-white text-center text-3xl mt-5 mb-10 font-cactus-classical">Авторские коктейли</h2>
       
               <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5 gap-y-8  lg:gap-10">
                 {BARDATA.map((item, index) => (
                   <BarCard key={index} img={item.img} />
                 ))}
               </div>
       
               
             </div>
           </div>
    )
}