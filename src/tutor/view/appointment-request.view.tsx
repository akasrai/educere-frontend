import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Button } from 'ui/form/button';
import { PopupAlert } from 'ui/alert/popup-alert';
import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { SuccessMessage, ErrorMessage } from 'ui/alert/toast-alert';
import Hr from 'ui/form/hr';

const appointments = [
  {
    description: 'Web Design workshop to School Children',
    status: 'Accepted',
    date: 'Jul 13th 2020',
    time: '01:00 pm - 03:00 pm',
    requestedBy: 'Janata Mavi',
    location: 'Sauraha, Chitwan',
  },
  {
    description: 'Cloud Computing Session',
    status: 'Pending',
    date: 'Jul 22nd 2020',
    time: '12:00 pm - 02:00 pm',
    requestedBy: 'Theme College',
    location: '12th Rd Down Town, Kathmandu',
  },
  {
    description: 'Guest lecturer on Cloud Computing for BIT students.',
    status: 'Rejected',
    date: 'Jul 13th 2020',
    time: '09:00 am - 11:00 pm',
    requestedBy: 'Fuye College',
    location: 'New Road, Biratnagar',
  },
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
        <div className="row p-0 m-0">
          <div className="col-md-9 p-0 text-muted">
            {appointment.status === 'Accepted' && (
              <span className="accpeted d-block">
                <i className="icon ion-md-checkmark-circle mr-1" />
                Confirmed
              </span>
            )}

            {appointment.status === 'Rejected' && (
              <span className="accpeted d-block bg-danger">
                <i className="icon ion-md-close-circle mr-1" />
                Canceled
              </span>
            )}

            {appointment.status === 'Pending' && (
              <span className="accpeted d-block bg-info">
                <i className="icon ion-md-information-circle mr-1" />
                Pending
              </span>
            )}

            <p className="lead text-primary m-0"> {appointment.description}</p>
            <p className="m-0 d-inline mr-3">
              <i className="icon ion-md-calendar" /> {appointment.date}
            </p>
            <p className="m-0 d-inline mr-3">
              <i className="icon ion-md-time" /> {appointment.time}
            </p>
            <p className="m-0 d-inline mr-3">
              <i className="icon ion-md-person" /> {appointment.requestedBy}
            </p>
            <p className="m-0 d-inline mr-3">
              <i className="icon ion-md-pin" /> {appointment.location}
            </p>
          </div>
          {appointment.status === 'Pending' && (
            <div className="col-md-3 p-0">
              <Button
                name="Accept"
                onClick={handleModalAndAction}
                className="sm btn-outline-success p-1 col-md-7 float-right"
              />

              <Button
                name="Reject"
                onClick={handleModalAndAction}
                className="sm btn-outline-danger p-1 col-md-7 float-right"
              />
            </div>
          )}
          <Hr className="col-md-12 p-0" />
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
  const [action, setAction] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTakingAction, setIsTakingAction] = useState<boolean>(false);

  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <FlexRow className="justify-content-center tutor-list">
        <div className="col-md-12 p-4 border rounded">
          <h5>Appointment Request</h5>
          <Hr className="col-md-12 p-0" />
          <AppointmentList
            setIsModalOpen={setIsModalOpen}
            setAction={setAction}
            action={action}
          />
          <PopupAlert
            alert={isModalOpen}
            title="Are you sure?"
            message={`${
              action === 'Accept'
                ? 'Are you sure you want to accept?'
                : 'Are you sure you want to reject?'
            }`}
            className="md "
            isTakingAction={isTakingAction}
            asyncAction={() => handleRequest(action)}
            toggleConfirmationBox={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AppointmentRequestView;
