import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Paper } from '@mui/material';

import { InputText } from 'src/components/shared/input';

import { TestCompValues } from './types';

const TestComponents2 = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<TestCompValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    console.log('Data: ', data);
  };

  return (
    <form>
      <Paper
        style={{
          display: 'grid',
          gridRowGap: '20px',
          padding: '20px',
          margin: '10px 300px',
        }}
      >
        <InputText
          control={control}
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
        />
        <InputText
          control={control}
          name="lastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
        />
        <div>
          <Button onClick={() => reset()} variant="outlined">
            Reset
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Submit
          </Button>
        </div>
      </Paper>
    </form>
  );
};

export default TestComponents2;
