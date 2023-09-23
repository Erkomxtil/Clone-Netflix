import popCorn from "../assets/popCorn.svg"
import arrowBtn from "../assets/arrowMoreInfo.svg"

export const Banner = () => {
  return (
    <div className="bg-black">
      <div className="bg-[black] text-[white] px-[24px] pt-[16px] mm:flex items-center justify-center backgroundMm">
        <div className="mt-[-50px] scale-[0.8] relative mm:scale-[1] mm:mt-0">
          <img src={popCorn} alt="Icon pop corn" />
        </div>
        <div className="bannerBackground mm:pb-0">
          <p className="text-xl font-[700]">
          Le Netflix que vous aimez pour juste 5,99&nbsp;€.
          </p>
          <p className="font-base mt-[4px] mb-[8px] leading-6 font-[500]">
          Choisissez l'offre Standard avec pub.
          </p>
        <button className="underline text-[#448ef4] flex font-[700]">En savoir plus <img src={arrowBtn} alt="Arrow more info" /></button>
        </div>
      </div>
    </div>
  )
}
