import React, { useState } from 'react';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { toast } from 'react-toastify';
import { SuccessMessage } from 'ui/alert/toast-alert';
import { Button } from 'ui/form/button';
import { TextArea, Input } from 'ui/form/input';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { addExperties } from 'api/request.api';

const ExpertiseFormRow = ({
  totalExpertise,
  setTotalExpertise,
}: {
  totalExpertise: Array<number>;
  setTotalExpertise: (props: any) => void;
}) => {
  return (
    <React.Fragment>
      {totalExpertise.map((element, key) => (
        <FlexRow key={key}>
          <div className="col-md-3">
            {element === 1 && <label htmlFor={`name${element}`}>Field</label>}
            <Input
              type="text"
              name={`name${element}`}
              id={`name${element}`}
              required={true}
              placeholder="Field"
            />
          </div>
          <div className="col-md-3">
            {element === 1 && (
              <label htmlFor={`category${element}`}>Category</label>
            )}
            <Input
              type="text"
              name={`category${element}`}
              id={`category${element}`}
              required={true}
              placeholder="Category"
            />
          </div>
          <div className="col-md-2">
            {element === 1 && (
              <label htmlFor={`experience${element}`}>Experience</label>
            )}
            <Input
              type="number"
              name={`experience${element}`}
              id={`experience${element}`}
              required={true}
              placeholder="Experience"
            />
          </div>
          <div className="col-md-4">
            {element === 1 && (
              <label htmlFor={`description${element}`}>Description</label>
            )}
            <TextArea
              type="textarea"
              name={`description${element}`}
              id={`description${element}`}
              required={true}
              placeholder="Enter description"
              className="col-md-12"
            />
          </div>
          {element === totalExpertise.length && element !== 1 && (
            <i
              className="icon ion-md-close position-absolute expertise-close-btn text-danger"
              onClick={() => removeExpertise(totalExpertise, setTotalExpertise)}
            />
          )}
        </FlexRow>
      ))}
    </React.Fragment>
  );
};

const handleSubmit = async (
  e: any,
  setError: Function,
  setTotalExpertise: Function
) => {
  e.preventDefault();

  const formData: any = getFormData(e.target);
  await addExperties(formData).then((response: any) => {
    // if (response.error) {
    //   return setError('Network Error');
    // }

    return toast.success(
      <SuccessMessage message={'Expetise has been added successfully'} />
    );
  });
};
const getFormData = (inputs: any) => {
  const formData: Array<object> = [];
  for (let i = 0; i < inputs.length - 1; i += 4) {
    const data: any = {};
    for (let j = 0; j < 4; j++) {
      const tempName = inputs[i + j].name.replace(/[0-9]/g, '');
      if (inputs[i + j].name) data[tempName] = inputs[i + j].value;
    }
    formData.push(data);
  }
  return formData;
};

const removeExpertise = (
  totalSchedule: Array<number>,
  setTotalSchedule: (props: any) => void
) => {
  totalSchedule.pop();
  setTotalSchedule([...totalSchedule]);
};

const AddExpertiseForm = () => {
  const [totalExpertise, setTotalExpertise] = useState<Array<number>>([1]);
  const [error, setError] = useState<string>('');

  return (
    <form
      className="col-12 p-md-3 p-0"
      onSubmit={(e) => handleSubmit(e, setError, setTotalExpertise)}
    >
      <ErrorAlert message={error} />
      <ExpertiseFormRow
        totalExpertise={totalExpertise}
        setTotalExpertise={setTotalExpertise}
      />
      <div
        className="mb-3 btn btn-link"
        onClick={() =>
          setTotalExpertise([...totalExpertise, totalExpertise.length + 1])
        }
      >
        Add New Expertise
      </div>
      <div className="col-md-3 p-0">
        <Button name="Add Expertise" className="md btn-primary" />
      </div>
    </form>
  );
};

const AddExpertiseView = () => {
  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <p className="p-0">Add Expertise</p>
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-4 border">
          <AddExpertiseForm />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AddExpertiseView;
