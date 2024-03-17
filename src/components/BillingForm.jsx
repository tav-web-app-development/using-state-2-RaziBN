// eslint-disable-next-line no-unused-vars
import React from "react";

function BillingForm({ billingForm, setBillingForm } = false) {
  return (
    <div>
      <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={billingForm.firstName}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              firstName: e.target.value.trim(),
            }))
          }
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          defaultValue={billingForm.lastName}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              lastName: e.target.value.trim(),
            }))
          }
        />
        <br />
        <label>Address:</label>
        <br />
        <input
          type="text"
          id="address"
          name="address"
          defaultValue={billingForm.address}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              address: e.target.value.trim(),
            }))
          }
        />
        <br />
        <label>City:</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          defaultValue={billingForm.city}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              city: e.target.value.trim(),
            }))
          }
        />
        <br />
        <label>State:</label>
        <br />
        <input
          type="text"
          id="state"
          name="state"
          defaultValue={billingForm.state}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              state: e.target.value.trim(),
            }))
          }
        />
        <br />
        <label>Postal Code:</label>
        <br />
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          defaultValue={billingForm.postalCode}
          onChange={(e) =>
            setBillingForm((prevData) => ({
              ...prevData,
              postalCode: e.target.value.trim(),
            }))
          }
        />
        <br />
      </form>
    </div>
  );
}

export default BillingForm;
