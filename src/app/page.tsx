import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m10">
      <SignedOut>
        <SignUpButton>
          {/* if this not here the ful page of clerk  window for redrection */}


          {/* <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button> */}

        </SignUpButton>
      </SignedOut>

      {/* sign in button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
