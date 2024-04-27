import TestReportStatusAccordion from "../../components/TestReportStatusAccordion/TestReportStatusAccordion";
import style from "./style.module.scss";
import { FaClock, FaRegCalendarCheck, FaGithub } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";
import { TbGitCommit } from "react-icons/tb";
import { GoGlobe } from "react-icons/go";

const TestReportDetails = () => {
  return (
    <div className={style["test-report-details-page"]}>
      <div className={style["top-nav-strip"]}>
        <span className={style["test-report"]}>
          Test Reports
        </span>
        {'       >'}
        <span className={style["test-name"]}>
          Execution # 10
        </span>
      </div>
      <div className={style["details-card"]}>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaClock />
            </span>
            <span className={style["info-text"]}>Duration:3m</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaRegCalendarCheck />
            </span>
            <span className={style["info-text"]}>Finished 10m ago</span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FiBox />
            </span>
            <span className={[style["info-text"],style["info-text--build"]].join(" ")}>Build and Deploy</span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <IoIosGitBranch />
            </span>
            <span className={style["info-text"]}>master</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <TbGitCommit />
            </span>
            <span className={style["info-text"]}>ashdk87e82u</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaGithub />
            </span>
            <span className={style["info-text"]}>udit1707</span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <GoGlobe />
            </span>
            <span className={style["info-text"]}>
              https://my.api.mockaroo.com/organizations.json?key=2e435a20
            </span>
          </span>
        </div>
      </div>
      <div className={style["result-tab"]}>
        <span className={style["result-text"]}>Results</span>
      </div>
      <div className={style["search-cnt"]}>
        <input
          type="text"
          placeholder="Filter by endpoint..."
          className={style["inp-field"]}
        />
      </div>
      <TestReportStatusAccordion />
      <TestReportStatusAccordion />
    </div>
  );
};

export default TestReportDetails;
