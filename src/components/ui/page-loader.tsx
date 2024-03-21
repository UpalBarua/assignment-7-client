import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[20rem]">
      <Loader2 className="h-12 w-12 animate-spin" />
    </div>
  );
}
