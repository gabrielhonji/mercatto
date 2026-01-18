type ButtonProps = {
    children: React.ReactNode,
    type?: "primary" | "secondary" | "tertiary",
    onClick?: () => void,
}

const styles = {
  primary: "bg-amber-400 px-4 py-2 rounded-md text-neutral-50 hover:bg-amber-500 hover:text-neutral-600 transition duration-150 cursor-pointer",
  secondary: "border border-amber-400 text-amber-500 px-4 py-2 rounded-md hover:bg-amber-400 hover:text-neutral-50 transition duration-150 cursor-pointer",
  tertiary: "text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-400 hover:text-neutral-50 transition duration-150 cursor-pointer",
}

export default function Button({ children, type="primary", onClick } : ButtonProps) {
    return (
        <button onClick={onClick} className={styles[type]}>
            {children}
        </button>
    );
}
