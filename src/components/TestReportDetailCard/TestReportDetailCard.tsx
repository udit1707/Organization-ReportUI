import { useMemo } from "react";
import style from "./style.module.scss";

interface TestReportDetailCardProps {
duration:any;
url:any;
status:any;
}
const TestReportDetailCard:React.FC<TestReportDetailCardProps> = ({duration,url,status}) => {
    const totalTime = useMemo(()=>{
      const durationMinutes: number = Math.floor(duration / 60);
      const durationSeconds: number = duration % 60;
      return `${durationMinutes} min ${durationSeconds}s`
    },[duration]);
    return (<div className={[style["report-detail-card"],status==="SUCCESS" && style["report-detail-card--success"]].join(" ")}>
      <span className={style["url"]}>
      {url}
      </span>
      <span className={style["duration"]}>{totalTime}</span>
    </div>  );
}
 
export default TestReportDetailCard;