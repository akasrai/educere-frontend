import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { fetchAllTutors } from 'api/resource.api';
import { FlexRow } from 'ui/layout/component/flex';
import { Tutor } from 'institution/institution.type';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const getTutors = async (setTutors: (props: any) => void) => {
  const { data, error } = await fetchAllTutors();

  if (error) {
    return;
  }

  setTutors(data.result);
};

const TutorCard = ({ tutor }: { tutor: Tutor }) => (
  <div className="col-md-3 p-2">
    <div className="w-100 rounded border tutor">
      {tutor.dp ? (
        <div className="image">
          <img src={tutor.dp} alt="dp" />
        </div>
      ) : (
        <i className="icon ion-md-contact tutor-list-dp text-muted" />
      )}
      <p className="bold m-0">
        {tutor.firstName} {tutor.lastName}
      </p>
      <p className="small">Teacher</p>
      <Link to="" className="col-12 btn btn-md btn-outline-primary p-1">
        <span className="small">View Details</span>
      </Link>
      <div />
    </div>
  </div>
);

const FindTutorView = () => {
  const [tutors, setTutors] = useState<Array<Tutor>>([]);

  useEffect(() => {
    getTutors(setTutors);
  }, []);

  return (
    <AuthenticatedLayout>
      <p className="p-0">Tutors</p>
      <FlexRow className="tutor-list">
        {tutors.map((tutor, key) => (
          <TutorCard key={key} tutor={tutor} />
        ))}
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default FindTutorView;
