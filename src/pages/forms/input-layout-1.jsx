import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import Radio from "@/components/ui/Radio";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const InputlayoutOnePage = () => {
  const [checked, setChecked] = useState(true);
  const [drivingLicenseValue, setDrivingLicenseValue] = useState(false);
  const [vehicleValue, setVehicleValue] = useState(false);
  const [manualDriverValue, setManualDriverValue] = useState(false);
  const [automaticDriverValue, setAutomaticDriverValue] = useState(false);
  const [clientVehicleValue, setClientVehicleValue] = useState(false);
  const [workPurposeInsuranceValue, setWorkPurposeInsuranceValue] =
    useState(false);
  const [appliedPreviouslyValue, setAppliedPreviouslyValue] = useState(false);
  const [workedPreviouslyValue, setWorkedPreviouslyValue] = useState(false);
  const [otherAgenciesValue, setOtherAgenciesValue] = useState(false);

  const FormValidationSchema = yup
    .object({
      // username: yup.string().required(),
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
    alert("Submit method was triggered");
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 gap-5">
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
            error={errors.forname}
          />
          <Textinput
            label="Surname"
            id="surname"
            type="text"
            placeholder="Surname"
            name="surname"
            register={register}
            error={errors.surname}
          />
          <Textinput
            label="Birth Name"
            id="birthname"
            type="text"
            placeholder="Birth Name"
            name="birthName"
            register={register}
            error={errors.birthName}
          />
          <Textarea
            label="Current Address"
            id="streetNameAddress"
            type="text"
            placeholder="Street No. and Name"
            name="streetNameAddress"
            register={register}
            error={errors.streetNameAddress}
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
            error={errors.postcode}
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
            error={errors.nationality}
          />
          <Textinput
            label="Home Telephone Number"
            id="homeTelephone"
            type="text"
            placeholder="Home Telephone"
            name="homeTelephone"
            register={register}
            error={errors.homeTelephone}
          />
          <Textinput
            label="Mobile"
            id="mobile"
            type="text"
            placeholder="Mobile number "
            name="mobile"
            register={register}
            error={errors.mobile}
          />
          <Textinput
            label="Birth Date"
            id="birthDate"
            type="text"
            placeholder="Date of Birth"
            name="birthDate"
            register={register}
            error={errors.birthDate}
          />
          <Textinput
            label="Passport Number"
            id="passportNumber"
            type="text"
            placeholder="Passport Number"
            name="passportNumber"
            register={register}
            error={errors.passportNumber}
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
          <Checkbox
            label="Do you have a driving License?"
            name="drivingLicense"
            id="drivingLicense"
            value={drivingLicenseValue}
            register={register}
            onChange={() => setDrivingLicenseValue(!drivingLicenseValue)}
          />
          <Textarea
            label="Please advise if you have any current or past endorsements on your license and give details"
            id="drivingLicenseEndorsements"
            type="text"
            placeholder="Please advise if you have any current or past endorsements on your license and give details"
            name="drivingLicenseEndorsements"
            register={register}
            error={errors.drivingLicenseEndorsements}
          />
          <Textinput
            label="Where was your license issued"
            type="text"
            placeholder=""
            id="drivingLicenseLocation"
            name="drivingLicenseLocation"
            register={register}
            error={errors.drivingLicenseLocation}
          />
          <Checkbox
            label="Do you own a vehicle?"
            name="vehicle"
            id="vehicle"
            value={vehicleValue}
            register={register}
            onChange={() => setVehicleValue(!vehicleValue)}
          />
          <Checkbox
            label="Are you a manual driver?"
            name="manualDriver"
            value={manualDriverValue}
            register={register}
            onChange={() => setManualDriverValue(!manualDriverValue)}
          />
          <Checkbox
            label="Are you a automatic driver?"
            name="automaticDriver"
            value={automaticDriverValue}
            register={register}
            onChange={() => setAutomaticDriverValue(!automaticDriverValue)}
          />
          <Checkbox
            label="Are you happy to drive a client around in his/her vehicle?"
            name="clientVehicle"
            value={clientVehicleValue}
            register={register}
            onChange={() => setClientVehicleValue(!clientVehicleValue)}
          />
          <Checkbox
            label="Do you have the necessary insurance in place to use your own vehicle for business or work purposes?"
            name="workPurposeInsurance"
            value={workPurposeInsuranceValue}
            register={register}
            onChange={() =>
              setWorkPurposeInsuranceValue(!workPurposeInsuranceValue)
            }
          />
          <Checkbox
            label="Have you ever previously applied for a job with Super Healthcare?"
            name="appliedPreviously"
            value={appliedPreviouslyValue}
            register={register}
            onChange={() => setAppliedPreviouslyValue(!appliedPreviouslyValue)}
          />
          <Checkbox
            label="Have you ever previously worked for Super Healthcare"
            name="workedPreviously"
            value={workedPreviouslyValue}
            register={register}
            onChange={() => setWorkedPreviouslyValue(!workedPreviouslyValue)}
          />
          <Checkbox
            label="Worked at any other Healthcare Agency?"
            name="otherAgencies"
            value={otherAgenciesValue}
            register={register}
            onChange={() => setOtherAgenciesValue(!otherAgenciesValue)}
          />

          {otherAgenciesValue && (
            <Textinput
              label=""
              type="text"
              id="companyWorkedFor"
              placeholder="Company name and location"
              name="companyWorkedFor"
              className="h-[32px] text-sm"
              register={register}
              error={errors.companyWorkedFor}
            />
          )}

          <div className=" space-y-4">
            <Button text="Submit" type="submit" className="btn-dark" />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default InputlayoutOnePage;
