import { AdCard } from "../adCard";

export const ListCard = () => {
  return (
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        <AdCard isSold={true} />
        <AdCard isSold={false} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
      </div>
    </div>
  );
};
