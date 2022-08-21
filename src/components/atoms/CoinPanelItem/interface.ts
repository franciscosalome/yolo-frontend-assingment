import { ICoin } from "../../../global/interfaces";

export interface ICoinPanelItemProps {
  coin: ICoin;
  removeCoin: (coinName: string) => void
}