import { useState } from "react"

export function ContactForm(){
    const [nameDisplay, setNameDisplay] = useState('')
    const [phoneDisplay, setPhoneDisplay] = useState('')
    const [emailDisplay, setEmailDisplay] = useState('')
    const [commentDisplay, setCommentDisplay] = useState('')
    const [methodDisplay, setMethodDisplay] = useState('')


    function handleSubmit(event){
        event.preventDefault();
        setNameDisplay(event.target.fullName.value)
        setPhoneDisplay(event.target.phoneNumber.value)
        setEmailDisplay(event.target.email.value)
        setCommentDisplay(event.target.comment.value)
        setMethodDisplay(event.target.selection.value)
    }

    function handleReset(event){
        setNameDisplay('');
        setPhoneDisplay('');
        setEmailDisplay('');
        setCommentDisplay('');
        setMethodDisplay('');        
    }


    return(
        <section>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Full Name</label>
                <input type="text" name="fullName" />

                <label>Phonenumber</label>
                <input type="number" name="phoneNumber"/>

                <label>Email</label>
                <input type="email" name="email"/>

                <label>Comment</label>
                <textarea name="comment"></textarea>

                <label>How should we contact you?</label>
                <select name="selection">
                    <option value="On the phone">On the phone</option>
                    <option value="On email">On email</option>
                </select>

                <input type="submit" value="Send" />
                <input type="reset" onClick={(event) => handleReset(event)} value="Reset" />
            </form>
            <section>
                <h1>Dette sendes med formularen:</h1>
                <p>Full Name: {nameDisplay}</p>
                <p>PhoneNumber: {phoneDisplay}</p>
                <p>Email: {emailDisplay}</p>
                <p>Comment: {commentDisplay}</p>
                <p>Chosen method of contact: {methodDisplay}</p>
            </section>
        </section>
    )
}