export function UserForm() {
  return (
    <>
      <label htmlFor="">First Name</label>
      <input autoFocus required type="text" />
      <label htmlFor="">Last Name</label>
      <input type="text" required />
      <label htmlFor="">Age</label>
      <input type="number" required min={1} />
    </>
  );
}
