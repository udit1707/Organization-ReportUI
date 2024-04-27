import style from "./style.module.scss";

interface TestReportDetailCardProps {
status?: any;
}
const TestReportDetailCard:React.FC<TestReportDetailCardProps> = ({status}) => {
    return (<div className={style["report-detail-card"]}>
      <span className={style["url"]}>
      /aliquam/quis/turpis/eget/elit/sodales.xml
      </span>
      <span className={style["duration"]}>10s</span>
    </div>  );
}
 
export default TestReportDetailCard;