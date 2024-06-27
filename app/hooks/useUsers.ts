import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useUsers = () =>
  useQuery<User[], AxiosError>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    // fetches data in every 60 seconds
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
export default useUsers;
