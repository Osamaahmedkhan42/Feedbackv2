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


        <>

            <div className='mx-11 border border-black bg-red-200 space-x-5 space-y-5  '>

                <h1>This is a simple feedback form</h1>

                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        className='w-2/4'
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
                    <br />

                    <TextField
                        className='w-1/4 my-5'
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
                        className='w-1/4 my-5 mx-5'
                        label="city"
                        variant="outlined"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city} />

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
                    <Typography component="legend" variant='h6'>Suggestion</Typography>
                    <TextField name='suggestion' multiline variant="outlined" value={formik.values.suggestion} onChange={formik.handleChange} /> <br />
                    <button type="submit" className='bg-blue-800 py-3 px-4 rounded-md'>Submit</button>
                </form >
            </div >


        </>


    )
}
