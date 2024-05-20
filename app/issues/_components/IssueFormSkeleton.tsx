import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl ">
      <Skeleton height="30px" />
      <Skeleton height="371px" />
    </Box>
  );
};

export default IssueFormSkeleton;
