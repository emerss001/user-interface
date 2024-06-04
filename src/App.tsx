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

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
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
        <Button>
          <PlusCircle size={18} className="mr-2" />
          New User
        </Button>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>NOME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>IDADE</TableHead>
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
