export function AddressForm() {
  return (
    <>
      <label htmlFor="">Street</label>
      <input autoFocus required type="text" />
      <label htmlFor="">City</label>
      <input type="text" required />
      <label htmlFor="">State</label>
      <input type="text" required />
      <label htmlFor="">Age</label>
      <input type="text" required />
    </>
  );
}
