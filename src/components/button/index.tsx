import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={twMerge(
        'flex h-12 cursor-pointer items-center justify-center rounded-3xl bg-brand px-10 font-sans text-base font-bold text-[#181414] transition-colors hover:bg-brand/90',
        className
      )}
      {...props}
    />
  );
}
