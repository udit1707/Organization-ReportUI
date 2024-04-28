import { useMemo } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

interface TestReportCardProps {
  name?: String;
  passed?: any;
  failed?: any;
  duration?: any;
  id?: Number;
  orgId?: Number;
  start?: any;
}

const TestReportCard: React.FC<TestReportCardProps> = ({
  name,
  passed,
  failed,
  duration,
  id,
  start,
  orgId,
}) => {
  const navigate = useNavigate();

  const [timeSinceStart, totalTime] = useMemo(() => {
    const timeSinceStart = start;
    const totalTime = duration;
    const startDate: Date = new Date(timeSinceStart);
    const currentTime: Date = new Date();

    const timeDifference: number = currentTime.getTime() - startDate.getTime();
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));

    const durationMinutes = Math.floor(totalTime / 60);
    const durationSeconds = totalTime % 60;

    const agoString = `${minutesAgo} min ago`;
    const durationString = `${durationMinutes} min ${durationSeconds} sec long`;

    return [agoString, durationString];
  }, [start, duration]);

  return (
    <div
      className={style["test-report-card"]}
      onClick={() => {
        navigate(`/${orgId}/reports/${id}`);
      }}
    >
      <div className={style["left-cnt"]}>
        <div className={style["test-report-name"]}>{name}</div>
        <div className={style["duration-time-cnt"]}>
          <span className={style["start"]}>{timeSinceStart}</span>
          {"-"}
          <span className={style["duration"]}>{totalTime}</span>
        </div>
      </div>
      <div className={style["passed"]}>{`${passed} passed`}</div>
      <div className={style["failed"]}>{`${failed} failed`}</div>
    </div>
  );
};

export default TestReportCard;
