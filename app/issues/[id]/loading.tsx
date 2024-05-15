import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = async () => {
  await delay(2000);
  return (
    <div>
      <Heading>
        <Skeleton />
      </Heading>
      <Flex className="space-x-3" my="2">
        <Skeleton />
        <Skeleton />
      </Flex>
      <Card>
        <Skeleton />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsPage;
