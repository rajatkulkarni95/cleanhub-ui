import { PrimaryButton } from "./Button";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  console.log({ session });
  return (
    <header className="flex items-center justify-between flex-wrap bg-zinc-50 dark:bg-zinc-900 p-4">
      <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold">
        CleanHub
      </h1>
      {!email ? (
        <PrimaryButton
          label="Sign in with Github"
          onClick={() => signIn("github")}
        />
      ) : (
        <p>Signed in as {email}</p>
      )}
      {email && (
        <PrimaryButton label="Sign out" onClick={() => signIn("signout")} />
      )}
    </header>
  );
};

export default Header;
