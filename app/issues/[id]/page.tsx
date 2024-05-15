import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  console.log("IssueDetailPage params", parseInt(params.id));
  console.log("IssueDetailPage params", isNaN(parseInt(params.id)));
  if (isNaN(parseInt(params.id))) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  await delay(2000);
  return (
    <div>
      <Button>
        <Link href="/issues">Back</Link>
      </Button>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
