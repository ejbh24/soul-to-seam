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
    sessionStorage.setItem("cross-page-scroll-target", target);
    window.location.href = "/";
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
