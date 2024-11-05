import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
function ChapterContent({ chapterIndex }) {
  const [isCollapse, setIsCollapse] = useState(true);
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  const chapterData = [
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 1",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 2",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 3",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 4",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 5",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
  ];
  const selectedChapter = chapterData[chapterIndex] || {};
  return ( 
    <div className="flex flex-col w-full gap-5">
    <div
      className={`p-4 bg-white shadow-md rounded-lg transition-all duration-300 ${
        isCollapse ? "h-32" : "h-auto"
      } w-full md:w-3/4 mx-auto`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="space-y-1 md:mr-4">
          <p className="text-gray-600 text-xs md:text-sm">PART 1</p>
          <h2 className="font-semibold text-custom-blue text-sm md:text-base">
            {selectedChapter.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
          <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
            <img src="/Vectors/ClockOutline.png" alt="" className="h-4 w-4" />
            <span>02:00:00</span>
          </div>
          <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
            <img src="/Vectors/Contest.png" alt="" className="h-4 w-4" />
            <span>Medium</span>
          </div>
          <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
            <img
              src="/Vectors/DocumentDuplicateOutline.png"
              alt=""
              className="h-4 w-4"
            />
            <span>5</span>
          </div>
          <button className="text-gray-600" onClick={toggleCollapse}>
            {isCollapse ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-end mb-1">
          <span className="text-xs md:text-sm text-gray-600 font-semibold border-2 border-blue-200 bg-gray-100 p-[3px] rounded-lg">
            45% Completed
          </span>
        </div>
        <div className="w-full bg-gray-200 ml-[-15px] rounded-full h-1 ">
          <div
            className="bg-custom-blue w-full mt-[14px] h-[5px] rounded-l-md overflow-hidden"
            style={{ width: "45%" }}
          />
        </div>
      </div>

  
      {!isCollapse && (
        <div className="space-y-2">
          {selectedChapter.parts?.map((part, index) => (
            <div key={index} className="space-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-2 hover:bg-gray-100 rounded-md">
                <span className="flex items-center gap-2 text-sm md:text-base">
                  <img
                    src={part.icon}
                    alt=""
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                  <span>{part.title}</span>
                </span>
                <span className="text-gray-500 text-xs md:text-sm mt-1 md:mt-0">
                  {part.time}
                </span>
              </div>
              <div className="flex h-1">
                <div className="w-1/2 bg-gradient-to-r from-white to-gray-200" />
                <div className="w-1/2 bg-gradient-to-r from-gray-200 to-white" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

     <div
     className={`p-4 mt-3 bg-white shadow-md rounded-lg transition-all duration-300  w-full md:w-3/4 mx-auto`}>
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
       <div className="space-y-1 md:mr-4">
         <p className="text-gray-600 text-xs md:text-sm">PART 2</p>
         <h2 className="font-semibold text-custom-blue text-sm md:text-base">
           {selectedChapter.title}
         </h2>
       </div>

       <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img src="/Vectors/ClockOutline.png" alt="" className="h-4 w-4" />
           <span>02:00:00</span>
         </div>
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img src="/Vectors/Contest.png" alt="" className="h-4 w-4" />
           <span>Medium</span>
         </div>
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img
             src="/Vectors/DocumentDuplicateOutline.png"
             alt=""
             className="h-4 w-4"
           />
           <span>12</span>
         </div>
         <button className="text-gray-600" >
             <ChevronDown className="w-4 h-4" />
         </button>
       </div>
     </div>

     <div className="mb-4">
       <div className="flex justify-end mb-1">
         <span className="text-xs md:text-sm text-gray-600 font-semibold border-2 border-blue-200 bg-gray-100 p-[3px] rounded-lg">
           20% Completed
         </span>
       </div>
       <div className="w-full bg-gray-200 mb-[-32px] ml-[-15px] rounded-full h-1">
          <div
            className="bg-custom-blue w-full  h-[5px] rounded-l-lg "
            style={{ width: "20%" }}
          />
        </div>
     </div>
   </div>

   <div
     className={`p-4 mt-3 bg-white shadow-md rounded-lg transition-all duration-300  w-full md:w-3/4 mx-auto`}>
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
       <div className="space-y-1 md:mr-4">
         <p className="text-gray-600 text-xs md:text-sm">PART 3</p>
         <h2 className="font-semibold text-custom-blue text-sm md:text-base">
           {selectedChapter.title}
         </h2>
       </div>

       <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img src="/Vectors/ClockOutline.png" alt="" className="h-4 w-4" />
           <span>02:00:00</span>
         </div>
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img src="/Vectors/Contest.png" alt="" className="h-4 w-4" />
           <span>Medium</span>
         </div>
         <div className="flex items-center text-gray-600 gap-1 text-xs md:text-sm">
           <img
             src="/Vectors/DocumentDuplicateOutline.png"
             alt=""
             className="h-4 w-4"
           />
           <span>12</span>
         </div>
         <button className="text-gray-600" >
             <ChevronDown className="w-4 h-4" />
         </button>
       </div>
     </div>

     <div className="mb-4">
       <div className="flex justify-end mb-1">
         <span className="text-xs md:text-sm text-gray-600 font-semibold border-2 border-blue-200 bg-gray-100 p-[3px] rounded-lg">
           0% Completed
         </span>
       </div>
       <div className="w-full bg-gray-200 mb-[-32px] ml-[-15px] rounded-full h-1">
          <div
            className="bg-custom-blue w-full  h-[5px] rounded-l-md "
            style={{ width: "0%" }}
          />
        </div>
     </div>

  
   </div>
   </div>  
  );
}

export default ChapterContent;
