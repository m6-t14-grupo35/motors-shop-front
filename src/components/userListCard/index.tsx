import { ProfileAdCard } from "../profileAdCard";

export const ProfileListCard = () => {
  return (
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        <ProfileAdCard isSold={true} />
        <ProfileAdCard isSold={false} />
        <ProfileAdCard isSold={true} />
        <ProfileAdCard isSold={false} />
        <ProfileAdCard isSold={true} />
        <ProfileAdCard isSold={false} />
        <ProfileAdCard isSold={true} />
        <ProfileAdCard isSold={false} />
      </div>
    </div>
  );
}