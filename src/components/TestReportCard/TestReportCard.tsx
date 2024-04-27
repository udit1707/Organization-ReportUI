import style from "./style.module.scss";

interface TestReportCardProps {
  test?: String;
  passed?: any;
  failed?: any;
  duration?: any;
  id?: Number;
  start?: any;
}

const TestReportCard: React.FC<TestReportCardProps> = ({
  test,
  passed,
  failed,
  duration,
  id,
  start,
}) => {
  return (
    <div className={style["test-report-card"]}>
      <div className={style["left-cnt"]}>
        <div className={style["test-report-name"]}># Execution 10</div>
        <div className={style["duration-time-cnt"]}>
          <span className={style["start"]}>10 min ago</span>
          {"-"}
          <span className={style["duration"]}>10 min long</span>
        </div>
      </div>
      <div className={style["passed"]}>10 passed</div>
      <div className={style["failed"]}>10 failed</div>
    </div>
  );
};

export default TestReportCard;
