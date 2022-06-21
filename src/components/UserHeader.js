export default function UserHeader(props) {
    return (
        <header className="bg-blue-200 h-16 flex items-center p-5">
            <p className="font-semibold">Current user: {props.name}</p>
        </header>
    );
}
