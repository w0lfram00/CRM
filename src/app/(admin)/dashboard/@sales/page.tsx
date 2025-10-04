import Button from "@/src/app/components/Button";
import DashboardCard from "@/src/app/components/DashboardCard";
import SummaryTable from "@/src/app/components/SummaryTable";
import SummaryTableCell from "@/src/app/components/SummaryTableCell";
import SummaryTableHeader from "@/src/app/components/SummaryTableHeader";
import { getSummarySales } from "@/src/lib/api";
import React from "react";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
