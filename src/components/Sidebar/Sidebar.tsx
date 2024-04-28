import { useContext, useMemo } from "react";
import style from "./style.module.scss";
import { BsCaretRightFill } from "react-icons/bs";
import { OrganizationContext } from "../../OrganizationContext";

const Sidebar = () => {
  const { currentOrg, orgs } = useContext(OrganizationContext);

  const orgName = useMemo(() => {
    const org = orgs.find((i: any) => i.id === currentOrg);
    return org && org.name;
  }, [currentOrg, orgs]);
  return (
    <div className={style["sidebar-cnt"]}>
      <div className={style["main-text"]}>Levo</div>
      <div className={style["secondary-text"]}>{orgName}</div>

      <div className={style["test-report"]}>
        <span className={style["test-report-icon"]}>
          <BsCaretRightFill />
        </span>
        <span className={style["test-report-text"]}>Test Reports</span>
      </div>
    </div>
  );
};

export default Sidebar;
