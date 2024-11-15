import React from "react";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div className="text-center w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelines.map((item, index) => (
          <li key={index}>
            {index == 0 && (
              <hr className="mr-2 ml-2 bg-Black" />
            )}
            <div className="timeline-middle mr-2 ml-2 w-5 h-5 bg-black rounded-full flex justify-center items-center m-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start md:text-end"
                  : "timeline-end md:text-start"
              } mb-10`}
            >
              <time className="text-sm italic">1984</time>
              <div className="text-lg font-black">First Macintosh computer</div>
              <div className="">ofvheu</div>
            </div>
              <hr className="mr-2 ml-2 bg-black" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
