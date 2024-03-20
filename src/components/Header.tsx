import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="p-4">
      <div className="w-full sm:container flex items-center justify-between">
        <h1>Conversor Text to EPUB</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
