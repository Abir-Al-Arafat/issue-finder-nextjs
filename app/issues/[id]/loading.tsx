import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = async () => {
  await delay(2000);
  return (
    <Box className="max-w-xl">
      {/* <Heading> */}
      <Skeleton />
      {/* </Heading> */}
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
