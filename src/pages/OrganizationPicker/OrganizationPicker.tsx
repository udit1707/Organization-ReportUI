import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";
import style from "./style.module.scss";

const OrganizationPicker = () => {
  return (
    <div className={style["org-picker-cnt"]}>
      <div className={style["header-text-cnt"]}>Organizations</div>
      <div className={style["secondary-text"]}>
        Pick the organization you want to access to
      </div>
      
      <OrganizationCard orgName="Organization Name A" />
      <OrganizationCard orgName="Organization Name A" />
    </div>
  );
};

export default OrganizationPicker;
