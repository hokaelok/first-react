export default function UserBody(props) {
    return (
        <section className="">
            <h1 className="text-2xl font-bold m-5">
                Welcome back, {props.name}!
            </h1>
        </section>
    );
}
