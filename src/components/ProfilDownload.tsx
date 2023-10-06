interface ProfilDownloadProps {
  downloadGif: boolean
  title: string
  text: string
  mainImage: string
  altText: string
  secondImage?: string
  secondAltText?: string
  extraText1?: string
  extraText2?: string
  gif?: string
  gifAlt?: string
}

export const ProfilDownload = ({ downloadGif,mainImage, title, altText,secondImage, text, secondAltText, extraText1, extraText2,gif, gifAlt}:ProfilDownloadProps) => {
  return (
    <div className="borderSection bg-black">
      <div className={!downloadGif ? 
        " text-[white] py-[56px] px-[32px] sm:py-[72px] md:flex md:items-center md:max-w-[calc(83.33333333333334%-6rem)] md:mx-[auto] xxl:max-w-[calc(66.66666666666666%-6rem)] xxl:mx-[auto]": 
        "text-[white] py-[56px] px-[32px] sm:py-[72px] md:flex md:flex-row-reverse md:items-center md:max-w-[calc(83.33333333333334%-6rem)] md:mx-[auto] xxl:max-w-[calc(66.66666666666666%-6rem)] xxl:mx-[auto]"}>
        <div className="text-center md:basis-[50%]">
          <h2 className="text-[2rem] font-[700] leading-[2.5rem] md:text-[3rem] md:font-[900] md:text-left md:leading-[3rem]">{title}</h2>
          <p className="mt-[1rem] text-[1.125rem] md:text-[1.5rem] md:text-left">{text}</p>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <img className="w-max" src={mainImage} alt={altText} />
        {
          downloadGif && 
          <div className="flex border-2 border-solid border-[#232323] items-center px-[0.75rem] py-[0.35rem] rounded-lg absolute bg-black bottom-[8%] min-w-[17rem] w-[60%] sm:w-[45%] md:w-[60%]">
            <img className="h-[3rem] mr-[1rem] shrink-0 flex-grow-0 sm:h-[4rem]" src={secondImage} alt={secondAltText} />
            <p className="leading-none shrink-1 grow">
              <span className="text-[0.875rem] font-[700]">{extraText1}</span>
              <br />
              <span className="text-[0.75rem] text-[#0071eb]">{extraText2}</span>
            </p>
            <img className="h-[3rem] w-[3rem] shrink-0 flex-grow-0" src={gif} alt={gifAlt} />
          </div>
        }
        </div>
      </div>
    </div>
  )
}
