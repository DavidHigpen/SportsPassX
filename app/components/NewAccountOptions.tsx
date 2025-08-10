'use client'

import { updateAccount } from "../actions";
import { useState } from "react";
import { useSession } from "next-auth/react";
import DropdownButton from "./DropdownButton";

export default function NewAccountOptions() {
  const [sportsPass, setSportsPass] = useState<boolean | null>(null);
  const [classification, setClassification] = useState<string>("Select");
  const { data: session, status } = useSession();

  const handleUpdateButton = () => {
    if (
      sportsPass !== null &&
      classification !== "Select" &&
      session?.user.id !== undefined
    ) {
      // const ownsPass = sportsPass;
      const userClass = classification.toUpperCase() as | "SENIOR" | "JUNIOR" | "SOPHOMORE" | "FRESHMAN" | null;
      updateAccount(session.user.id, sportsPass, userClass)
        .then(() => {
          console.log("Account updated successfully");
          console.log( `sportsPass: ${sportsPass}, classification: ${classification}, session.user.id: ${session?.user.id}`);
          session.user.classification = userClass;
          session.user.seller = sportsPass;
        })
        .catch((error) => {
          console.error("Error updating account:", error);
        });
    } else {
      console.log("Error, please select all required options");
      console.log(
        `sportsPass: ${sportsPass}, classification: ${classification}, session.user.id: ${session?.user.id}`
      );
    }
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <label className="label">Do you own a sports pass? *</label>
      <select
        className="select"
        value={sportsPass === null ? "null" : sportsPass ? "true" : "false"}
        onChange={(e) => {
          const value = e.target.value === null ? null : e.target.value === "true" ? true : false;
          setSportsPass(value);
        }}
      >
        <option value="null" disabled>
          Enter option
        </option>
        <option value="true">Yes, I am looking to sell</option>
        <option value="false">No, I am looking to buy</option>
      </select>

      <DropdownButton
        label="Classification *"
        selected={classification}
        setFunction={setClassification}
        options={["Freshman", "Sophomore", "Junior", "Senior"]}
      />

      <button
        className="btn border border-base-white bg-base-100"
        onClick={() => {handleUpdateButton()}}
      >
        Update
      </button>
    </fieldset>
  );
}