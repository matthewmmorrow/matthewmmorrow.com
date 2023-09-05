import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { Experience } from "../models/Experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard(props: ExperienceCardProps) {
  const { experience } = props;

  return (
    <Card>
      <CardBody className="prose">
        <h4>{experience.name}</h4>
        <h5>
          {experience.title} - {experience.years}
        </h5>
        <div
          className="logo"
          style={{ backgroundImage: "url('" + experience.image + "')" }}
        ></div>
        {experience.description && <p>{experience.description}</p>}
      </CardBody>
    </Card>
  );
}
