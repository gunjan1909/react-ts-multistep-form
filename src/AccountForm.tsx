export function AccountForm() {
  return (
    <>
      <label htmlFor="">Email</label>
      <input autoFocus required type="email" />
      <label htmlFor="">Password</label>
      <input type="text" required />
    </>
  );
}
