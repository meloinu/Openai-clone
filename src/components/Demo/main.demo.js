import React from "react";

const Demo = () => {
  const lists = [
    {
      name: "AskMelo",
      source:
        "",
      color: "#FAAE2B",
    },
    {
      name: "INU·E 2",
      source:
        "",
      color: "#FE98A3",
    },
  ];

  return (
    <>
      <div className="p-2 mt-2">
        {lists.map((list, i) => (
          <>
            <div className="mb-5 mt-5" key={i}>
              <div
                className="border-2 border-black px-3 py-2 rounded-lg"
                style={{
                  boxShadow: "0.4rem 0.4rem 0 #222",
                  backgroundColor: list.color,
                }}
              >
                <div className="window">
                  <div class="titlebar">
                    <div class="buttons">
                      <div class="close w-2.5 h-2.5 md:w-3.5 md:h-3.5">
                        {/* <a class="closebutton" href="#">
                          <span>
                            <strong>x</strong>
                          </span>
                        </a> */}
                      </div>
                      <div class="minimize w-2.5 h-2.5 md:w-3.5 md:h-3.5">
                        {/* <a class="minimizebutton" href="#">
                          <span>
                            <strong>&ndash;</strong>
                          </span>
                        </a> */}
                      </div>
                      <div class="zoom w-2.5 h-2.5 md:w-3.5 md:h-3.5">
                        {/* <a class="zoombutton" href="#">
                          <span>
                            <strong>+</strong>
                          </span>
                        </a> */}
                      </div>
                    </div>
                    <span className="text-xs md:text-base">{list.name}</span>
                  </div>
                  <div className="content mt-2">
                    <video className="w-full max-w-full h-auto" controls>
                      <source src={list.source} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* <h1 className="text-black text-base md:text-2xl mb-2">
                  {list.name}
                </h1> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Demo;
