import { AdminAdCard } from "../adminAdCard";

export const AdminListCard = () => {
  return (
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        <AdminAdCard />
        <AdminAdCard />
        <AdminAdCard />
        <AdminAdCard />
        <AdminAdCard />
        <AdminAdCard />
        <AdminAdCard />
      </div>
    </div>
  );
};
