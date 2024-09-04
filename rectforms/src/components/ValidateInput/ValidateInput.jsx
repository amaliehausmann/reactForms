import { useEffect, useState } from "react";

export function ValidateInput() {
  const [firstName, setFirstName] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if(emailRegex.test(email)) {
        setUserError('')
    } else{
        setUserError('Det skal faktisk være en email')
    }
  },[email])

  useEffect(() => {
    if (firstName.length === 0) {
        setUserError('Du skal skrive noget i det her felt')
    } else if(firstName.length < 6){
        setUserError("Navn skal være mere end 6 tegn");
    } else{
        setUserError('')
    }
  }, [firstName]);

  return (
    <section>
      <form>
        <label>First name</label>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          name="firstName"
        />
        <label> Email</label>
        <input onChange={(event) => setEmail(event.target.value)} type="email" />
      </form>
      <b>{userError}</b>
    </section>
  );
}
