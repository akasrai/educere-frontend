import React, { useState } from 'react';

import { Input, TextArea, RadioButton } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { FlexRow } from 'ui/layout/component/flex';
import BubbleBackground from 'ui/layout/bubble-background.layout';

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
        <div key={key} className="col-md-12 row p-0">
          <div className="col-md-4">
            <label className="p-0" htmlFor={`availabilityFrom${element}`}>
              From
            </label>
            <Input
              id={`availabilityFrom${element}`}
              type="date"
              name="availabilityFrom"
              required={true}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor={`availabilityTo${element}`}>To</label>
            <Input
              id={`availabilityTo${element}`}
              type="date"
              name="availabilityTo"
              required={true}
            />
          </div>
          {availabilityType === 'Offline' && (
            <div className="col-md-4">
              <label htmlFor={`location${element}`}>Location</label>
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
              className="icon ion-md-close position-absolute right-0"
              onClick={() => removeSchedule(totalSchedule, setTotalSchedule)}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

const AddAvailibilityForm = () => {
  const [error, setError] = useState<String>('');
  const [totalSchedule, setTotalSchedule] = useState<Array<number>>([1]);
  const [isScheduleFilled, setIsScheduleFilled] = useState<boolean>(true);
  const [availabilityType, setAvailabilityType] = useState<string>('');

  console.log(totalSchedule);

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

        <AvailabilityFormRow
          totalSchedule={totalSchedule}
          availabilityType={availabilityType}
          setTotalSchedule={setTotalSchedule}
        />

        <div
          className={`mb-3 btn btn-link p-0 ${!isScheduleFilled && 'disabled'}`}
          onClick={() =>
            setTotalSchedule([...totalSchedule, totalSchedule.length + 1])
          }
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

const removeSchedule = (
  totalSchedule: Array<number>,
  setTotalSchedule: (props: any) => void
) => {
  totalSchedule.pop();
  console.log(totalSchedule);
  setTotalSchedule([...totalSchedule]);
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
