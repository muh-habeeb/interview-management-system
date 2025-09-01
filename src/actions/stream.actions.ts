// "use server";

// import { currentUser } from "@clerk/nextjs/server";
// import { StreamClient } from "@stream-io/node-sdk";

// export const streamTokenProvider = async () => {
//   const user = await currentUser();

//   if (!user) throw new Error("User not authenticated");

//   const streamClient = new StreamClient(
//     process.env.NEXT_PUBLIC_STREAM_API_KEY!,
//     process.env.STREAM_SECRET_KEY!
//   );

// const token = streamClient.generateUserToken({ user_id: user.id });

//   return token;
// };
"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
import toast from "react-hot-toast";

export const streamTokenProvider = async () => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not authenticated");

    const client = new StreamClient(
      process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      process.env.STREAM_SECRET_KEY!
    );

    const token = client.generateUserToken({
      user_id: user.id,
      iat: Math.floor(Date.now() / 1000) - 60, // safe backdate
    });

    return token;
  } catch (err: any) {
    // Log for debugging
    console.error("Stream token error:", err);

    // Trigger toast (on client side only!)
    if (typeof window !== "undefined") {
      toast.error(err.message || "Something went wrong");
    }

    throw err; // rethrow so caller can also handle
  }
};

