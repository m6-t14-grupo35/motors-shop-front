import { AdCard } from "../adCard";
import { iAd } from "@/interfaces/cards.interfaces";



export const ListCard = (ads: iAd[]) => {
  return (
    <>
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        {ads.map(ad => {return <AdCard key={ad.id} ad={ad} />})}
      </div>
    </div>
    </>
  );
};
