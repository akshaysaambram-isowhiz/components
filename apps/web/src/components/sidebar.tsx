import Link from "next/link";

const components = [
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];

export default function Sidebar() {
  return (
    <div className="h-full space-y-4 border-r p-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Components</h1>
        <p className="text-muted-foreground text-xs">Short desc</p>
      </div>
      <div className="flex flex-col gap-2">
        {components.map((component) => (
          <div key={component.name} className="bg-secondary rounded-md p-2">
            <Link href={component.path}>{component.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
