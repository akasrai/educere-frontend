import React, { useState } from 'react';

import { Input, TextArea, RadioButton } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { FlexRow } from 'ui/layout/component/flex';
import BubbleBackground from 'ui/layout/bubble-background.layout';

const AddAvailibilityForm = () => {
  const [error, setError] = useState<String>('');
  const [totalSchedule, setTotalSchedule] = useState<number>(1);
  const [isScheduleFilled, setIsScheduleFilled] = useState<boolean>(true);
  const [availabilityType, setAvailabilityType] = useState<String>('');

  const AvailabilityFormRow = () => {
    return (
      <React.Fragment>
        {[...Array(totalSchedule)].map((elem, key) => (
          <div key={key} className="col-md-12 row p-0">
            <div className="col-md-4">
              <label
                className="p-0"
                htmlFor={`availabilityFrom${totalSchedule}`}
              >
                From
              </label>
              <Input
                type="date"
                name={`availabilityFrom${totalSchedule}`}
                required={true}
                className={`${error ? 'is-invalid ' : ''}`}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor={`availabilityTo${totalSchedule}`}>To</label>
              <Input
                type="date"
                name={`availabilityTo${totalSchedule}`}
                required={true}
                className={`${error ? 'is-invalid ' : ''}`}
              />
            </div>
            {availabilityType === 'Offline' && (
              <div className="col-md-4">
                <label htmlFor={`location${totalSchedule}`}>Location</label>
                <Input
                  type="text"
                  name={`location${totalSchedule}`}
                  required={true}
                  placeholder="Select Location"
                  className={`${error ? 'is-invalid ' : ''}`}
                />
              </div>
            )}
            {totalSchedule >= 2 && (
              <i
                className="icon ion-md-close position-absolute right-0"
                onClick={() => setTotalSchedule(totalSchedule - 1)}
              />
            )}
          </div>
        ))}
      </React.Fragment>
    );
  };

  return (
    <form className="col-12 p-md-3 p-0">
      <FlexRow>
        <div className="col-md-12 clearfix p-0">
          <div className="col-md-3 float-left p-0">
            <RadioButton
              id="availableOnline"
              name="availabilityType"
              value="Online"
              required={true}
              onChange={(e) => setAvailabilityType('Online')}
            />
          </div>
          <div className="col-md-3 float-left p-0">
            <RadioButton
              id="availableOffline"
              name="availabilityType"
              value="Offline"
              required={true}
              onChange={(e) => setAvailabilityType('Offline')}
            />
          </div>
        </div>

        <AvailabilityFormRow />

        <div
          className={`mb-3 btn btn-link p-0 ${!isScheduleFilled && 'disabled'}`}
          onClick={() => setTotalSchedule(totalSchedule + 1)}
        >
          Add New Schedule
        </div>
      </FlexRow>

      <div>
        <label htmlFor="description">Description</label>
        <TextArea
          type="textarea"
          name="description"
          required={true}
          placeholder="Enter description"
          className="col-md-12"
        />
      </div>
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
        <div className="col-md-6 p-5 m-3 rounded bg-white">
          <h4 className="mt-0 p-md-3 text-primary bold">
            <i className="icon ion-md-time mr-2" />
            Add your availability schedule
            <span className="border-bottom mt-2 d-block"></span>
          </h4>
          <AddAvailibilityForm />
        </div>
      </FlexRow>
    </BubbleBackground>
  );
};
export default AddAvailibilityView;
