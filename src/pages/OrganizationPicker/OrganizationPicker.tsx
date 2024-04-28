import { useContext, useEffect } from "react";
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import style from "./style.module.scss";
import { OrganizationContext } from "../../OrganizationContext";

const OrganizationPicker = () => {
  const { orgs, handleFetchOrgs, setReports } = useContext(OrganizationContext);

  useEffect(() => {
    setReports([]);
    if (orgs.length === 0) handleFetchOrgs();
  }, [orgs]);
  return (
    <div className={style["org-picker-cnt"]}>
      <div className={style["header-text-cnt"]}>Organizations</div>
      <div className={style["secondary-text"]}>
        Pick the organization you want to access to
      </div>
      {orgs.map((i: any, index: any) => (
        <OrganizationCard key={i.id} orgName={i.name} id={i.id} />
      ))}
    </div>
  );
};

export default OrganizationPicker;
