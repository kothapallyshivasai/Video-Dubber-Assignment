import Image from 'next/image';

const SlideImage = () => {
  return (
    <div className="flex flex-1 flex-row items-center justify-center mt-10 gap-6 ml-9 mr-9 w-full xl:w-10/12 xl:ml-1/12">
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="relative text-left text-16 font-normal text-dark-gray"
          aria-label="VideoDubber - Fast Video Translator gallery media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="34"
            fill="none"
            viewBox="0 0 35 34"
            className="absolute top-0 left-0"
          >
            <g filter="url(#PlayVideo_svg__a)">
              <path
                fill="#fff"
                d="m29.038 15.287-18-10.987a1.94 1.94 0 0 0-2.013-.038A1.98 1.98 0 0 0 8 6v22a1.97 1.97 0 0 0 1.025 1.738 1.94 1.94 0 0 0 2.012-.038l18-10.988a2 2 0 0 0 0-3.425z"
              />
            </g>
            <defs>
              <filter
                id="PlayVideo_svg__a"
                width="30.004"
                height="34.002"
                x="4"
                y="-0.001"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_709_3590" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_709_3590" result="shape" />
              </filter>
            </defs>
          </svg>
          <Image
            src="https://ph-files.imgix.net/9c7cc361-6de9-49dc-b3b0-a5fb8e34be96.jpeg?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=391&amp;h=220&amp;fit=max"
            alt="VideoDubber - Fast Video Translator gallery image"
            width={391}
            height={220}
            className="w-[391px] h-[220px] object-cover"
          />
        </button>

        <button
          type="button"
          className="relative text-left text-16 font-normal text-dark-gray"
          aria-label="VideoDubber - Fast Video Translator gallery media"
        >
          <Image
            src="https://ph-files.imgix.net/1c66dfc8-ebbc-4fa8-b8ac-5136c0958763.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=406&amp;h=220&amp;fit=max"
            alt="VideoDubber - Fast Video Translator gallery image"
            width={406}
            height={220}
            className="w-[406px] h-[220px] object-cover"
          />
        </button>

        <button
          type="button"
          className="relative text-left text-16 font-normal text-dark-gray"
          aria-label="VideoDubber - Fast Video Translator gallery media"
        >
          <Image
            src="https://ph-files.imgix.net/8ce9557d-9614-44e2-b7ed-1402494ebfe5.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=392&amp;h=220&amp;fit=max"
            alt="VideoDubber - Fast Video Translator gallery image"
            width={392}
            height={220}
            className="w-[392px] h-[220px] object-cover"
          />
        </button>

        <button
          type="button"
          className="relative text-left text-16 font-normal text-dark-gray"
          aria-label="VideoDubber - Fast Video Translator gallery media"
        >
          <Image
            src="https://ph-files.imgix.net/ffe9e4a9-cbfd-4b56-ade7-91a129ccfdb4.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=398&amp;h=220&amp;fit=max"
            alt="VideoDubber - Fast Video Translator gallery image"
            width={398}
            height={220}
            className="w-[398px] h-[220px] object-cover"
          />
        </button>

        <button
          type="button"
          className="relative text-left text-16 font-normal text-dark-gray"
          aria-label="VideoDubber - Fast Video Translator gallery media"
        >
          <Image
            src="https://ph-files.imgix.net/7443cf87-a24b-475e-9c94-78436a41c04a.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=396&amp;h=220&amp;fit=max"
            alt="VideoDubber - Fast Video Translator gallery image"
            width={396}
            height={220}
            className="w-[396px] h-[220px] object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default SlideImage;