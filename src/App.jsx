import Counter from "./Counter";
import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";


export default function App() {
  return (
    <div className="flex items-center justify-center flex-col p-4 ">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      < ProfileEditor/>
      <UserList  />
      <Counter />

      <footer className="mt-8 p-4 w-full h-24 text-center bg-gray-500 flex items-center justify-center text-white ">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
