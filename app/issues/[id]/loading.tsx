import { Box, Card, Flex } from "@radix-ui/themes";
import delay from "delay";
import React from "react";
import { Skeleton } from "@/app/components";

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
