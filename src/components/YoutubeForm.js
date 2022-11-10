import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const YoutubeForm = () => {
    const {values, handleChange, handleSubmit} = useFormik({
        initialValues,
        onSubmit: (values) => console.log('form data', values)
    })

    console.log({values})
    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    value={values.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id='email' 
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />

                <label htmlFor="channel">channel</label>
                <input 
                    type="text" 
                    id='channel' 
                    name='channel'
                    value={values.channel}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;