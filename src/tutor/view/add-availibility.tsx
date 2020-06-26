import React, { useState } from 'react';

import { Input, TextArea } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { FlexRow } from 'ui/layout/component/flex';
import BubbleBackground from 'ui/layout/bubble-background.layout';

const AddAvailibilityForm = () => {
  const [error, setError] = useState<String>('');

  const AvailabilityFormRow = () => {
    return (
      <div className="row">
        <div className="col-md-4">
          <Input
            type="date"
            name="availabilityFrom"
            required={true}
            className={`${error ? 'is-invalid ' : ''}`}
          />
        </div>
        <div className="col-md-4">
          <Input
            type="date"
            name="availabilityTo"
            required={true}
            className={`${error ? 'is-invalid ' : ''}`}
          />
        </div>
        <div className="col-md-4">
          <Input
            type="text"
            name="Location"
            required={true}
            placeholder="Select Location"
            className={`${error ? 'is-invalid ' : ''}`}
          />
        </div>
      </div>
    );
  };

  return (
    <form className="col-12 p-md-3 p-0" onChange={() => setError('')}>
      <label className="col-md-4" htmlFor="availibilityFrom">
        From
      </label>
      <label className="col-md-4" htmlFor="availibilityTo">
        To
      </label>
      <label className="col-md-4" htmlFor="availibilityTo">
        Location
      </label>
      <label htmlFor="availibilityFrom">From</label>
      <ErrorAlert message={error} />
      <AvailabilityFormRow />
      <span className="p-0 mb-3 btn btn-link">Add New Location</span>
      <TextArea
        type="textarea"
        name="description"
        required={true}
        placeholder="Enter description"
        className="col-md-12"
      />
      <div className="col-md-3 p-0">
        <Button name="Add Availibility" className="md btn-primary" />
      </div>
    </form>
  );
};

const AddAvailibilityView = () => {
  return (
    <BubbleBackground className="fixed-height-layout">
      <FlexRow className="justify-content-center">
        <div className="col-md-6 p-5 rounded bg-white">
          <h4 className="mt-0 p-md-3 text-primary bold">
            Add your availability schedule
          </h4>
          <AddAvailibilityForm />
        </div>
      </FlexRow>
    </BubbleBackground>
  );
};
export default AddAvailibilityView;
