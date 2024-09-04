import { useEffect, useState } from "react";

export function ControlledForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [userError, setUserError] = useState('')

  useEffect(() => {

    if( firstName.length > 18){
        setUserError('Dit Navn er for langt')
    } else{
        setUserError('')
    }

  },[firstName])

  return (
    <section>
      <form>
        <label> First name</label>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          name="firstName"
        />

        <label> Last name</label>
        <input
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          name="lastName"
        />

        <label> Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
        />
      </form>
      <b>{userError}</b>

      <button>Send</button>
    </section>
  );
}
