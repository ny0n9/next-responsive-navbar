import Link from "next/link";

const RightMenu = () => {

	return (
		<div className="flex items-center justify-end flex-1 gap-2">
			<Link href="/login" className="hover:bg-white hover:text-gray-700 px-2 rounde-lg">Login</Link>
			<Link href="/register" className="hover:bg-white hover:text-gray-700 px-2 rounde-lg">Register</Link>
		</div>
	)
}
export default RightMenu