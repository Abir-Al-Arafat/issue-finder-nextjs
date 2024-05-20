import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import delay from "delay";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = async () => {
  // await delay(2000);
  return <IssueForm />;
};

export default NewIssuePage;
