import React from 'react'
import { CustomButton } from '../Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import './Form.scss'

export const Form: React.FC = () => {
  return (
    <div className='container'>
      <section className='section'>
        <h1 className='section__title'>
          Working with POST request
        </h1>
        <Box
          component="form"
          // noValidate
          // autoComplete="off"
          className='form'
        >
          <TextField
            id="name"
            label="Your name"
            variant="outlined"
            className='form__element'
            fullWidth
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className='form__element'
          />

          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            helperText="+38 (XXX) XXX - XX - XX"
            className='form__element'
          />

          <FormControl className='form__element'>
            <FormLabel id="position">Select your position</FormLabel>
            <RadioGroup aria-labelledby="position">
              <FormControlLabel value="Frontend developer" control={<Radio />} label="Frontend developer" />
              <FormControlLabel value="Backend developer" control={<Radio />} label="Backend developer" />
              <FormControlLabel value="Designer" control={<Radio />} label="Designer" />
              <FormControlLabel value="QA" control={<Radio />} label="QA" />
            </RadioGroup>
          </FormControl>

          <Button variant="outlined" component="label" className='form__element'>
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <div className='section__button'>
            <CustomButton type='grey' size='small' name='Sign up' />
          </div>
        </Box>
      </section>
    </div>
  )
}
