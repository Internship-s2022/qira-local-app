import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Paper } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { InputText } from 'src/components/shared/input';

import styles from './test.module.css';
import { TestCompValues } from './types';

const schema = Joi.object({
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const TestComponents = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<TestCompValues>({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Data: ', data);
  };

  return (
    <form>
      <Paper
        style={{
          display: 'grid',
          gridRowGap: '10px',
          padding: '20px',
          margin: '10px 300px',
        }}
      >
        <InputText
          control={control}
          name="firstName"
          label="First name"
          variant="outlined"
          margin="dense"
          size="small"
          fullWidth={true}
        />
        <InputText
          control={control}
          name="email"
          optionalLabel="Email"
          variant="outlined"
          margin="dense"
          size="small"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon style={{ color: '#F05523' }} />
              </InputAdornment>
            ),
          }}
        />
        <InputText
          control={control}
          name="password"
          type="password"
          optionalLabel="Password"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth={true}
        />
        <div>
          <Button onClick={() => reset()} variant="outlined" className={styles.button}>
            Reset
          </Button>
        </div>
        <div>
          <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.button}>
            Submit
          </Button>
        </div>
      </Paper>
    </form>
  );
};

export default TestComponents;
