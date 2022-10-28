import React from "react";

import { LocationResponse } from "../../../api/types";
import locationLogo from "../../../assets/images/location.png";
import Image from "../../../components/Image";
import Paragraph from "../../../components/Paragraph";

type LocationCardProps = {
  location: LocationResponse;
};

export default function Location({ location }: LocationCardProps) {
  return (
    <>
      <div className="flex w-1/2 mt-2 mb-2 rounded-lg p-2 object-contain">
        <div className="m-1">
          <Image src={locationLogo} width={24} height={24} alt="Location" />
        </div>
        <div className="ml-1 text-left">
          <div className="text-xs text-white">Current Location</div>
          <div className="text-sm text-white">
            <Paragraph title={`${location.name}, ${location.country}`} />
          </div>
        </div>
      </div>
    </>
  );
}
