import {
  ShieldCheck,
  Dumbbell,
  UsersRound,
  Sparkles,
} from "lucide-react";

function WhySpartns() {
  const features = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "CLEAN FACILITIES",
      description:
        "A comfortable, well-maintained space that keeps you focused.",
    },
    {
      number: "02",
      icon: Dumbbell,
      title: "MODERN EQUIPMENT",
      description:
        "Reliable cardio and resistance equipment for effective sessions.",
    },
    {
      number: "03",
      icon: UsersRound,
      title: "EXPERT TRAINERS",
      description:
        "Supportive, knowledgeable guidance whenever you need it.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "COMPLETE FITNESS",
      description:
        "Training, nutrition, assessments and recovery under one roof.",
    },
  ];

  return (
    <section className="why-section" id="why">

      <div className="why-header">

        <div>
          <div className="section-label why-label">
            02 / WHY SPARTNS
          </div>

          <h2>
            BUILT FOR
            <br />
            <span>BETTER.</span>
          </h2>
        </div>

        <p>
          Everything you need to make showing up the easiest part
          of your routine.
        </p>

      </div>

      <div className="feature-grid">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={feature.number}>

              <span className="feature-number">
                {feature.number}
              </span>

              <div className="feature-icon">
                <Icon size={27} strokeWidth={1.8} />
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

              <span className="feature-arrow">
                ↗
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WhySpartns;