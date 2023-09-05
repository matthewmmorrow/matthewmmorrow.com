import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react';
import { Education } from '../models/Education';

type EducationCardProps = {
    education: Education
}

export function EducationCard(props:EducationCardProps) {
    const { education } = props;

    return (
      <Card>
        <CardBody className="prose">
          <h4>{education.name}</h4>
          <h5>{education.title} - {education.years}</h5>
          <div className="logo" style={{"backgroundImage":"url('"+education.image + "')"}}></div>
          {education.description && <p>
            {education.description}
          </p>}
        </CardBody>
      </Card>
    );
}
