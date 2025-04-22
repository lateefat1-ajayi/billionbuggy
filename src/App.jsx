import ProfileEditor from "./components/ProfileEditor";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      <ProfileEditor />
      <UserList />
      <Counter />

      <footer className="mt-8 p-4 bg-grey-500 text-white">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
