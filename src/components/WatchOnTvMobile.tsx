import { WatchOnTvMobileProps } from "../shared/interfaces/watchOnTvMobile.interface"

export const WatchOnTvMobile = ({tvVideo,title, text, video, image}:WatchOnTvMobileProps) => {
  
  return (
    <div className={tvVideo ? "bg-black py-[56px] sm:py-[72px]": "borderSection bg-black py-[56px] sm:py-[72px]" }>
      <div className={tvVideo ? 
      "px-[24px] text-[white] text-center justify-center md:flex md:max-w-[calc(100%-4rem)] md:mx-[auto] md:items-center md:text-left md:p-0 lg:max-w-[calc(83.33333333333334%-6rem)] xxl:max-w-[calc(66.66666666666666%-6rem)]": 
      "px-[24px] text-[white] text-center justify-center md:flex md:flex-row-reverse md:max-w-[calc(100%-4rem)] md:mx-[auto] md:items-center md:text-left md:p-0 lg:max-w-[calc(83.33333333333334%-6rem)] xxl:max-w-[calc(66.66666666666666%-6rem)]"
      }>
        <div className="md:basis-[50%]">
          <h2 className="text-[2rem] font-[700] m-0 md:font-[900] md:text-[3rem] md:leading-[3.5rem]">{title}</h2>
          <p className="font-[400] text-[1.125rem] mt-[1rem] md:text-[1.5rem]">{text}</p>
        </div>
        <div className="relative md:basis-[50%] flex justify-center">
          <img className="z-10 relative" alt="Tv" src={image} />
          <div className={tvVideo ? 
          "overflow-hidden absolute top-[20%]  border-black border-2": 
          "overflow-hidden absolute top-[10%]  border-black border-2 w-[100%] max-w-[64%] mm:max-w-[400px] md:max-w-[64%] xl1:max-w-[400px]"
          }>
            { tvVideo ?
              <video width="480" height="270" autoPlay playsInline muted loop className="inline-block !scale-[none]">
                <source src={video} type="video/mp4"/>
                your browser does not support the video tag. I suggest to upgrade your browser
              </video>
              :
              <video width="480" height="270" autoPlay playsInline muted loop >
              <source src={video} type="video/mp4"/>
              your browser does not support the video tag. I suggest to upgrade your browser
              </video>            
            }
          </div>
        </div>
      </div>
    </div>
  )
}
