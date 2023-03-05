import FormWrapper from "./FormWrapper";

export default function UserForm({ firstName, lastName, age, updateFields }) {
  return (
    <>
      <FormWrapper title={"User Details"}>
        <label>First Name</label>
        <input
          required
          autoFocus
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          required
          type="number"
          min={1}
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}
