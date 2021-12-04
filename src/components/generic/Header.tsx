export default function Header() {
    
	return (
        <div className="flex justify-between h-full p-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur">
            <span className="font-mono font-bold"> 
                <h1 id="brand-name">React-store</h1>
            </span>
            <nav className="px-5">
                <span>Home</span>
            </nav>
        </div>
	);
}