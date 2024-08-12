import UsersPage from "@/components/UsersPage"; 
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const Users = () => {
  return (
    <>
    <SignedIn>
      <main className="bg-black-200 py-2">
        <UsersPage />
      </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
};

export default Users;


