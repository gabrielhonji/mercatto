import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
}: InputProps) {
    const isPassword = type === "password"
    const [showPassword, setShowPassword] = useState(false)

    const inputType = isPassword && showPassword ? "text" : type

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-700">{label}</label>
      <div className="relative flex items-center">
        <input
            className={`w-full pl-3 py-2 rounded-lg border border-neutral-300 hover:outline-1 focus:outline-0 focus:ring-2 focus:ring-amber-400 ${isPassword ? "pr-9" : "pr-3"}`}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {  isPassword && (
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 text-neutral-500 hover:text-amber-600 p-3 rounded-lg">
                {showPassword ? (
                    <EyeClosed size={18} />
                ) : (
                    <Eye size={18} />
                )}
            </button>
        )}
      </div>
    </div>
  );
}
