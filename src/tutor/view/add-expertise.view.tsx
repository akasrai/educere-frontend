import React, { useState } from 'react';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { toast } from 'react-toastify';
import { SuccessMessage } from 'ui/alert/toast-alert';
import { Button } from 'ui/form/button';
import { TextArea, Input, Select } from 'ui/form/input';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { addExperties } from 'api/request.api';
import { categories } from 'data/mock.data';
import Hr from 'ui/form/hr';

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
          <div className="col-md-6">
            <Input
              type="text"
              required={true}
              id={`name${element}`}
              name={`name${element}`}
              label="Area of experties"
              placeholder="Area of experties"
            />
          </div>
          <div className="col-md-3">
            <Select
              type="text"
              required={true}
              placeholder="Category"
              label="Category"
              options={categories}
              id={`category${element}`}
              name={`category${element}`}
            />
          </div>
          <div className="col-md-3">
            <Input
              type="number"
              required={true}
              label="Experience years"
              placeholder="Experience years"
              id={`experience${element}`}
              name={`experience${element}`}
            />
          </div>
          <div className="col-md-12">
            <TextArea
              type="textarea"
              name={`description${element}`}
              id={`description${element}`}
              required={true}
              label="Description"
              placeholder="Enter description"
              className="col-md-12"
            />
          </div>
          {element === totalExpertise.length && element !== 1 && (
            <span
              className="expertise-close-btn small text-danger pr-3"
              onClick={() => removeExpertise(totalExpertise, setTotalExpertise)}
            >
              Remove Row
            </span>
          )}
          <div className="col-md-12 pl- pr-2">
            <Hr className="col-md-12 ml-0 mr-0 p-0" />
          </div>
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
        Add New Row
      </div>
      <div className="col-md-3 pl-3 pr-3">
        <Button name="Add Expertise" className="md btn-primary" />
      </div>
    </form>
  );
};

const AddExpertiseView = () => {
  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <p className="p-0">Add Expertise</p>
      <FlexRow className="justify-content-center tutor-list">
        <div className="col-md-12 p-4 border">
          <AddExpertiseForm />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AddExpertiseView;
