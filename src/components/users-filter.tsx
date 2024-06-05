import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const usersFilterSchema = z.object({
  username: z.string(),
  age: z.coerce.number(),
});

type UsersFilterSchema = z.infer<typeof usersFilterSchema>;

export function UsersFilter() {
  const { register, handleSubmit } = useForm<UsersFilterSchema>({
    resolver: zodResolver(usersFilterSchema),
  });

  function handleFilterUsers(data: UsersFilterSchema) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(handleFilterUsers)}
      className="flex items-center gap-2"
    >
      <Input placeholder="Username" {...register("username")} />
      <Input placeholder="User age" {...register("age")} />
      <Button
        type="submit"
        variant={"secondary"}
        className="hover:bg-white border"
      >
        <Search size={18} className="mr-2" />
        Filter Users
      </Button>
    </form>
  );
}
