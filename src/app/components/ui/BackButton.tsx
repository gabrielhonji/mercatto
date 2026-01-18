import { useNavigate } from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode,
    type?: "primary" | "secondary" | "tertiary",
}

const styles = {
  primary: "min-w-40 bg-amber-400 px-4 py-2 rounded-md text-neutral-50 hover:bg-amber-500 hover:text-neutral-600 transition duration-150 cursor-pointer",
  secondary: "min-w-40 border border-amber-400 text-amber-500 px-4 py-2 rounded-md hover:bg-amber-400 hover:text-neutral-50 transition duration-150 cursor-pointer",
  tertiary: "min-w-40 text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-400 hover:text-neutral-50 transition duration-150 cursor-pointer",
}


export default function BackButton({ children, type="primary" } : ButtonProps) {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate("/app/");
      }
    };

    return (
        <button onClick={handleGoBack} className={styles[type]}>
            {children}
        </button>
    );
}
