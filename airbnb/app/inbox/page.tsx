import Conversation from "../components/inbox/conversation";
const InboxPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 text-black space-y-4">
            <h1 className="my-6 text-2xl">My Inbox</h1>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </main>
    )
}

export default InboxPage; 
