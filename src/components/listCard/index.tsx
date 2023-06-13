import { AdCard } from "../adCard";

export const ListCard = () => {
  return (
    <div className="my-2">
      <div className="flex flex-wrap gap-12 justify-center sm:justify-normal">
        <AdCard />
        <AdCard />
        <AdCard />
      </div>
    </div>
  );
};
