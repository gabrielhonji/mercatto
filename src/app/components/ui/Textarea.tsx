type TextareaProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea({
  label,
  placeholder = "",
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-700">{label}</label>
      <textarea
        className="w-full pl-3 py-2 rounded-lg border border-neutral-300 hover:outline-1 focus:outline-0 focus:ring-2 focus:ring-amber-400 resize-y"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
