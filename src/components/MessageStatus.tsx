import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MessageStatusProps = {
  status: "success" | "error";
  onAction: () => void;
};

export default function MessageStatus({
  status,
  onAction,
}: MessageStatusProps) {
  const isSuccess = status === "success";
  const Icon = isSuccess ? Check : X;

  return (
    <div className="text-center">
      <div className="section-background-hero flex min-h-64 items-center justify-center border-b border-white/10">
        <div
          className={`grid size-24 place-items-center rounded-full ring-1 ring-offset-10 ring-offset-transparent ${
            isSuccess
              ? "bg-[#316b76] ring-[#20a4b8]/30"
              : "bg-rose-600 ring-rose-500/40"
          }`}
        >
          <Icon className="size-12 stroke-[3]" />
        </div>
      </div>

      <div className="px-6 py-9">
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl text-white">
            {isSuccess ? "Thanks for Reaching Out!" : "Message Not Sent"}
          </DialogTitle>
          <DialogDescription className="max-w-sm text-base leading-7 text-zinc-400">
            {isSuccess
              ? "I've received your message and will get back to you shortly."
              : "Something went wrong. Let's try resending it."}
          </DialogDescription>
        </DialogHeader>

        <Button
          type="button"
          variant="portfolioPill"
          className="mt-8 h-12 w-full"
          onClick={onAction}
        >
          {isSuccess ? "Back to Home" : "Try Again"}
        </Button>
      </div>
    </div>
  );
}
