import React from "react";
import TeamSection from "../common/TeamSection";
import { mentors } from "@/data/mentor";

const Mentors = () => {
  return (
    <TeamSection
      title="Introducing Our Mentors"
      description="Behind every milestone we achieve is the unwavering support of our mentors."
      people={mentors}
    />
  );
};

export default Mentors;
