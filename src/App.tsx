import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { getUsers } from "./services/get-users";
import { UsersFilter } from "./components/users-filter";
import { CreateUsersDialog } from "./components/create-users-dialog";

export function App() {
  const users = getUsers();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Users 👨‍💻</h1>
      <div className="flex items-center justify-between">
        <UsersFilter />
        <CreateUsersDialog />
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
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
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
