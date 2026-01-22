import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Selected <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-xl text-zinc-400">
          We are currently crafting high-performance digital assets for our clients.
          <br />
          Stay tuned for the showcase of "Unlocked Diving" and more.
        </p>
        <div className="pt-8">
          <Link href="/">
            <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-900 rounded-full px-8">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}