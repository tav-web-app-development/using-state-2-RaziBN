import { useState } from "react";
import BillingForm from "./BillingForm";

export default function Form() {
  const [bllingAddress, setBillingAddress] = useState(false);
  const [billingForm, setBillingForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  return (
    <div>
      <form>
        <label>First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label>Address:</label>
        <br />
        <input type="text" id="address" name="address" />
        <br />
        <label>City:</label>
        <br />
        <input type="text" id="city" name="city" />
        <br />
        <label>State:</label>
        <br />
        <input type="text" id="state" name="state" />
        <br />
        <label>Postal Code:</label>
        <br />
        <input type="text" id="postalCode" name="postalCode" />
        <br />
        <label>Use shipping address as billing address</label>
        <br />
        <input
          type="checkbox"
          id="shipping"
          name="shipping"
          onChange={(e) => setBillingAddress(e.target.checked)}
        ></input>
        <br />
        {bllingAddress && (
          <BillingForm
            billingForm={billingForm}
            setBillingForm={setBillingForm}
          />
        )}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
