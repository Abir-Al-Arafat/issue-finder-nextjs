"use client";
import toast, { Toaster } from "react-hot-toast";
import { Issue, User } from "@prisma/client";
import { Blockquote, Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[], AxiosError>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    // fetches data in every 60 seconds
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data } = await axios.get<User[]>("/api/users");
  //     setUsers(data);
  //   };

  //   fetchUsers();
  // }, []);

  // console.log("error", error?.response.status);

  if (isLoading) return <Skeleton height="32px" />;

  if (error)
    return (
      <Blockquote color="crimson">
        Error{error?.response?.status}: Users not found
      </Blockquote>
    );

  return (
    <>
      <Select.Root
        disabled={isLoading}
        defaultValue={issue.assignedToUserId || "null"}
        onValueChange={async (userId) => {
          if (userId === "null") userId = "";
          try {
            await axios.patch("/api/issues/" + issue.id, {
              assignedToUserId: userId || null,
            });
            if (userId) toast.success("User assigned");
            else toast.success("User unassigned");
          } catch (err) {
            console.log("err", err);
            toast.error("Changes could not be saved");
          }
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="null">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
