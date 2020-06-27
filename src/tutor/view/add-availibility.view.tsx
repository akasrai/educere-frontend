import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Button } from 'ui/form/button';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { FlexRow } from 'ui/layout/component/flex';
import { SuccessMessage } from 'ui/alert/toast-alert';
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
              name={`availabilityFrom${element}`}
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
              name={`availabilityTo${element}`}
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
                name={`location${element}`}
                required={true}
                placeholder="Select Location"
              />
            </div>
          )}
          {element === totalSchedule.length && element !== 1 && (
            <i
              className="icon ion-md-close position-absolute availability-close-btn text-danger"
              onClick={() => removeSchedule(totalSchedule, setTotalSchedule)}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

const handleSubmit = async (
  e: any,
  setError: Function,
  availabilityType: string
) => {
  e.preventDefault();

  const formData: any = getFormData(e.target, setError, availabilityType);
  console.log(formData);

  // const response = await sendData(formData);

  // if (response) {
  toast.success(
    <SuccessMessage
      message={'Availability Schedule has been added successfully'}
    />
  );
  // }
};

const getFormData = (
  inputs: any,
  setError: Function,
  availabilityType: string
) => {
  const formData: any = [];
  // console.log(inputs.length);
  // const totalField = availabilityType==='Offline'?7:6
  // for (let i = 0; i < inputs.length - 1; i = +6) {
  //   const data: any = {};
  //   for (let j = 0; j < 6; j++) {
  //     const tempName = inputs[i + j].name.replace(/[0-9]/g, '');
  //     if (inputs[i + j].type === 'radio') {
  //       if (inputs[i + j].checked) data[tempName] = inputs[i + j].value;
  //       continue;
  //     }
  //     if (inputs[i + j].name) data[tempName] = inputs[i + j].value;
  //   }
  //   formData.push(data);
  // }

  return formData;
};

const AddAvailibilityForm = () => {
  const [totalSchedule, setTotalSchedule] = useState<Array<number>>([1]);
  const [availabilityType, setAvailabilityType] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <form
      className="col-12 p-md-3 p-0"
      onSubmit={(e) => handleSubmit(e, setError, availabilityType)}
    >
      <ErrorAlert message={error} />
      <FlexRow className="tutor-list">
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

export const sendData = (formData: any) => {
  const data = new Promise((resolve) => {
    setTimeout((resolveResponse) => {
      if (resolveResponse) {
        resolve({
          message: 'Availability Schedule added successfully',
        });
      }
    }, 1500);
  });

  return data;
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
      <p className="p-0">Add Availability Schedule</p>
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-4 border">
          <AddAvailibilityForm />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};
export default AddAvailibilityView;
