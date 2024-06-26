import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textarea from "@/components/ui/Textarea";

const InputlayoutOnePage = () => {
  const [checked, setChecked] = useState(true);

  const FormValidationSchema = yup
    .object({
      username: yup.string().required(),
      number: yup.number().required().positive(),
      betweenNumber: yup
        .number()
        .required("The Number between field is required")
        .positive()
        .min(1)
        .max(10),

      alphabetic: yup
        .string()
        .required()
        .matches(/^[a-zA-Z]+$/, "Must only consist of alphabetic characters"),
      length: yup
        .string()
        .required("The Min Character field is required")
        .min(3),

      password: yup.string().required().min(8),
      url: yup.string().required("The URL field is required").url(),
      message: yup.string().required("The Message field is required"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="Personal details">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:grid-cols-2 grid gap-5 grid-cols-1 "
        >
          <Textinput
            label="Forename"
            id="forename"
            type="text"
            placeholder="Forename"
            name="forename"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="Surname"
            id="surname"
            type="text"
            placeholder="Surname"
            name="surname"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="Birth Name"
            id="birthname"
            type="text"
            placeholder="Birth Name"
            name="birthName"
            register={register}
            error={errors.username}
          />

          <Textarea
            label="Current Address"
            id="streetNameAddress"
            type="text"
            placeholder="Street No. and Name"
            name="streetNameAddress"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="TownAddress"
            id="townAddress"
            type="text"
            placeholder="Town or City"
            name="townAddress"
            register={register}
          />
          <Textinput
            label="CountyAddress"
            id="countyAddress"
            type="text"
            placeholder="County"
            name="streetNameAddress"
            register={register}
          />
          <Textinput
            label="Poscode"
            id="postcode"
            type="text"
            placeholder="Postcode"
            name="postcode"
            register={register}
            error={errors.username}
          />

          <Textinput
            label="Email"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <Textinput
            label="Nationality"
            id="nationalty"
            type="text"
            placeholder="Nationality"
            name="nationality"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="HomeTelephone"
            id="homeTelephone"
            type="text"
            placeholder="Home Telephone"
            name="homeTelephone"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="Mobile"
            id="mobile"
            type="text"
            placeholder="Mobile number "
            name="mobile"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="BirthDate"
            id="birthDate"
            type="text"
            placeholder="Date of Birth"
            name="birthDate"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="PassportNumber"
            id="passportNumber"
            type="text"
            placeholder="Passport Number"
            name="passportNumber"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="PassportExpiryDate"
            id="passportExpiryDate"
            type="text"
            placeholder="Passport Expiry Date"
            name="passportExpiryDate"
            register={register}
            error={errors.username}
          />

          <Textinput
            label="NationalInsuranceNumber"
            id="nationalInsuranceNumber"
            type="text"
            placeholder="National Insurance Number"
            name="nationalInsuranceNumber"
            register={register}
            error={errors.username}
          />
          <Textinput
            label="National Insurance Number"
            id="nationalInsuranceNumber"
            type="text"
            placeholder="National Insurance Number"
            name="nationalInsuranceNumber"
            register={register}
            error={errors.nationalInsuranceNumber}
          />

          <div className=" space-y-4">
            <Checkbox
              label="Remember me"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="Submit" type="submit" className="btn-dark" />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default InputlayoutOnePage;
