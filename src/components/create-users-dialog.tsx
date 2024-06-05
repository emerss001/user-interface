import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/services/api";
import { getUsers } from "@/services/get-users";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  age: z.coerce.number(),
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export function CreateUsersDialog() {
  const { register, handleSubmit } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  async function handleCreateUser(data: CreateUserSchema) {
    await api.post("/users", data);
    getUsers();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle size={18} className="mr-2" />
          New User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New User</DialogTitle>
          <DialogDescription>Create new user in the system</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-6">
          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              className="col-span-3"
              id="username"
              {...register("name")}
            />
          </div>

          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              className="col-span-3"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              className="col-span-3"
              id="age"
              {...register("age")}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={"outline"}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
