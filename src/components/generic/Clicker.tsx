import { useState } from "react";

interface ClickerProps {
    name: string
}

export default function Clicker({ name = 'You'}: ClickerProps) {
	
    const [count, setcount] = useState<number>(0)
    
    function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        setcount(count + 1)
    }

    return (
		<button className="clicker" onClick={clickHandler}>
			{name} clicou {count} vez(es)
		</button>
	);
}