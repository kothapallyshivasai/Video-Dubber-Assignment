import React from 'react';

const PlanOptions = () => {
  return (
    <div>
      <div className="mt-12 flex flex-col gap-3 pl-9 pr-9">
        {/* Container for image, text, and buttons in a single row */}
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-2">
            <div data-test="post-promo-code" className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16" className="styles_icon__HlV9y">
                <path fill="#F64900" d="M15.333 3.333h-1.596c.16-.317.25-.666.263-1.022A2.4 2.4 0 0 0 11.555 0 4.14 4.14 0 0 0 8 2.345 4.12 4.12 0 0 0 4.467 0H4.39A2.396 2.396 0 0 0 2 2.311v.044c.013.34.1.674.253.978H.667A.667.667 0 0 0 0 4v2c0 .368.298.667.667.667h14.666A.667.667 0 0 0 16 6V4a.667.667 0 0 0-.667-.667m-3.757-2a1.067 1.067 0 0 1 1.09.978 1.06 1.06 0 0 1-1.05 1.022h-2.63c.414-.839 1.239-2 2.59-2m-8.243 1a1.067 1.067 0 0 1 1.076-1c1.38.006 2.188 1.154 2.607 2h-2.6a1.077 1.077 0 0 1-1.083-1m6 5.667v8h3.334a2 2 0 0 0 2-2V8zM6.667 8H1.333v6a2 2 0 0 0 2 2h3.334z"></path>
              </svg>
              <button type="button" className="text-left text-16 font-normal text-orange-500">2 months free annually</button>
            </div>
            <div className="text-16 font-normal text-light-gray">•</div>
            <div className="text-16 font-normal text-light-gray" data-test="pricing-type">Free Options</div>
          </div>
          {/* Buttons aligned in a row */}
          <div className="flex flex-row gap-2 text-16 text-light-gray">
            <button className="textButton_textButton__SIhmH flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path stroke="#4B587C" strokeLinejoin="round" strokeLinecap="round" d="m9.356 12.244-.925 1.543a.506.506 0 0 1-.862 0l-.925-1.543A.5.5 0 0 0 6.219 12H2.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H9.781a.5.5 0 0 0-.425.244"></path>
              </svg>
              Discuss
            </button>
            <button className="textButton_textButton__SIhmH flex items-center gap-1" data-test="collection-product-597701-collect-text" aria-label="Add to Collection">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" fill="none">
                <path stroke="#4B587C" strokeLinejoin="round" strokeLinecap="round" d="M9 12 5 9.5 1 12V1a.5.5 0 0 1 .5-.5h7A.5.5 0 0 1 9 1z"></path>
              </svg>
              Collect
            </button>
            <button className="textButton_textButton__SIhmH flex items-center gap-1" data-test="share-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path stroke="#4B587C" strokeLinejoin="round" strokeLinecap="round" d="M5.375 4.29 8 1.668l2.625 2.624M8.002 8.667V1.668M11 6.667h1.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-6.5a.5.5 0 0 1 .5-.5H5"></path>
              </svg>
              Share
            </button>
            <button className="textButton_textButton__SIhmH flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path stroke="#4B587C" strokeLinejoin="round" strokeLinecap="round" d="M2.75 13V8.5h3.5m8 4.5H1.75m4.5 0V5.5h3.5m3.5-3h-3.5V13h3.5z"></path>
              </svg>
              Stats
            </button>
          </div>
        </div>
        <div className="styles_htmlText__eYPgj text-16 font-normal text-dark-gray">
          Translate video in one click with AI to 150+ languages & accents in original voice. Prime features:
          1. 0.1 USD/min for premium video translation with voice cloning
          2. Unlimited Editing
          3. Exports MP4/SRT/MP3
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <div className="text-16 font-normal text-light-gray">
            Launched in 
            <a className="styles_reset__0clCw styles_blank__ZZrxq" href="/topics/saas">
              <div className="inline-block shrink-0 self-start whitespace-nowrap rounded-[20px] px-2 lg:rounded-[12px] bg-light-sky styles_topicItem__yQEki">
                <div>
                  <span className="text-12 font-semibold text-dark-gray text-dark-gray">SaaS</span>
                </div>
              </div>
            </a> 
            <a className="styles_reset__0clCw styles_blank__ZZrxq" href="/topics/artificial-intelligence">
              <div className="inline-block shrink-0 self-start whitespace-nowrap rounded-[20px] px-2 lg:rounded-[12px] bg-light-sky styles_topicItem__yQEki">
                <div>
                  <span className="text-12 font-semibold text-dark-gray text-dark-gray">Artificial Intelligence</span>
                </div>
              </div>
            </a> 
            <a className="styles_reset__0clCw styles_blank__ZZrxq" href="/topics/video">
              <div className="inline-block shrink-0 self-start whitespace-nowrap rounded-[20px] px-2 lg:rounded-[12px] bg-light-sky styles_topicItem__yQEki">
                <div>
                  <span className="text-12 font-semibold text-dark-gray text-dark-gray">Video</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanOptions;