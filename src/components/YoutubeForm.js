import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    }
};

const onSubmit = values => {
    console.log('Form Data', values);
};

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Invalid Email Format').required('Please enter email address'),
    channel: Yup.string().required('Please enter channel name')
});

function YoutubeForm() {

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>
                
                <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email">
                    {
                        (errorMsg) => <div className='error'>{errorMsg}</div>
                    }
                </ErrorMessage>
                </div>

                <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <ErrorMessage className="error" name="channel" component='div' />
                </div>

                <div className='form-control'>
                <label htmlFor="comments">Comments</label>
                <Field as="textarea" id="comments" name="comments" />
                </div>


                <div className='form-control'>
                <label htmlFor="address">Address</label>
                <Field name="address">
                    {
                        (props) => {
                            const { field, form, meta } = props;
                            return (
                                <div>
                                    <input type='text' id="address" {...field} />
                                    { meta.touched && meta.error ? <div>{meta.error}</div> : null }
                                </div>
                            )
                        }
                    }
                </Field>
                </div>

                <div className='form-control'>
                <label htmlFor="facebook">Facebook Profile</label>
                <Field type="text" id="facebook" name="social.facebook" />
                </div>

                <div className='form-control'>
                <label htmlFor="twitter">Twitter Profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;
