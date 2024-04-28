import TestReportStatusAccordion from "../../components/TestReportStatusAccordion/TestReportStatusAccordion";
import style from "./style.module.scss";
import { FaClock, FaRegCalendarCheck, FaGithub } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";
import { TbGitCommit } from "react-icons/tb";
import { GoGlobe } from "react-icons/go";
import { useContext, useEffect, useMemo, useState } from "react";
import { OrganizationContext } from "../../OrganizationContext";
import { useParams } from "react-router-dom";

const TestReportDetails = () => {
  let { orgId, reportId } = useParams();
  const {
    reportDetails,
    handleFetchReportDetails,
    handleFetchReport,
    handleFetchOrgs,
    reports,
    orgs,
    currentReport,
  } = useContext(OrganizationContext);
  const [query, setQuery] = useState("");

  const handleFilter = (e: any) => {
    setQuery(e.target.value);
  };

  const testReportName = useMemo(() => {
    const foundReport =
      reports && reports.find((i: any) => i.id === currentReport);
    return foundReport && foundReport.name;
  }, [reports, currentReport, reportId, orgId]);

  useEffect(() => {
    if (orgs.length === 0) {
      handleFetchOrgs();
      return;
    }

    if (reports.length === 0) {
      handleFetchReport(Number(orgId));
    }

    handleFetchReportDetails(Number(orgId), Number(reportId));
  }, [orgId, reportId, orgs, reports]);

  const [timeSinceStart, totalTime, branch, commit, environment, gituser] =
    useMemo(() => {
      if (!reportDetails) return [];
      else {
        const end_date_str: string = reportDetails.end_date;
        const duration: number = reportDetails.duration;
        const endDate: Date = new Date(end_date_str);
        const currentTime: Date = new Date();
        const startDate: Date = new Date(endDate.getTime() - duration * 1000);
        const timeDifference: number =
          currentTime.getTime() - startDate.getTime();
        const minutesAgo: number = Math.floor(timeDifference / (1000 * 60));
        const durationMinutes: number = Math.floor(duration / 60);
        const durationSeconds: number = duration % 60;
        const agoString: string = `Finished ${minutesAgo} min ago`;
        const durationString: string = `Duration: ${durationMinutes} min ${durationSeconds} sec`;

        return [
          agoString,
          durationString,
          reportDetails.branch,
          reportDetails.commit,
          reportDetails.environment_url,
          reportDetails.github_user,
        ];
      }
    }, [reportDetails, , orgId, reportId]);

  const [failedTests, failedCount, passedTests, passedCount, total] =
    useMemo(() => {
      if (!reportDetails) return [[], 0, [], 0, 0];
      const passed =
        reportDetails &&
        reportDetails.endpoints.filter((i: any) =>
          query.length > 0
            ? i.status === "SUCCESS" &&
              i.url.toLowerCase().includes(query.toLowerCase())
            : i.status === "SUCCESS"
        );
      const failed =
        reportDetails &&
        reportDetails.endpoints.filter((i: any) =>
          query.length > 0
            ? i.status !== "SUCCESS" &&
              i.url.toLowerCase().includes(query.toLowerCase())
            : i.status !== "SUCCESS"
        );

      return [
        failed,
        failed.length,
        passed,
        passed.length,
        reportDetails.endpoints.length,
      ];
    }, [reportDetails && reportDetails.endpoints, orgId, reportId, query]);

  return (
    <div className={style["test-report-details-page"]}>
      <div className={style["top-nav-strip"]}>
        <span className={style["test-report"]}>Test Reports</span>
        {"       >"}
        <span className={style["test-name"]}>{testReportName}</span>
      </div>
      <div className={style["details-card"]}>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaClock />
            </span>
            <span className={style["info-text"]}>{totalTime}</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaRegCalendarCheck />
            </span>
            <span className={style["info-text"]}>{timeSinceStart}</span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FiBox />
            </span>
            <span
              className={[style["info-text"], style["info-text--build"]].join(
                " "
              )}
            >
              Build and Deploy
            </span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <IoIosGitBranch />
            </span>
            <span className={style["info-text"]}>{branch}</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <TbGitCommit />
            </span>
            <span className={style["info-text"]}>{commit}</span>
          </span>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <FaGithub />
            </span>
            <span className={style["info-text"]}>{gituser}</span>
          </span>
        </div>
        <div className={style["row"]}>
          <span className={style["info-cnt"]}>
            <span className={style["icon"]}>
              <GoGlobe />
            </span>
            <span className={style["info-text"]}>{environment}</span>
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
          value={query}
          onChange={handleFilter}
        />
      </div>

      <TestReportStatusAccordion
        detailsArr={failedTests}
        count={failedCount}
        total={total}
        status={"FAIL"}
      />

      <TestReportStatusAccordion
        detailsArr={passedTests}
        count={passedCount}
        total={total}
        status={"SUCCESS"}
      />
      {/* <TestReportStatusAccordion reportDetails = {reportDetails}/>
      <TestReportStatusAccordion /> */}
    </div>
  );
};

export default TestReportDetails;
