/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 10:57:06 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Layout from 'renderer/components/Layout';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from 'renderer/components/FormikControl/FormikControl';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth: any = useAuth();
  const from = location.state?.from?.pathname || '/';

  if (auth.user) {
    navigate(from);
    return null;
  }

  // initial values
  const initialValues = {
    username: '',
    password: '',
  };

  // form validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  // form submit handler
  const onSubmit = async (values: any) => {
    await auth.signin({ values }, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <Layout>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur
          >
            {({ isValid, dirty, isSubmitting, values }) => (
              <Form className="flex flex-col gap-4">
                {/* Quiz Title */}
                <FormikControl
                  control="input"
                  label="Username"
                  name="username"
                />
                {/* Quiz description */}
                <FormikControl
                  control="input"
                  label="Password"
                  name="password"
                />

                {/* submit button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center gap-1 justify-center capitalize 
                    ml-auto py-2 px-4 bg-green-600 rounded hover:bg-green-700 
                    transition-all duration-200 disabled:bg-gray-500"
                    disabled={!(isValid && dirty) || isSubmitting}
                  >
                    {isSubmitting && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                    <p className="text-lg">submit</p>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
