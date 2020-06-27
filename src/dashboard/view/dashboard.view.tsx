import React, { useContext } from 'react';

import { AuthContext } from 'auth/auth.context';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import TutorOverView from 'dashboard/components/tutor-overview.component';

const DashboardView = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthenticatedLayout>
      <h3 className="p-3">
        Hi, <span className="bold">{user.name}!</span>
      </h3>
      <TutorOverView />
    </AuthenticatedLayout>
  );
};

export default DashboardView;
