import { PrimaryButton } from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-wrap bg-zinc-50 dark:bg-zinc-900 p-4">
      <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold">
        CleanHub
      </h1>
      <PrimaryButton label="Sign in with Github" />
    </header>
  );
};

export default Header;
