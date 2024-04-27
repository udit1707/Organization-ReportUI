import style from "./style.module.scss";
import { VscOrganization } from "react-icons/vsc";

interface OrganizationCardProps {
  orgName?: String;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ orgName }) => {
  return (
    <div className={style["org-card-cnt"]}>
      <span className={style["org-icon"]}>
        <VscOrganization/>
      </span>
      <span className={style["org-name"]}>{orgName}</span>
    </div>
  );
};

export default OrganizationCard;
