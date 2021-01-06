export default function Messagebox(props) {

    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}
