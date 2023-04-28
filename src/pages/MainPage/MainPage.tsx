import { FC } from "react";
import { Card } from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";
import { HeadphoneData } from "../../mock/headphones-data";
import { WirelessHeadphonesData } from "../../mock/wireless-headphones-data";
import { ICard } from "../../types/CardTypes";

export const MainPage: FC = () => {
  return (
    <>
      <CardList title="Наушники">
        {HeadphoneData?.map((item: ICard) => (
          <Card key={item.id} item={item} />
        ))}
      </CardList>
      <CardList title="Беспроводные наушники">
        {WirelessHeadphonesData?.map((item: ICard) => (
          <Card key={item.id} item={item} />
        ))}
      </CardList>
    </>
  );
};
