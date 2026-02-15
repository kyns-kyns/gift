import { dayMessages } from "@/data/messages";

function Message({ id }: { id: string }) {
  const lines = dayMessages[id] ?? [
    "Some things don’t need explanation."
  ];

  return (
    <div className="max-w-xl text-lg leading-relaxed space-y-4">
      {lines.map((line, i) => (
        <p
          key={i}
          className="animate-fadeIn"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
