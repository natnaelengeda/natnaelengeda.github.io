import { useState } from "react"
import ScaleLoader  from "react-spinners/ClipLoader";

export default function Resume() {
  const [Loading, setLoading] = useState(true);

  return (
    <div className='flex flex-col gap-10 items-center justify-start md:px-20 w-full min-h-screen pt-10'>
      {
        Loading && 
        <div>
           <ScaleLoader  size={100} color="#36d7b7" />
      </div>
      }
      <iframe
      className='w-full h-[85vh]'
       src="https://drive.google.com/file/d/1JPsFngCqRvIbpo71XMM8KYfDKXoxJ-SC/preview"
       allow="autoplay"
       onLoad={()=>setLoading(!Loading)}
       />
    </div>
  )
}
