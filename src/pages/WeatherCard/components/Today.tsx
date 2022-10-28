import React from "react";

import { CurrentResponse } from "../../../api/types";
import Image from "../../../components/Image";
import Paragraph from "../../../components/Paragraph";

type TodayProps = {
  current: CurrentResponse;
};

export default function Today({ current }: TodayProps) {
  return (
    <>
      <div className="flex divide-x divide-solid rounded-3xl shadow-2xl bg-violet-300 m-1 z-10 bg-violet-200">
        <div className="w-1/2 p-1 m-auto">
          <Paragraph title={`${current.temp_c}°`} styling="text-4xl font-bold" />
          <div className="w-full flex">
            <Paragraph
              title={current.condition?.text}
              styling="m-auto w-3/5 text-1xl whitespace-nowrap text-ellipsis overflow-hidden"
            />
            <Image src={current.condition?.icon} width={48} height={48} alt={current.condition?.text} />
          </div>
        </div>
        <div className="w-1/2 text-sm p-1 m-auto">
          <Paragraph title={`Real Feel: ${current.feelslike_c}°`} />
          <Paragraph title={`Humidity: ${current.humidity}`} />
          <Paragraph title={`Pressure: ${current.pressure_mb}`} />
          <Paragraph title={`UV Index: ${current.uv}`} />
          <Paragraph title={`Wind speed (kph): ${current.wind_kph}`} />
          <Paragraph title={`Cloud cover: ${current.cloud}%`} />
        </div>
      </div>
    </>
  );
}
