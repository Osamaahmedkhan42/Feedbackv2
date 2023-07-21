'use client'
import { TextField, Typography, Rating, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { useState } from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';



export default function Form() {



    const formik = useFormik({
        initialValues: {
            name: '',
            contact: '',
            city: '',
            manager: 'yes',
            service: 1,
            food: 1,
            ambiance: 1,
            suggestion: ''

        },

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (


        <div className='my-5 md:my-32 lg:my-0 lg:px-40 pb-10 bg-slate-200' >
            <h1 className='mx-auto text-center font-medium text-xl md:text-3xl'>Feedback Form</h1>
            <div className='mx-4  md:px-32 '>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col space-y-3 mb-2'>
                        <TextField
                            className=''
                            label="Name"
                            variant="outlined"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />


                        <TextField
                            className=''
                            label="contact"
                            variant="outlined"
                            id="contact"
                            name="contact"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.contact && Boolean(formik.errors.contact)}
                            helperText={formik.touched.contact && formik.errors.contact} />

                        <TextField
                            className=''
                            label="city"
                            variant="outlined"
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city} />
                    </div>

                    <FormControl className='block'>
                        <FormLabel id="manager">Manager/Supervisor Visit during Food</FormLabel>
                        <RadioGroup
                            aria-labelledby="manager"
                            defaultValue="Yes"

                        >
                            <FormControlLabel name='manager' onClick={formik.handleChange} value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel name='manager' onClick={formik.handleChange} value="No" control={<Radio />} label="No" />

                        </RadioGroup>
                    </FormControl>

                    <div className="rating mx-auto text-center items-center">

                        <Typography component="legend" variant='h6'>Service</Typography>
                        <Rating
                            name="service"
                            size='large'
                            value={formik.values.service}
                            onChange={formik.handleChange}
                        />
                        <br />
                        <Typography component="legend" variant='h6'>Food</Typography>
                        <Rating
                            name="food"
                            size='large'
                            value={formik.values.food}
                            onChange={formik.handleChange}
                        />
                        <br />
                        <Typography component="legend" variant='h6'>Ambiance</Typography>
                        <Rating
                            name="ambiance"
                            size='large'
                            value={formik.values.ambiance}
                            onChange={formik.handleChange}
                        />
                    </div>


                    <br />
                    <Typography component="legend" className='text-gray-600'>Suggestions If any:</Typography>
                    <TextField name='suggestion' multiline variant="outlined" fullWidth value={formik.values.suggestion} onChange={formik.handleChange} /> <br />
                    <button type="submit" className='bg-blue-600 py-2 px-2  rounded-md mt-2 font-semibold'>SUBMIT</button>

                </form >
            </div>
        </div>


    )
}
