import Link from "next/link";
import MenuNav from "@/components/menu-nav";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
	return (
		<div className="md:hidden">
			<Sheet>
  			<SheetTrigger><i className="text-2xl icon-bars"></i></SheetTrigger>
  			<SheetContent side="left" className="w-lg bg-greenwin text-white p-4 top-20">
  				<SheetTitle><Link href="/"><i className="text-xl text-white icon-home"></i></Link></SheetTitle>
					<div className="flex flex-col items-center space-y-4">
						<MenuNav />
					</div>
  			</SheetContent>
			</Sheet>
		</div>
	)
}
export default MobileMenu