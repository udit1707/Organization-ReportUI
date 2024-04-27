import TestReportStatusAccordion from "../../components/TestReportStatusAccordion/TestReportStatusAccordion";

const TestReportDetails = () => {
  return (
    <div className={style["test-report-details-page"]}>
      <TestReportStatusAccordion />
      <TestReportStatusAccordion />
    </div>
  );
};

export default TestReportDetails;
