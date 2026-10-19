import Navbar from "@/components/navbar";
import Animation from "@/components/animation";
import Start from "@/components/start";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto px-4 w-full">
      <Animation />

      <Navbar />

      <Start />
    </div>
  );
}
