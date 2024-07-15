import React, { useEffect, useState } from "react";
import banner1 from "../asset/banner1.svg";
import bannerKarat from "../asset/bannerKarat.svg";
import bannerPure from "../asset/bannerPure.svg";
import bannerSecure from "../asset/bannerSecure.svg";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function Banner() {
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(0);
  const [timeDifference, setTimeDifference] = useState(0);
  const calculateTimeLeft = (data) => {
    let currentTime = new Date().getTime();
    let validExpire = new Date(data?.rate_validity).getTime();
    let difference = validExpire - currentTime;
    let leftTime = Math.max(Math.floor(difference / 1000), 0);

    return leftTime;
  };
  const getGoldPrice = async () => {
    try {
      let response = await axios.get(
        `https://partners-staging.safegold.com/v1/buy-price`,
        {
          headers: {
            Authorization: "Bearer 038bb7f7dbbb92ef41d56fdd88030f1c",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setTimeDifference(calculateTimeLeft(response.data));
      setData(response.data);
    } catch (error) {
      console.error("Error fetching the gold price:", error);
    }
  };

  useEffect(() => {
    getGoldPrice();
  }, []);

  useEffect(() => {
    if (data) {
      setTimer(calculateTimeLeft(data));
      const timer = setInterval(() => {
        setTimer(calculateTimeLeft(data));
      }, 1000);

      const fetchTimer = setInterval(() => {
        getGoldPrice();
      }, timeDifference * 1000);

      return () => {
        clearInterval(timer);
        clearInterval(fetchTimer);
      };
    }
  }, [data]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="box-container row py-lg-5 py-4 banner">
      <div className="col-lg-6 px-4 px-lg-5">
        <div>
          <img src={banner1} />
        </div>
        <h1 className="py-5 text-white">
          Start saving in Gold with <span className="text-warning"> ₹ 10</span>
        </h1>
        <div className="d-flex ">
          <div className="pe-3 ">
            <img src={bannerSecure} />
            <span className="ms-2 primaryLight">100% Secure</span>
          </div>
          <div className="border-end  border-start px-3">
            <img src={bannerKarat} />
            <span className="ms-2 primaryLight">24 Karat</span>
          </div>
          <div className="px-3 ">
            <img src={bannerPure} />
            <span className="ms-2 primaryLight">99.95% Pure Gold</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-5 px-4 px-lg-0">
        <div className="p-lg-5 p-3 goldContainer">
          <div className="text-white ">Enter Gold Amount</div>

          <Form.Control
            className="w-100 mt-lg-4 mt-3 fs-2"
            placeholder="₹"
            autoFocus
          ></Form.Control>

          <div className=" d-flex align-items-center live-container py-1 px-2 mt-4 ">
            <span className="text-danger liveBtn"> LIVE</span>
            <div className="d-flex w-100 justify-content-between px-2 ">
              <div className="text-white goldPrice">
                Buy Price:{" "}
                <strong className="">{data?.current_price}/gm</strong>
              </div>
              <div className="text-white goldPrice">
                Valid for: {formatTime(timer)}
              </div>
            </div>
          </div>
          <Button className="bannerBtn w-100 mt-3">
            Rate id : {data?.rate_id}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
