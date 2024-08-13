import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

interface Props {
  isLoading?: boolean;
}

const IssueActions = ({ isLoading = false }: Props) => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button loading={isLoading}>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
