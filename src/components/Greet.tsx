type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}. You have ${props.messageCount}` :  `Welcome Guest `
                }
            </h2>
            
        </div>
    )
}
