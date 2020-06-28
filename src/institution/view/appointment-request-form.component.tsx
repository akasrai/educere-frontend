import React, { useState } from 'react';
import { FlexRow, Flex } from 'ui/layout/component/flex';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { Input, TextArea, RadioButton } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { toast } from 'react-toastify';
import { SuccessMessage } from 'ui/alert/toast-alert';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const handleSubmit = async (e: any, setError: Function) => {
  e.preventDefault();

  const formData: any = getFormData(e.target);
  // await requestAppointment(formData).then((response: any) => {
  //   // if (response.error) {
  //   //   return setError('Network Error');
  //   // }

  return toast.success(
    <SuccessMessage
      message={'Appointment request has been sent successfully'}
    />
  );
  // });
};

const getFormData = (inputs: any) => {
  const formData: any = {};
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'radio') {
      if (inputs[i].checked) formData[inputs[i].name] = inputs[i].value;
      continue;
    }
    if (inputs[i].name) formData[inputs[i].name] = inputs[i].value;
  }
  return formData;
};

const AppointmentRequestForm = () => {
  const [error, setError] = useState<string>('');
  const [availabilityType, setAvailabilityType] = useState<string>('');
  return (
    <form
      className="col-12 p-md-3 p-0"
      onSubmit={(e) => handleSubmit(e, setError)}
    >
      <h4 className="p-2">Appointment Request Form</h4>

      <ErrorAlert message={error} />
      <div className="col-md-12">
        <Input
          type="text"
          name="agenda"
          id="agenda"
          required={true}
          label="Agenda"
          placeholder="Agenda"
        />
      </div>
      <div className="col-md-12">
        <Input
          type="date"
          name="date"
          id="date"
          required={true}
          label="Date"
          placeholder="Choose Date"
        />
      </div>
      <FlexRow>
        <div className="col-md-6">
          <Input
            type="time"
            name="startTime"
            id="startTime"
            required={true}
            label="Start Time"
            placeholder="Start Time"
          />
        </div>
        <div className="col-md-6">
          <Input
            type="time"
            name="endTime"
            id="endTime"
            required={true}
            label="End Time"
            placeholder="End Time"
          />
        </div>
      </FlexRow>
      <FlexRow>
        <div className="col-md-3">
          <RadioButton
            id="availableOnline"
            name="availabilityType"
            value="Online"
            required={true}
            onChange={(e) => setAvailabilityType('Online')}
          />
        </div>
        <div className="col-md-9">
          <RadioButton
            id="availableOffline"
            name="availabilityType"
            value="Offline"
            required={true}
            onChange={(e) => setAvailabilityType('Offline')}
          />
        </div>
      </FlexRow>
      {availabilityType === 'Offline' && (
        <div className="col-md-12">
          <Input
            type="text"
            name="location"
            id="location"
            required={true}
            label="Location"
            placeholder="Location"
          />
        </div>
      )}

      <div className="col-md-12">
        <TextArea
          type="textarea"
          name="description"
          required={true}
          label="Description"
          placeholder="Enter description"
          className="col-md-12"
        />
      </div>
      <div className="col-md-4">
        <Button name="Send Request" className="md btn-primary" />
      </div>
    </form>
  );
};

const AppointmentRequestFormView = () => {
  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <FlexRow>
        <div className="col-md-6 p-4 rounded border">
          <AppointmentRequestForm />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AppointmentRequestFormView;
