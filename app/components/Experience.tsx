import MotionWrapper from "./MotionWrapper";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <MotionWrapper>
        <h3 className="section-title">Experience</h3>
        <div className="space-y-6 mt-6">
          <div className="card">
            <h4 className="font-semibold">PT Ayodya Dialog Semesta</h4>
            <p className="text-sm text-neutral-400">
              Frontend Engineer (Nov 2025 – Present)
            </p>
            <p className="mt-2 text-neutral-400">
              Developed real-time driver monitoring dashboards, map
              visualizations, route & polygon rendering, reporting features, and
              API integrations.
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold">PT Intek Sarana Sejahtera</h4>
            <p className="text-sm text-neutral-400">
              Web Developer (Jun 2019 – Mar 2025)
            </p>
            <p className="mt-2 text-neutral-400">
              Built LMS platforms, smart classroom systems, and mobile
              applications with responsive and accessible UI implementations.
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Freelancer</h4>
            <p className="text-sm text-neutral-400">
              Fullstack Developer (Jul 2023 – Apr 2025)
            </p>
            <p className="mt-2 text-neutral-400">
              Developed POS systems, attendance apps, landing pages, digital
              signage, and Android applications for real-world business needs.
            </p>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}