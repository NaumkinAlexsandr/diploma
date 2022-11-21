import { useSelector } from "react-redux";
import { LeadTask } from "./LeadTask";
import { LeadTask3 } from "./LeadTask3";

const LaadTable = () => {
  const leads = useSelector((state) => state.leads.leads);

  console.log(leads);
  return (
    <>
      {leads.map((lead) => (
        <LeadTask key={lead.id} {...lead} />
      ))}
    </>
  );
};

export { LaadTable };
