interface InputProps {
  label: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({ label, id }) => {
  // eslint-disable-next-line no-console
  console.log('label:', label);

  return (
    <div className="relative my-2">
      <input
        className="peer shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-36 focus:border-blue-600 transition valid:border-blue-600"
        id={id}
        type="text"
        name={id}
        required
      />
      <label
        className="transition-all cursor-text block absolute top-1/2 left-3 px-1 py-0 bg-white translate-y-[-50%] text-blue-600 text-sm peer-focus:font-bold peer-focus:top-0 peer-focus:left-6 peer-valid:font-bold peer-valid:top-0 peer-valid:left-6"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
