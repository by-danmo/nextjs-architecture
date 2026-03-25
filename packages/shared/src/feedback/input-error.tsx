import { ErrorIcon } from "../icons/feedback/error.icon";
import { ShouldShow } from "../layout/helpers/should-show";

interface InputErrorProps {
  error?: string;
}

export function InputError({ error }: InputErrorProps) {
  return (
    <ShouldShow when={!!error}>
      <div className="flex items-center gap-2 mt-2 text-xs text-error">
        <ErrorIcon className="size-6 shrink-0" />
        <span>{error}</span>
      </div>
    </ShouldShow>
  );
}
