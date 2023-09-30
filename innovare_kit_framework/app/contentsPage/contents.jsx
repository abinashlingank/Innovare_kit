import React from "react";

export default function contents() {
  const contentsArray = [
    {
      chapter: "Chapter: 1",
      title: "Introduction to AI",
      progress: "100",
    },
    {
      chapter: "Chapter: 2",
      title: "What is ML?",
      progress: "100",
    },
    {
      chapter: "Chapter: 3",
      title: "Building SL",
      progress: "13",
    },
    {
      chapter: "Misceleneous",
      title: "Getting to know us",
      progress: "0",
    },
  ];
  return (
    <>
      <div className="contents-wrapper" bgColor="red">
        <div className="header">
          <div className="kit-title">Neonix AI Learner Kit</div>
          <div className="progress progress-percent">
            <span className="numeric-progress">80</span>%
          </div>
        </div>
        <div className="contents-area">
          {contentsArray.forEach((ele) => {
            <div className="content" key={crypto.randomUUID()}>
              <div className="chapter-name" key={crypto.randomUUID()}>
                {ele.chapter}
              </div>
              <div className="chapter-title" key={crypto.randomUUID()}>
                {ele.title}
              </div>
              <div className="chapter-progress" key={crypto.randomUUID()}>
                {ele.progress}%
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
