import {
  Dumbbell,
  HeartPulse,
  Flame,
  Play,
  Zap,
  Sparkles,
  Target,
  TrendingUp,
  Circle,
  Award,
  BarChart3,
} from "lucide-react";

function Programs() {
  const programs = [
    {
      number: "01",
      title: "WEIGHT TRAINING",
      description: "Build strength with purpose.",
      icon: Dumbbell,
    },
    {
      number: "02",
      title: "CARDIO",
      description: "Push your endurance further.",
      icon: HeartPulse,
    },
    {
      number: "03",
      title: "CROSSFIT",
      description: "High-energy, functional training.",
      icon: Flame,
    },
    {
      number: "04",
      title: "ZUMBA",
      description: "Move to a stronger rhythm.",
      icon: Play,
    },
    {
      number: "05",
      title: "AEROBICS",
      description: "Conditioning that keeps you moving.",
      icon: Zap,
    },
    {
      number: "06",
      title: "DANCE FITNESS",
      description: "Find your pace. Own the room.",
      icon: Sparkles,
    },
    {
      number: "07",
      title: "PERSONAL TRAINING",
      description: "Your goals. Your game plan.",
      icon: Target,
    },
    {
      number: "08",
      title: "NUTRITION CONSULTING",
      description: "Make every choice count.",
      icon: TrendingUp,
    },
    {
      number: "09",
      title: "YOGA",
      description: "Mobility, balance, clarity.",
      icon: Circle,
    },
    {
      number: "10",
      title: "BOLLYFIT",
      description: "Desi energy, serious burn.",
      icon: Award,
    },
    {
      number: "11",
      title: "BODY ASSESSMENT",
      description: "Know where you stand.",
      icon: BarChart3,
    },
    {
      number: "12",
      title: "STEAM BATH",
      description: "Recover like you mean it.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="programs-section" id="programs">

      <div className="programs-header">

        <div>
          <div className="section-label programs-label">
            03 / TRAIN YOUR WAY
          </div>

          <h2>
            FIND YOUR
            <br />
            <span>EDGE.</span>
          </h2>
        </div>

        <p>
          Strength, movement, conditioning, recovery.
          Choose the program that moves you.
        </p>

      </div>

      <div className="program-grid">

        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <div className="program-card" key={program.number}>

              <span className="program-number">
                {program.number}
              </span>

              <div className="program-icon">
                <Icon size={26} strokeWidth={1.7} />
              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.description}
              </p>

              <span className="program-arrow">
                ↗
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Programs;