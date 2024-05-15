import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  isLoading?: boolean;
}

const IssueActions = ({ isLoading = false }: Props) => {
  return (
    <div className="mb-5">
      <Button loading={isLoading}>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
