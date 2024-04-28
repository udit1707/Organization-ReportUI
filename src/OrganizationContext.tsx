import { createContext, useState } from "react";

export const OrganizationContext = createContext<any>({});

interface OrganizationProviderProps {
  children: any;
}

const OrganizationProvider: React.FC<OrganizationProviderProps> = ({
  children,
}) => {
  const [orgs, setOrgs] = useState([]);
  const [reports, setReports] = useState<any>([]);
  const [reportDetails, setReportDetails] = useState(null);
  const [currentOrg, setCurrentOrg] = useState<any>(null);
  const [currentReport, setCurrentReport] = useState<any>(null);

  const handleFetchOrgs = () => {
    const newOrgs = fetch(
      "https://my.api.mockaroo.com/organizations.json?key=2e435a20"
    );
    newOrgs
      .then((res) => res.json())
      .then((orgs) => {
        setOrgs(orgs);
      })
      .catch((err) => {
        window.location.href = "/error-fetching";
      });
  };

  const handleFetchReport = (orgId: Number) => {
    const newReports = fetch(
      `https://my.api.mockaroo.com/organizations/${orgId}/reports.json?key=2e435a20`
    );
    newReports
      .then((res) => res.json())
      .then((reports) => {
        setReports(reports);
        setCurrentOrg(orgId);
      })
      .catch((err) => {
        window.location.href = "/error-fetching";
      });
  };

  const handleFetchReportDetails = (orgId: Number, reportId: Number) => {
    const reportDetails = fetch(
      `https://my.api.mockaroo.com/organizations/${orgId}/reports/${reportId}/details.json?key=2e435a20`
    );
    reportDetails
      .then((res) => res.json())
      .then((reportDetails) => {
        setReportDetails(reportDetails);
        setCurrentOrg(orgId);
        setCurrentReport(reportId);
      })
      .catch((err) => {
        window.location.href = "/error-fetching";
      });
  };

  return (
    <OrganizationContext.Provider
      value={{
        handleFetchReport,
        handleFetchOrgs,
        handleFetchReportDetails,
        reportDetails,
        reports,
        orgs,
        currentOrg,
        currentReport,
        setReportDetails,
        setReports,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export default OrganizationProvider;
