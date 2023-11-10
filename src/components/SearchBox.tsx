interface Props {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchBox({ value, placeholder, onChange }: Props) {
  return (
    <input
      type="text"
      className="p-2 flex-grow border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm bg-dynamic"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
