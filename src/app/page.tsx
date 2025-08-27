import { SignedIn, SignedOut, SignIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div >
      {/* <SignInButton>
        <Button>Sign In</Button>
      </SignInButton> */}
  <SignedOut>
    <SignUpButton>
      <Button>Sign Up</Button>
    </SignUpButton>
  </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      

    </div>
  );
}
