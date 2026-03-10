"use client";

export function CrossPageScrollButton({
  target,
  children,
  className,
}: {
  target: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    window.location.href = `/?section=${target}`;
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
