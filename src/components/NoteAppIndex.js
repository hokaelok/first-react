import NoteAppSidebar from "./NoteAppSidebar";
import NoteAppEditor from "./NoteAppEditor";

export default function NoteAppIndex() {
    return (
        <>
            <div className="flex w-screen h-screen">
                <NoteAppSidebar />
                <NoteAppEditor />
            </div>
        </>
    );
}
