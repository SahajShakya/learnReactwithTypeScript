type ContainerProps = {
    style: React.CSSProperties
}

export const Containera = (props: ContainerProps) => {
    return <div style={props.style}>
        Props with Styles
    </div>
}