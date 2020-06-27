import React from 'react';
import { Link } from 'react-router-dom';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const Tutor = () => (
  <div className="col-md-3 p-2">
    <div className="w-100 rounded border tutor">
      <div className="image">
        <img
          src="https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4"
          alt="dp"
        />
      </div>
      <p className="bold m-0">Pasang Dorje Lama</p>
      <p className="small">Teacher</p>
      <Link to="" className="col-12 btn btn-md btn-outline-primary p-1">
        <span className="small">View Details</span>
      </Link>
      <div />
    </div>
  </div>
);

const FindTutorView = () => {
  return (
    <AuthenticatedLayout>
      <p className="p-0">Tutors</p>
      <FlexRow className="tutor-list">
        {Array.from(Array(100)).map((key) => (
          <Tutor />
        ))}
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default FindTutorView;
