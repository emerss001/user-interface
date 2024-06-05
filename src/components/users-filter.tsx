import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function UsersFilter() {
  return (
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
  );
}
