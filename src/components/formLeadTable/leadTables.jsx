import { useSelector } from "react-redux";

import { LeadTask } from "./LeadTask";

const LaadTable = () => {
  const leads = useSelector((state) => state.leads.leads);

  return (
    <>
      {leads.map((lead) => (
        <tr key={lead.id}>
          <LeadTask {...lead} />
        </tr>
      ))}
    </>
  );
};

export { LaadTable };
