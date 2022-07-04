export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        color: props.on ? "white" : "black",
    };

    return (
        <div
            className="border-2 border-black h-32 w-32 inline-block m-5 rounded"
            style={styles}
            onClick={props.handleClick}
        >
            {props.id}
        </div>
    );
}
