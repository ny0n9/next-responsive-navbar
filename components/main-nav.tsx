import DesktopMenu from "@/components/desktop-nav";
import MobileMenu from "@/components/mobile-nav";
import RightMenu from "@/components/right-nav";

const Navbar = () => {

	return (
		<nav className="w-full sticky-top bg-greenwin text-white px-4">
			<div className="flex items-center h-14">
				<DesktopMenu />
				<MobileMenu />
				<RightMenu />
			</div>
		</nav>
	)
}
export default Navbar