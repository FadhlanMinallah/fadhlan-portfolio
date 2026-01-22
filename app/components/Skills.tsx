import MotionWrapper from "./MotionWrapper";

const skills = {
  frontend: [
    "Next.js",
    "React",
    "Vue.js",
    "Nuxt.js",
    "Inertia.js",
    "Tailwind CSS",
  ],
  backend: ["Laravel", "Express.js", "MySQL", "MongoDB"],
  mobile: ["Flutter", "React Native"],
  tools: ["Git", "GitHub", "GitLab", "Figma", "Postman"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <MotionWrapper>
        <h3 className="section-title">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card">
              <h4 className="font-semibold capitalize mb-3">{category}</h4>
              <ul className="flex flex-wrap gap-2 text-sm text-neutral-400">
                {items.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}