import TestReportCard from "../../components/TestReportCard/TestReportCard";
import style from "./style.module.scss";

const TestReportList = () => {
  return (
    <div className={style["test-report-list"]}>
      <div className={style["header-text"]}>Test Reports</div>
      <div className={style["list-cnt"]}>
        <TestReportCard />
        <TestReportCard />
        <TestReportCard />
        <TestReportCard />
        <TestReportCard />
      </div>
    </div>
  );
};

export default TestReportList;
