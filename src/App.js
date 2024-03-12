import logo from "./logo.svg";
import "./App.css";
import REACT_APP_BOOK_API from "./utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaBomb } from "react-icons/fa";
import { TbDiamondFilled } from "react-icons/tb";
import Card from "./components/Card";
function App() {
  const [rand, setRand] = useState(0);
  const [flag, setFlag] = useState(0);
  const [medium, setmedium] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  // const [flag, setFlag] = useState(0);
  const [rem, setrem] = useState(0);
  const [res, setRes] = useState();
  const [winModal, setWinModal] = useState(false);
  // const [res, setRes] = useState();

  function check(index) {
    if (index == rand) {
      setFlag(1);
    }
    setrem(rem - 1);
  }
  useEffect(() => {
    generateRandomNumbers();
  }, [medium]);

  function generateRandomNumbers() {
    var num, i;
    var result = [];
    if (medium == 1) {
      console.log("1");
      for (i = 0; i < 1; i++) {
        while (true) {
          num = Math.floor(Math.random() * 25);
          if (result.includes(num, 0) != true) {
            result.push(num);
            break;
          }
          // console.log(num);
        }
      }
    } else if (medium == 2) {
      console.log("2");
      for (i = 0; i < 3; i++) {
        while (true) {
          num = Math.floor(Math.random() * 25);
          if (result.includes(num, 0) != true) {
            result.push(num);
            break;
          }
          // console.log(num);
        }
      }
    } else if (medium == 3) {
      console.log("3");
      for (i = 0; i < 5; i++) {
        while (true) {
          num = Math.floor(Math.random() * 25);
          if (result.includes(num, 0) != true) {
            result.push(num);
            break;
          }
          // console.log(num);
        }
      }
    }
    console.log(result);
    setRes(result);
  }

  return (
    <div
      className="w-full mt-[0] h-[100svh] bg-[#0f0f0f] flex justify-center items-center text-white flex-col"
      style={{ transition: ".5s" }}
    >
      {flag === 1 ? (
        <div className="w-full h-[100svh] fixed bg-[#0f0f0f96] backdrop-blur-sm flex flex-col justify-center items-center">
          {winModal === true ? (
            <>
              <div className="text-[black] font-[rubik] w-[150px] h-[100px] rounded-lg border-[2px] border-[#40e9f2]">
                <div className="w-full h-[50px] bg-[#40e9f2] flex justify-center items-center text-[20px] ">
                  Won
                </div>
                <div className="w-full h-[50px] text-white  flex justify-center items-center text-[17px] ">
                  Score : 2000
                </div>
              </div>
              <div
                className="w-[150px] h-[50px] rounded-lg bg-[#40e9f2] hover:bg-[#45c4cb]  text-[black] mt-[15px] cursor-pointer text-[17px] font-[rubik] flex justify-center items-center"
                onClick={() => {
                  setmedium(0);
                  setRes();
                  setGameStart(false);
                  setFlag(0);
                  setWinModal(false);
                  setrem(0);
                }}
              >
                Replay
              </div>
            </>
          ) : (
            <>
              <div className="text-[black] font-[rubik] w-[150px] h-[100px] rounded-lg border-[2px] border-[orange]">
                <div className="w-full h-[50px] bg-[orange] flex justify-center items-center text-[20px] ">
                  Game Over
                </div>
                <div className="w-full h-[50px] text-white  flex justify-center items-center text-[17px] ">
                  Score : {rem * 100}
                </div>
              </div>
              <div
                className="w-[150px] h-[50px] rounded-lg bg-[orange] hover:bg-[#cf7f3d]  text-[black] mt-[15px] cursor-pointer text-[17px] font-[rubik] flex justify-center items-center"
                onClick={() => {
                  setmedium(0);
                  setRes();
                  setGameStart(false);
                  setFlag(0);
                  setWinModal(false);
                  setrem(0);
                }}
              >
                Replay
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}

      <div
        className="w-full h-[260px] flex justify-center items-center flex-col  pt-[20px] "
        style={{ transition: ".5s" }}
      >
        <div className="text-white text-[50px] font-[rubik] font-bold flex justify-center items-end h-[60px] ">
          <FaBomb className="text-[70px] mb-[19px]" />
          <span className="h-full flex justify-start items-end ">MINE IT</span>
        </div>
        {gameStart === true ? (
          <div className="flex justify-center items-center font-[rubik] mt-[5px] text-[#c5c5c5]">
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 1 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#c5c5c5] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(1);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#c5c5c5]"></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[2px] border-[#c5c5c5] mr-[6px]"
                    // onClick={() => {
                    //   setmedium(1);
                    //   generateRandomNumbers();
                    //   setGameStart(true);
                    // }}
                  ></div>
                </>
              )}
              Easy
            </div>
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 2 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#c5c5c5] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(2);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#c5c5c5]"></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[2px] border-[#c5c5c5] mr-[6px]"
                    // onClick={() => {
                    //   setmedium(2);
                    //   generateRandomNumbers();
                    //   setGameStart(true);
                    // }}
                  ></div>
                </>
              )}
              Medium
            </div>
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 3 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#c5c5c5] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(3);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#c5c5c5]"></div>
                  </div>
                </>
              ) : (
                <div
                  className="rounded-full w-[17px] h-[17px] border-[2px] border-[#c5c5c5] mr-[6px]"
                  // onClick={() => {
                  //   setmedium(3);
                  //   generateRandomNumbers();
                  //   setGameStart(true);
                  // }}
                ></div>
              )}
              Hard
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center font-[rubik] mt-[5px]">
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 1 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#ffffff] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(1);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#ffffff]"></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[2px] border-[#ffffff] mr-[6px]"
                    onClick={() => {
                      setmedium(1);
                      generateRandomNumbers();
                      setGameStart(true);
                    }}
                  ></div>
                </>
              )}
              Easy
            </div>
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 2 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#ffffff] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(2);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#ffffff]"></div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[2px] border-[#ffffff] mr-[6px]"
                    onClick={() => {
                      setmedium(2);
                      generateRandomNumbers();
                      setGameStart(true);
                    }}
                  ></div>
                </>
              )}
              Medium
            </div>
            <div className="flex justify-center items-center text-[17px] mx-[10px]">
              {medium === 3 ? (
                <>
                  <div
                    className="rounded-full w-[17px] h-[17px] border-[1.5px] border-[#ffffff] flex justify-center items-center mr-[6px]"
                    // onClick={() => {
                    //   setmedium(3);
                    //   generateRandomNumbers();
                    // }}
                  >
                    <div className="w-[11px] h-[11px] rounded-full bg-[#ffffff]"></div>
                  </div>
                </>
              ) : (
                <div
                  className="rounded-full w-[17px] h-[17px] border-[2px] border-[#ffffff] mr-[6px]"
                  onClick={() => {
                    setmedium(3);
                    generateRandomNumbers();
                    setGameStart(true);
                  }}
                ></div>
              )}
              Hard
            </div>
          </div>
        )}
        {medium !== 0 ? (
          <div className="flex flex-col w-[60%] justify-center items-center font-[rubik] text-[#c5c5c5] text-[15px] mt-[15px] ">
            <span>Try to find all the diamonds</span>
            <span>
              There are {medium === 1 ? <>1</> : medium === 2 ? <>3</> : <>5</>}{" "}
              Bombs
            </span>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-[60%] justify-center items-center font-[rubik] text-[#c5c5c5] text-[15px] mt-[15px] ">
              <span>-- Information --</span>
              <span>Easy = 1 Bomb</span>
              <span>Medium = 3 Bombs</span>
              <span>Hard = 5 Bombs</span>
            </div>
          </>
        )}
      </div>
      {gameStart === true ? (
        <>
          <div
            className="w-[350px] mt-[30px]  h-[350px]  md:w-[450px] lg:w-[450px]  flex justify-center items-center flex-wrap "
            style={{ transition: ".5s" }}
          >
            {Array(25)
              .fill(" ")
              .map((e, index) => {
                return (
                  <>
                    <Card
                      index={index}
                      rand={rand}
                      setOne={setFlag}
                      setTwo={setrem}
                      rem={rem}
                      res={res}
                      modal={setFlag}
                      win={setWinModal}
                      medium={medium}
                    />
                  </>
                );
              })}
          </div>
          <div
            className="w-full h-[calc(100%-640px)]  flex justify-center items-center "
            style={{ transition: ".5s" }}
          >
            <button
              className=" outline-none opacity-100 rounded-lg h-[50px] w-[100px] bg-[orange] text-black text-[17px] font-[rubik]"
              style={{ transition: ".3s", transitionDelay: ".5s" }}
              onClick={() => {
                setmedium(0);
                setRes();
                setGameStart(false);
                setFlag(0);
                setWinModal(false);
                setrem(0);
              }}
            >
              Restart
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[350px] mt-[40px]  h-[0]  md:w-[450px] lg:w-[450px]  flex justify-center items-center flex-wrap "
            style={{ transition: ".5s" }}
          ></div>
          <div
            className="w-full h-[0] flex justify-center items-center"
            style={{ transition: ".5s" }}
          >
            <button
              className=" outline-none opacity-0 rounded-lg h-[50px] w-[100px] bg-[orange] text-black text-[17px] font-[rubik]"
              onClick={() => {
                setmedium(0);
                setRes();
                setGameStart(false);
                setFlag(0);
                setWinModal(false);
                setrem(0);
              }}
            >
              Restart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
