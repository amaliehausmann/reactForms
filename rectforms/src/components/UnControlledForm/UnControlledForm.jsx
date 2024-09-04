import { useState } from "react"

export function UnControlledForm(){

    const [submitError, setSubmitError] = useState('')

    function handleSubmit(event){
        setSubmitError('')
        event.preventDefault()
        console.log(event.target.firstName.value)

        if(event.target.firstName.value.length < 3){
            setSubmitError('too short my guy')
        }
    }

    return(
        <section>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label> First name</label>
                <input type="text" name="firstName"/>

                <label> Last name</label>
                <input type="text" name="lastName" />

                <label> Email</label>
                <input type="email" name="email" />

                <input type="submit" value='submit'/>
            </form>
            <b>{submitError}</b>
        </section>
    )
}