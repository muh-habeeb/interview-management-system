"use client";

import ActionCard from "@/src/components/ActionCard";
import { QUICK_ACTIONS } from "@/src/constants";
import { useUserRole } from "@/src/components/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "@/convex/_generated/api";
import MeetingModal from "@/src/components/MeetingModal";
import LoaderUI from "@/src/components/LoaderUI";
import MeetingCard from "@/src/components/MeetingCard";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Doc } from "@/convex/_generated/dataModel";

type Interview = Doc<"interviews">;

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  // const interviews = useQuery(api?.interviews?.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();
  const interviews = useQuery(
    api.interviews.getMyInterviews,
    isLoading ? "skip" : {}
  );

  //login status
  console.log("candidate", isCandidate, "interviewer", isInterviewer);
  //  Only run query if roles are loaded & user is signed in

  const handleQuickAction = (title: string) => {
    switch (title) {
      //this will start the function new call 
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;


  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* WELCOME SECTION */}
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome back!
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates effectively"
            : "Access your upcoming interviews and preparations"}
        </p>
      </div>

      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        <>
          <div>
            <h1 className="text-3xl font-bold">Your Interviews</h1>
            <p className="text-muted-foreground mt-1">
              View and join your scheduled interviews
            </p>
          </div>

          <div className="mt-8">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview: Interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                You have no scheduled interviews at the moment
                interviewer will be scheduled bby the interviewer and it will be displayed hear, then you can join
              </div>
            )}
            {!isInterviewer && (
              <div className="">
                <>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {QUICK_ACTIONS.map((action) => (
                      <ActionCard
                        key={action.title}
                        action={action}
                        onClick={() => handleQuickAction(action.title)}
                      />
                    ))}
                    {/* )).filter((item)=>item.title=="Join Interview")} */}
                  </div>

                  <MeetingModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title={modalType === "join" ? "Join Meeting" : ""}
                    isJoinMeeting={modalType === "join"}
                  />
                </>
              </div>
            )}

            {/* //todo : add join btn  */}
          </div>
        </>
      )}
    </div>
  );
}
