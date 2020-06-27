import React, { useState } from 'react';

import { Button } from 'ui/form/button';
import { FlexRow } from 'ui/layout/component/flex';
import { Input, TextArea, RadioButton } from 'ui/form/input';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const AvailabilityFormRow = ({
  totalSchedule,
  availabilityType,
  setTotalSchedule,
}: {
  totalSchedule: Array<number>;
  availabilityType: string;
  setTotalSchedule: (props: any) => void;
}) => {
  return (
    <React.Fragment>
      {totalSchedule.map((element, key) => (
        <div
          key={key}
          className={`col-md-${
            availabilityType === 'Offline' ? '12' : '8'
          } row p-0`}
        >
          <div
            className={`col-md-${availabilityType === 'Offline' ? '4' : '6'}`}
          >
            {element === 1 && (
              <label className="p-0" htmlFor={`availabilityFrom${element}`}>
                From
              </label>
            )}
            <Input
              id={`availabilityFrom${element}`}
              type="date"
              name="availabilityFrom"
              required={true}
            />
          </div>
          <div
            className={`col-md-${availabilityType === 'Offline' ? '4' : '6'}`}
          >
            {element === 1 && (
              <label htmlFor={`availabilityTo${element}`}>To</label>
            )}
            <Input
              id={`availabilityTo${element}`}
              type="date"
              name="availabilityTo"
              required={true}
            />
          </div>
          {availabilityType === 'Offline' && (
            <div className="col-md-4">
              {element === 1 && (
                <label htmlFor={`location${element}`}>Location</label>
              )}
              <Input
                id={`location${element}`}
                type="text"
                name="location"
                required={true}
                placeholder="Select Location"
              />
            </div>
          )}
          {element === totalSchedule.length && element !== 1 && (
            <i
              className="icon ion-md-close position-absolute availability-close-btn"
              onClick={() => removeSchedule(totalSchedule, setTotalSchedule)}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

const handleSubmit = (e: any) => {
  e.preventDefault();
};

const handleValidation = (input: any, setError: Function) => {
  const inputName = input.name;
  const inputValue = input.value;

  if (!inputValue) {
    return setError('Empty');
  }
  return true;
};

const AddAvailibilityForm = () => {
  const [error, setError] = useState<String>('');
  const [totalSchedule, setTotalSchedule] = useState<Array<number>>([1]);
  const [isScheduleFilled, setIsScheduleFilled] = useState<boolean>(true);
  const [availabilityType, setAvailabilityType] = useState<string>('');

  return (
    <form
      className="col-12 p-md-3 p-0"
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => handleValidation(e.target, setError)}
    >
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

        <AvailabilityFormRow
          totalSchedule={totalSchedule}
          availabilityType={availabilityType}
          setTotalSchedule={setTotalSchedule}
        />
      </FlexRow>
      <div
        className="mb-3 btn btn-link p-0"
        onClick={() =>
          setTotalSchedule([...totalSchedule, totalSchedule.length + 1])
        }
      >
        Add New Schedule
      </div>

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

const removeSchedule = (
  totalSchedule: Array<number>,
  setTotalSchedule: (props: any) => void
) => {
  totalSchedule.pop();
  setTotalSchedule([...totalSchedule]);
};

const AddAvailibilityView = () => {
  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <h3 className="p-3"> Appointment Requests</h3>
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-3 m-3 rounded border">
          {/* <h3 className="mt-0 text-primary">Appointment Requests</h3> */}
          <AddAvailibilityForm />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};
export default AddAvailibilityView;
