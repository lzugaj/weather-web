import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import { CurrentResponse, CurrentWeatherResponse, ForecastResponse, LocationResponse } from "../../api/types";
import searchLogo from "../../assets/images/search.png";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Paragraph from "../../components/Paragraph";
import { LocationNameContext } from "../../context/locationContext";
import Daily from "./components/Daily";
import Location from "./components/Location";
import Today from "./components/Today";

export default function Weather() {
  const { locationName, setLocationName } = useContext(LocationNameContext);
  const [forecastWeatherFor3Days, setForecastWeatherFor3Days] = useState<CurrentWeatherResponse>({
    current: {} as CurrentResponse,
    location: {} as LocationResponse,
    forecast: {} as ForecastResponse,
  });

  useEffect(() => {
    getForecastFor3Days();
  }, []);

  const handleChange = (value: string) => {
    setLocationName(value);
  };

  const handleClick = () => {
    getWeather();
  };

  const getWeather = () => {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${locationName}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ea6d11c135mshe825eb090a8a0d0p15a67cjsn67fa30ecf92b",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => setForecastWeatherFor3Days(response))
      .catch((error) => console.error(error));
  };

  const getForecastFor3Days = () => {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${locationName}&days=3`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ea6d11c135mshe825eb090a8a0d0p15a67cjsn67fa30ecf92b",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => setForecastWeatherFor3Days(response))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="w-full rounded-b-3xl bg-nature bg-cover bg-center p-2">
        <div className="w-full">
          <Location location={forecastWeatherFor3Days.location} />
          <Paragraph title="The Only Weather Forecast You Need" styling="mt-5 text-white text-lg" />
          <div className="mt-5 mb-5">
            <Input
              type="text"
              placeholder="Enter city name..."
              styling="bg-zinc-100 indent-2 border-solid border-2 rounded-md mr-2 align-middle"
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
            />
            <Button className="bg-gray-500 p-3 rounded-3xl align-middle">
              <Image src={searchLogo} width={20} height={20} alt="Search" onClick={handleClick} />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full text-left indent-2">
        <div className="w-full">
          <Header title="Today" styling="mt-5 text-2xl font-bold" />
          <Today current={forecastWeatherFor3Days.current} />
        </div>
      </div>
    </>
  );
}
