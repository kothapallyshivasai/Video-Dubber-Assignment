import React from 'react';

const VideoDubberComponent = () => {
  return (
    <div className="flex ml-9 flex-col gap-3">
      <div className="flex flex-row">
        <img
          loading="lazy"
          srcSet="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=72&amp;h=72&amp;fit=crop&amp;dpr=1 1x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=72&amp;h=72&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=72&amp;h=72&amp;fit=crop&amp;dpr=3 3x"
          src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=72&amp;h=72&amp;fit=crop"
          alt="VideoDubber - Fast Video Translator"
          className="w-18 h-18"
        />
        <div className="flex flex-1 flex-row items-start justify-end"></div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-24 font-bold text-dark-gray">
            VideoDubber - Fast Video Translator
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z"></path>
              </svg>
          </h1>
          <h2 className="text-24 font-light text-light-gray">
            Translate videos in your own voice, globalize in a click!
          </h2>
        </div>
        <div className="flex flex-row items-end gap-3">
          <button
            type="button"
            className="bg-transparent border border-gray-300 text-dark-gray font-semibold py-2 px-4 rounded"
          >
            Visit
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" className="ml-1">
              <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="bg-transparent border border-gray-300 text-dark-gray font-semibold py-2 px-4 rounded flex items-center"
          >
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" className="mr-1">
                <path fillRule="evenodd" d="M9 8H0l4.5-8z"></path>
              </svg>
              Upvoted 129
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDubberComponent;
