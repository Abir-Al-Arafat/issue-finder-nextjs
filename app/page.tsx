import Image from "next/image";
import Pagination from "./components/Pagination";
import IssueChart from "./IssueChart";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const openCount = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressCount = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedCount = await prisma.issue.count({ where: { status: "CLOSED" } });
  return (
    <>
      {" "}
      <LatestIssues />
      <IssueSummary
        open={openCount}
        inProgress={inProgressCount}
        closed={closedCount}
      />
      <IssueChart
        open={openCount}
        inProgress={inProgressCount}
        closed={closedCount}
      />
    </>
  );
}
