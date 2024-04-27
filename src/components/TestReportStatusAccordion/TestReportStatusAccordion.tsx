import style from "./style.module.scss";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import TestReportDetailCard from "../TestReportDetailCard/TestReportDetailCard";

const TestReportStatusAccordion = () => {
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
        <span className={style["status-icon"]}>
          <RxCrossCircled />
        </span>
        <span className={style["status"]}>Failed Tests(3/14)</span>
      </div>
      {showBody && (
        <div className={style["accordion-body"]}>
          <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard />
          <TestReportDetailCard />
        </div>
      )}
    </div>
  );
};

export default TestReportStatusAccordion;
