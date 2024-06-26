"use client";

import { User } from "@prisma/client";
import { Blockquote, Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";

const AssigneeSelect = () => {
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
    <Select.Root disabled={isLoading}>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
