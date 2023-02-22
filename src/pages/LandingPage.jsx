import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const LandingPage = () => {
  const {data,setIndividual}= useDataContext();

  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-full top-0">
        <svg id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="91%" y1="22%" x2="9%" y2="78%">
              <stop offset="5%" stopColor="#702cc8"></stop>
              <stop offset="95%" stopColor="#335fc8"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 C 0,700 0,350 0,350 C 89.82775119617222,382.78468899521533 179.65550239234443,415.5693779904306 277,415 C 374.34449760765557,414.4306220095694 479.2057416267943,380.50717703349284 589,348 C 698.7942583732057,315.49282296650716 813.5215311004786,284.40191387559804 899,302 C 984.4784688995214,319.59808612440196 1040.7081339712918,385.88516746411483 1126,402 C 1211.2918660287082,418.11483253588517 1325.6459330143541,384.0574162679426 1440,350 C 1440,350 1440,700 1440,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            transform="rotate(-180 720 350)"></path>
        </svg>
      </div>
      <div className="absolute w-2/5 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl shadow-slate-500">
        <div className="bg-neutral-100 h-1/4 rounded-t-3xl flex items-center justify-center outline-none">
          <p className="font-bold text-neutral-600 text-xl tracking-wide drop-shadow-sm">Select an account</p>
        </div>
        <div className="p-2 h-full  bg-white rounded-b-3xl ">
        <div className="h-full bg-white   px-8 overflow-y-scroll scrollbar scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-xl scrollbar-w-[6px] ">
          {data?.map((item)=>(
            <Link key={item.id} to='/home'>
            <div  className="border-b-2 border-neutral-200 flex p-2 cursor-pointer" onClick={()=>{setIndividual(item)}}>
              <img src={item.profilepicture} className="w-8 h-8 rounded-full" alt={item.name} />
              <p className="text-lg font-light text-neutral-600 pl-4">{item.name}</p>
            </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
