import style from "./style.module.scss";
import { BsCaretRightFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className={style["sidebar-cnt"]}>
      <div className={style["main-text"]}>Levo</div>
      <div className={style["secondary-text"]}>Organization Name A</div>

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
