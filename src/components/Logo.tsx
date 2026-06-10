type Props = { className?: string; withWordmark?: boolean };

export function Logo({ className, withWordmark = true }: Props) {
  return (
    <div className={"flex items-center gap-3 " + (className ?? "")}>
      <svg viewBox="0 0 1000 1000" className="h-7 w-7" aria-hidden="true">
        <path
          d="M474,309.5V499.85C474,605,384.91,690.21,275,690.21V309.5Z"
          fill="currentColor"
        />
        <path
          d="M674,309.8c-110.46,0-200,80.9-200,180.7H674Z"
          fill="currentColor"
        />
        <path
          d="M674,690.5c0-110.46-89.54-200-200-200v200Z"
          fill="currentColor"
        />
      </svg>
      {withWordmark && (
        <span className="font-display text-[0.78rem] tracking-[0.18em] uppercase font-medium">
          Kreativstudio<span className="text-muted-foreground"> Einfluss™</span>
        </span>
      )}
    </div>
  );
}
