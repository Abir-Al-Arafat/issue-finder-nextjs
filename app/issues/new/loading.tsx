import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <Box className="max-w-xl ">
      <Skeleton height="30px" />
      <Skeleton height="371px" />
    </Box>
  );
};

export default NewIssuePage;
