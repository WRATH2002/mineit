import React, { useEffect, useState } from "react";
import { FaBomb } from "react-icons/fa";
import { TbDiamondFilled } from "react-icons/tb";
const Card = (props) => {
  useEffect(() => {
    var i = 0;
    console.log(props.index);
    // console.log(props.index == props.res?.includes(props.index, 0));
    console.log(props.res);
    if (props?.res) {
      for (i = 0; i < 5; i++) {
        if (props.index == props?.res[i]) {
          setpre(true);
        }
      }
    }
  }, [props.res]);
  function checkBomb(index) {
    // if (index == props.rand) {
    props.setOne(1);
    // }
    // props.setTwo(props.rem - 1);
  }
  function countScore(index) {
    if (props.medium == 1) {
      if (props.rem + 1 === 24) {
        props.modal(1);
        props.win(true);
      } else {
        props.setTwo(props.rem + 1);
      }
    } else if (props.medium == 2) {
      if (props.rem + 1 === 22) {
        props.modal(1);
        props.win(true);
      } else {
        props.setTwo(props.rem + 1);
      }
    } else if (props.medium == 3) {
      if (props.rem + 1 === 20) {
        props.modal(1);
        props.win(true);
      } else {
        props.setTwo(props.rem + 1);
      }
    }

    // if (index == props.rand) {

    // }
    // props.setTwo(props.rem - 1);
  }
  const [hidden, setHidden] = useState(false);
  const [pre, setpre] = useState(false);
  return (
    <>
      {pre === true ? (
        <>
          <div className=""></div>
          {hidden === true ? (
            <div
              className=" rounded-xl flex justify-center items-center bg-[#272727] border-[2px] border-[orange] w-[60px] md:w-[70px] lg:w-[70px] h-[60px] md:h-[70px] lg:h-[70px] m-[5px] "
              onClick={() => {
                // check(props.index);
                // checkBomb(props.index);
                // setHidden(true);
              }}
            >
              <FaBomb className="text-[30px] text-[orange]" />
            </div>
          ) : (
            <div
              className=" rounded-xl flex justify-center items-center hover:border-[2px] cursor-pointer hover:border-[#464646] bg-[#272727] w-[60px] md:w-[70px] lg:w-[70px] h-[60px] md:h-[70px] lg:h-[70px] m-[5px]  "
              onClick={() => {
                checkBomb(props.index);
                setHidden(true);
              }}
            >
              {/* <FaBomb className="text-[30px] text-[orange]" /> */}
            </div>
          )}
        </>
      ) : (
        <>
          {hidden === true ? (
            <div
              className=" rounded-xl flex justify-center items-center bg-[#272727] border-[2px] border-[#40e9f2] w-[60px] md:w-[70px] lg:w-[70px] h-[60px] md:h-[70px] lg:h-[70px] m-[5px]  "
              onClick={() => {
                // check(props.index);
              }}
            >
              <TbDiamondFilled className="text-[30px] text-[#40e9f2]" />
            </div>
          ) : (
            <div
              className=" rounded-xl flex justify-center items-center hover:border-[2px] cursor-pointer hover:border-[#464646] bg-[#272727] w-[60px] md:w-[70px] lg:w-[70px] h-[60px] md:h-[70px] lg:h-[70px] m-[5px]  "
              onClick={() => {
                countScore(props.index);
                setHidden(true);
              }}
            >
              {/* <TbDiamondFilled className="text-[30px] text-[#40e9f2]" /> */}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Card;
