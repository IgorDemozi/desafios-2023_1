const InputDesafios = ({ onChange, type }: { onChange: React.ChangeEventHandler<HTMLInputElement>; type?: string }) => {
   return <input onChange={onChange} type={type} className="border border-gray-500 rounded p-1" />;
};

export default InputDesafios;
