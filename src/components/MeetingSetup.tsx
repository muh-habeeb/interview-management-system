import {
  CallingState,
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { CameraIcon, CopyIcon, MicIcon, SettingsIcon } from "lucide-react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { CopyToClipboard } from "../components/CopyBtn"


function MeetingSetup({ onSetupComplete }: { onSetupComplete: () => void }) {
  const [isCameraDisabled, setIsCameraDisabled] = useState(true);
  const [isMicDisabled, setIsMicDisabled] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  const call = useCall();

  // Camera effect
  useEffect(() => {
    if (!call) return;
    if (isCameraDisabled) call.camera.disable();
    else call.camera.enable();
  }, [isCameraDisabled, call]);

  // Mic effect
  useEffect(() => {
    if (!call) return;
    if (isMicDisabled) call.microphone.disable();
    else call.microphone.enable();
  }, [isMicDisabled, call]);

  // Reset hasJoined if user leaves the call
  useEffect(() => {
    if (!call) return;
    const handleCallingStateChange = () => {
      if (call.state.callingState !== CallingState.JOINED) {
        setHasJoined(false);
      }
    };


  }, [call]);

  const handleJoin = async () => {
    if (!call) return;

    if (hasJoined || call.state.callingState === CallingState.JOINED) {
      toast.success("You are already in the meeting.");
      return;
    }

    try {
      setHasJoined(true); //prevent multiple clicks
      await call.join();
      onSetupComplete();
    } catch (err: any) {
      console.error("Join failed:", err);
      if (err.message?.includes("blocked")) {
        toast.error("You cannot join this call — your account was blocked.");
      } else if (err.status === 403) {
        toast.error("You are blocked from joining this call.");
      } else {
        toast.error("Failed to join the call. Please try again later.");
      }
    }
  };

  if (!call) return <p>Loading call...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background/95">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Preview */}
          <Card className="md:col-span-1 p-6 flex flex-col">
            <h1 className="text-xl font-semibold mb-1">Camera Preview</h1>
            <p className="text-sm text-muted-foreground">Make sure you look good!</p>
            <div className="mt-4 flex-1 min-h-[400px]  rounded-xl overflow-hidden bg-muted/50 border relative">
              <VideoPreview className="absolute" mirror={true}/>
            </div>
          </Card>

          {/* Controls & copy id bt */}
          <Card className="md:col-span-1 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">Meeting Details</h2>
              <p className="flex justify-between text-sm text-muted-foreground break-all p-1 dark:bg-zinc-700  rounded-md bg-ring ">
                <span className="dark:bg-neutral-800  px-2 rounded-md text-white">{call.id}</span>
                <span className="flex items-center justify-center">
                {/*copy btn*/}  <CopyToClipboard value={call.id} textMode />
                </span>
              </p>
            </div>

            <div className="space-y-6 mt-8">
              {/* Camera  */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CameraIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Camera</p>
                    <p className="text-sm text-muted-foreground">
                      {isCameraDisabled ? "Off" : "On"}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={!isCameraDisabled}
                  onCheckedChange={(checked) => setIsCameraDisabled(!checked)}
                />
              </div>

              {/* Mic */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MicIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Microphone</p>
                    <p className="text-sm text-muted-foreground">
                      {isMicDisabled ? "Off" : "On"}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={!isMicDisabled}
                  onCheckedChange={(checked) => setIsMicDisabled(!checked)}
                />
              </div>

              {/* Device settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <SettingsIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Settings</p>
                    <p className="text-sm text-muted-foreground">Configure devices</p>
                  </div>
                </div>
                <DeviceSettings />
              </div>
            </div>

            <Button className="w-full mt-6" size="lg" onClick={handleJoin} disabled={hasJoined}>
              {hasJoined ? "Joined" : "Join Meeting"}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Do not worry, our team is super friendly! We want you to succeed. 🎉
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MeetingSetup;
