import React, { useEffect } from "react";
import { Formik, Field, Form, useField, useFormikContext } from "formik";

import { Input } from "../../core/inputs/input";
import { Button } from "../../core/buttons/button";
import "./formCreateScript.scss";

const MyField = (props) => {
  const {
    values: { names, source, link },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    if (
      names.trim() !== "" &&
      source.trim() !== "" &&
      link.trim() !== "" &&
      touched.names &&
      touched.source &&
      touched.link
    ) {
      setFieldValue(
        props.name,
        `
        names: ${names}, 
        source: ${source}, 
        link: ${link},
        `
      );
    }
  }, [
    link,
    source,
    names,
    touched.names,
    touched.source,
    touched.link,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      <input {...props} {...field}></input>
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

function FormCreateScriptFormik() {
  const initialValues = { names: "", source: "", link: "", discovery: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      <Form id="scriptForm">
        <label>
          Name
          <Field
            name="names"
            className="scriptName"
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label>
          Source
          <Field
            name="source"
            className="scriptSource"
            type="text"
            placeholder="Enter your source"
          />
        </label>
        <label>
          Link
          <Field
            name="link"
            className="scriptSource"
            type="text"
            placeholder="Enter your link"
          />
        </label>
        <button type="submit" className="btnScript">
          Submit
        </button>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br />
        <label>
          New Discovery
          <MyField name="discovery" />
        </label>
      </Form>
    </Formik>
  );
}
export { FormCreateScriptFormik };

//to="/diploma/discovery"

/*
 const [values, setValues] = React.useState({});
 
 const handleChange = event => {
   setValues(prevValues => ({
     ...prevValues,
     // we use the name to tell Formik which key of `values` to update
     [event.target.name]: event.target.value
   });
 }
 */
