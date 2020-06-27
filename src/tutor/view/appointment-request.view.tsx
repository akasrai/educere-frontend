import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Button } from 'ui/form/button';
import { PopupAlert } from 'ui/alert/popup-alert';
import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { SuccessMessage, ErrorMessage } from 'ui/alert/toast-alert';

const appointments = [
  { id: 1, description: 'Conference for SEE students.', status: 'Accepted' },
  { id: 2, description: 'Conference for +2 students.', status: 'Pending' },
  { id: 3, description: 'Conference for BIT students.', status: 'Rejected' },
];

const AppointmentList = ({
  setIsModalOpen,
  setAction,
  action,
}: {
  setIsModalOpen: (props: any) => void;
  setAction: (props: any) => void;
  action: string;
}) => {
  function handleModalAndAction() {
    setIsModalOpen(true);
    if (action === 'Accept') {
      setAction('Reject');
    } else {
      setAction('Accept');
    }
  }
  return (
    <div className="p-1">
      {appointments.map((appointment, key) => (
        <div className="row pb-2">
          <span className="col-md-8 appointment-text">
            {appointment.description}
          </span>
          {appointment.status === 'Pending' ? (
            <React.Fragment>
              <span className="col-md-2 p-1"></span>
              <div className="col-md-1 p-1">
                <Button
                  name="Accept"
                  onClick={handleModalAndAction}
                  className="sm btn-outline-success p-1"
                />
              </div>
              <div className="col-md-1 p-1">
                <Button
                  name="Reject"
                  onClick={handleModalAndAction}
                  className="sm btn-outline-danger p-1"
                />
              </div>
            </React.Fragment>
          ) : (
            <div className="col-md-4 p-1 text-right text-white">
              <span
                className={`p-1 ${
                  appointment.status === 'Accepted'
                    ? 'btn-sm bg-success pt-2 pb-2 pr-3 pl-3'
                    : 'btn-sm bg-danger pt-2 pb-2 pr-3 pl-3'
                }`}
              >
                {appointment.status}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const handleRequest = (action: string) => {
  if (action === 'Accept') {
    return toast.success(
      <SuccessMessage
        message={'Appointment request has been accepted successfully.'}
      />
    );
  }

  return toast.error(
    <ErrorMessage
      message={'Appointment request has been cancelled successfully.'}
    />
  );
};

const AppointmentRequestView = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTakingAction, setIsTakingAction] = useState<boolean>(false);
  const [action, setAction] = useState<string>('');

  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <h3 className="p-3"> Appointment Requests</h3>
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-3 m-3 rounded border">
          <AppointmentList
            setIsModalOpen={setIsModalOpen}
            setAction={setAction}
            action={action}
          />
          {console.log(isTakingAction, isModalOpen)}
          <PopupAlert
            alert={isModalOpen}
            title="Are you sure?"
            message={`${
              action === 'Accept'
                ? 'Are you sure you want to accept?'
                : 'Are you sure you want to reject?'
            }`}
            className="sm"
            asyncAction={() => handleRequest(action)}
            isTakingAction={isTakingAction}
            toggleConfirmationBox={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};
export default AppointmentRequestView;
