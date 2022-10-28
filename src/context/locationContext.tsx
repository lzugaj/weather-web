import { createContext, Dispatch, SetStateAction } from "react";

type LocationContextProps = {
  locationName: string;
  setLocationName: Dispatch<SetStateAction<string>>;
};

export const LocationNameContext = createContext<LocationContextProps>({
  locationName: "Zagreb",
  setLocationName: () => "",
});
