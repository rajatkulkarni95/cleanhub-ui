type TButton = {
  label: string;
  onClick?: () => void;
};

export const PrimaryButton = ({ label, onClick }: TButton) => (
  <button
    onClick={onClick}
    className="bg-violet-500 text-zinc-100 hover:bg-violet-600  font-medium py-2 px-4 rounded-md dark:bg-yellow-600 dark:text-zinc-100 dark:hover:bg-yellow-700"
  >
    {label}
  </button>
);
