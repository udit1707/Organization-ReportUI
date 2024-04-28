import style from "./style.module.scss";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import TestReportDetailCard from "../TestReportDetailCard/TestReportDetailCard";

interface TestReportStatusAccordionProps {
  detailsArr: any;
  count: any;
  total: any;
  status: any;
}

const TestReportStatusAccordion: React.FC<TestReportStatusAccordionProps> = ({
  detailsArr,
  count,
  total,
  status,
}) => {
  const [showBody, setShowBody] = useState<Boolean>(false);
  return (
    <div className={style["accordion-cnt"]}>
      <div
        className={style["accordion-header"]}
        onClick={() => setShowBody((prev) => !prev)}
      >
        <span className={style["icon"]}>
          {showBody ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
        <span
          className={[
            style["status-icon"],
            status === "SUCCESS" && style["status-icon--passed"],
          ].join(" ")}
        >
          {status === "SUCCESS" ? <RxCheckCircled /> : <RxCrossCircled />}
        </span>
        <span className={style["status"]}>{`${
          status === "SUCCESS" ? "Passed Tests" : "Failed Tests"
        } (${count}/${total})`}</span>
      </div>
      {showBody && (
        <div className={style["accordion-body"]}>
          {detailsArr &&
            detailsArr.map((i: any, index: any) => (
              <TestReportDetailCard
                key={index}
                url={i.url}
                duration={i.duration}
                status={i.status}
              />
            ))}
          {/* <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard /> */}
        </div>
      )}
    </div>
  );
};

export default TestReportStatusAccordion;
