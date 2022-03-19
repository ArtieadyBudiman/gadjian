import HeadBar from './HeadBar';
import CardUser from './Card';
import Loading from './Loading';
import CardMini from './MiniCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Content = (props)=>{
   const loading = props.loading;
   console.log(loading);
   return(
      <div className="d-flex flex-column mx-4 my-4">
         <HeadBar/>
         {loading ? (
            <div>
               <Loading/>
            </div>
         ):(
            <>
            <div className="cardWrapper mt-4 my-4">
               <Swiper
                   modules={[Navigation]}
                   navigation={{
                     nextEl: '.btn-next',
                     prevEl: '.btn-prev',
                   }}
                   spaceBetween={30}
                   slidesPerView={4}
                   slidesPerGroup={4}
               >
                  {props.user.map((data,index)=>{return(
                  <SwiperSlide key={index}>
                     <CardUser data={data}/>
                  </SwiperSlide>
                  )})}
               </Swiper>      
            </div>
            <div className="pagination justify-content-evenly">
               <button className="btn-prev d-flex border-0 bg-transparent">
                  <span className="material-icons">arrow_back_ios</span>
                  <span className="mb-0">Previous</span>
               </button>
               <button className="btn-next d-flex border-0 bg-transparent">
                  <span className="mb-0">Next</span>
                  <span className="material-icons">arrow_forward_ios</span>
               </button>
            </div>
            <div className="miniCard">
            {props.user.map((data,index)=>{return(
               <div key={index}>
                  <CardMini data={data}/>
               </div>
            )})}
            </div>
            </>
         )}
      </div>
   )
}

export default Content;