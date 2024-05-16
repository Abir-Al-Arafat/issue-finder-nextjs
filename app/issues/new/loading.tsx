"use client";

import {
  Box,
  Button,
  Callout,
  Spinner,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Loader from "@/app/components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  return (
    <Box className="max-w-xl ">
      <Skeleton height="30px" />
      <Skeleton height="371px" />
    </Box>
  );
};

export default NewIssuePage;
