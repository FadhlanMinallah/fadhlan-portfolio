"use client";
import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center">
      <MotionWrapper>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fadhlan Minallah
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 text-neutral-400">
            Frontend & Fullstack Developer
          </h2>
          <p className="mt-6 max-w-xl text-neutral-400">
            Passionate web developer focused on building modern, scalable, and
            user-centric applications using Next.js, Vue, Laravel, and other
            modern technologies.
          </p>
        </div>
      </MotionWrapper>
    </section>
  );
}