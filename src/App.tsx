import { PlusCircle, Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Users 👨‍💻</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="username" placeholder="Username" />
          <Input name="age" placeholder="User age" />
          <Button
            type="submit"
            variant={"secondary"}
            className="hover:bg-white border"
          >
            <Search size={18} className="mr-2" />
            Filter Users
          </Button>
        </form>
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
              <DialogDescription>
                Create new user in the system
              </DialogDescription>
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
      </div>
      <div className="border rounded-lg p-2 font-mono">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NOME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>IDADE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>uyiukljsdgdfggzsdgdgdfgs</TableCell>
                  <TableCell>Emerson Neves {i}</TableCell>
                  <TableCell>emerson@gmail.com</TableCell>
                  <TableCell>19</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default App;
