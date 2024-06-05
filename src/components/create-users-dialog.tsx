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

export function CreateUsersDialog() {
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

        <form className="space-y-6">
          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="username">Username</Label>
            <Input type="text" className="col-span-3" id="username"></Input>
          </div>

          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="email">Email</Label>
            <Input type="email" className="col-span-3" id="email"></Input>
          </div>

          <div className="grid grid-cols-4 items-center text-right gap-10">
            <Label htmlFor="age">Age</Label>
            <Input type="number" className="col-span-3" id="age"></Input>
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
