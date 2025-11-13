import * as React from "react";
import clsx from "clsx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={clsx(
        "flex w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-black",
        "placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});