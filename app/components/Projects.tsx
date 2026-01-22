import MotionWrapper from "./MotionWrapper";

const projects = [
  "Learning Management System (LMS)",
  "Smart Classroom Platform",
  "Driver Monitoring System",
  "POS & Attendance System",
  "Workshop Booking Mobile App",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <MotionWrapper>
        <h3 className="section-title">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project} className="card">
              {project}
            </div>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}