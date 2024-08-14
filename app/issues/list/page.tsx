import React from "react";
import prisma from "@/prisma/client";
import delay from "delay";
import IssueActions from "./IssueActions";
import { Status } from "@prisma/client";
import IssueTable, { columns, IssueQuery } from "./IssueTable";
import Pagination from "@/app/components/Pagination";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next/types";

interface Props {
  // searchParams: { status: Status; orderBy: keyof Issue; page: string };
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const pageSize: number = 10;
  const page: number = parseInt(searchParams.page) || 1;
  const issues = await prisma.issue.findMany({
    where: {
      status: status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({
    where: {
      status: status,
    },
  });
  // console.log("sp", searchParams.status);
  // await delay(2000);
  return (
    <Flex direction="column" gap="3">
      <IssueActions />

      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        itemCount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      ></Pagination>
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "Issue Finder - All Issues",
  description: "All issues with details",
};

export default IssuesPage;
