import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { VscOrganization } from "react-icons/vsc";

interface OrganizationCardProps {
  id:Number,
  orgName?: String;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({id, orgName }) => {
  const navigate = useNavigate();

  return (
    <div className={style["org-card-cnt"]} onClick={()=>{navigate(`/${id}/reports`);}}>
      <span className={style["org-icon"]}>
        <VscOrganization/>
      </span>
      <span className={style["org-name"]}>{orgName}</span>
    </div>
  );
};

export default OrganizationCard;
