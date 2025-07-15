import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MenuNav = () => {

	return (
		<>
			<Link href="/about" className="hover:bg-white hover:text-gray-700 px-2 rounde-lg">About</Link>
			<Link href="/contact" className="hover:bg-white hover:text-gray-700 px-2 rounde-lg">Contact</Link>
			<DropdownMenu>
				<DropdownMenuTrigger className="hover:bg-white hover:text-gray-700 px-2 rounded-md">Dropdown 1<i className="icon-angle-down"></i></DropdownMenuTrigger>
				<DropdownMenuContent className="bg-greenwin text-white">
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger className="hover:bg-white hover:text-gray-700 px-2 rounded-md">Dropdown 2<i className="icon-angle-down"></i></DropdownMenuTrigger>
				<DropdownMenuContent className="bg-greenwin text-white">
					<DropdownMenuItem>Menu L1.1</DropdownMenuItem>
					<DropdownMenuItem>Menu L1.2</DropdownMenuItem>
					<DropdownMenuItem>Menu L1.2</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
					<DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-greenwin text-white">
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Menu L2.1</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
export default MenuNav