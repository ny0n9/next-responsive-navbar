import Link from "next/link";
import MenuNav from "@/components/menu-nav";

const DesktopMenu = () => {

	return (
		<div className="hidden md:flex">
			<Link href="/"><i className="text-xl icon-home"></i></Link>
			<div className="flex items-center gap-2 ml-4">
				<MenuNav />
			</div>
		</div>
	)
}
export default DesktopMenu