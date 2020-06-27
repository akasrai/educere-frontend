import React, { useContext } from 'react';

import { USER_ROLES } from 'app/app.user-type';
import { AuthContext } from 'auth/auth.context';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import TutorOverView from 'dashboard/components/tutor-overview.component';
import InstitutionOverView from 'dashboard/components/institution-overview.component';

const DashboardView = () => {
  const { user, roles } = useContext(AuthContext);

  return (
    <AuthenticatedLayout>
      {roles.includes(USER_ROLES.TUTOR) && <TutorOverView />}
      {roles.includes(USER_ROLES.INSTITUTION) && <InstitutionOverView />}
    </AuthenticatedLayout>
  );
};

export default DashboardView;
