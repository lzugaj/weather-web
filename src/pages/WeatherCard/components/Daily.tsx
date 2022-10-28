import React from "react";

import { ForecastDayResponse, HourResponse } from "../../../api/types";
import Image from "../../../components/Image";
import Paragraph from "../../../components/Paragraph";

type DailyProps = {
  forecastday: ForecastDayResponse;
};

export default function Daily({ forecastday }: DailyProps) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/4 m-2 bg-violet-300 rounded-2xl">
          <div className="rounded-lg z-10 bg-white shadow-2xl"></div>
          {forecastday.hour.map((current: HourResponse) => {
            return (
              <>
                <div className="text-center">
                  <Paragraph title={current.time.substring(11, 16)} styling="text-xl font-bold" />
                  <div className="w-full flex flex-row">
                    <Paragraph title={current.condition?.text} styling="m-auto text-md" />
                    <Image src={current.condition?.icon} width={32} height={32} alt={current.condition?.text} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
