import { useParams } from "react-router-dom";
import TestReportCard from "../../components/TestReportCard/TestReportCard";
import style from "./style.module.scss";
import { useContext, useEffect } from "react";
import { OrganizationContext } from "../../OrganizationContext";

const TestReportList = () => {
  let { orgId } = useParams();
  const { handleFetchReport, handleFetchOrgs, reports, orgs,setReportDetails } =
    useContext(OrganizationContext);

  useEffect(() => {
    setReportDetails(null);
    if (orgs?.length === 0) {
      handleFetchOrgs();
      return;
    } else {
      if (orgId && reports?.length === 0) {
        handleFetchReport(Number(orgId));
      }
    }
  }, [orgId, reports, orgs]);

  return (
    <div className={style["test-report-list"]}>
      <div className={style["header-text"]}>Test Reports</div>
      <div className={style["list-cnt"]}>
        {reports &&
          reports.map((i: any, index: any) => (
            <TestReportCard
              key={i.id}
              id={i.id}
              name={i.name}
              start={i.start_date}
              duration={i.duration}
              failed={i.failed_tests}
              passed={i.succeed_tests}
              orgId={Number(orgId)}
            />
          ))}
      </div>
    </div>
  );
};

export default TestReportList;
