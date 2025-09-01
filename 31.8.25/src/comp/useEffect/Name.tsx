import { useEffect, useState } from "react"

type User = {
    firstName: string,
    lestName: string,
}

export default function Name() {
    const [fullName, setFullName] = useState("")
    const [user, setUser] = useState<User>({ firstName: "", lestName: "" })

    useEffect(() => {
        setFullName(user?.firstName + " " + user?.lestName);
    }, [user])

    return (
        <div>
            <input onChange={e => setUser({ ...user, firstName: e.target.value })} value={user.firstName} type="string" placeholder="firstName" />
            <input onChange={e => setUser({ ...user, lestName: e.target.value })} value={user.lestName} type="string" placeholder="lestName" />
            {fullName !== '' && <p>Your full name is {`${fullName}`}! </p>}
        </div>
    )
}
