import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showDetails = selectedUser !== null;

  const filteredUsers = users.filter(
    (user) => {
      const value = searchTerm.toLowerCase();
      return user.toLowerCase().includes(value);
    }
  );

  const handleHover = (user) => {
    setTimeout(() => {
      console.log("Hovered over:", user);
    }, 1000);
  };

  const handleDelete = (index) =>{
        setUsers((prevUser) => prevUser.filter((_, i) =>i !== index));
    } 
  

  return (
    <div className="flex items-center bg-blue-200 rounded-md m-2 p-4 flex-col w-full mt-4">
      <h2 className="text-xl font-bold">Users</h2>

      <input type="text" onChange={((e) => setSearchTerm(e.target.value))} value={searchTerm} className="border p-2 mt-2" />

      <ul className="flex items-center mt-5 gap-3 ">
        {(filteredUsers.length > 0 ? filteredUsers : users).map(
          (user, index) => (
            <li
              key={(`${user}-${index}`)}
              onClick={() => {
                setSelectedUser(user);
              }}
              onMouseEnter={() => handleHover(user)}
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-2"
            >
              {user}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {showDetails && (
        <div className="mt-2 p-2 bg-yellow-100">
          Selected: {selectedUser}
          <p>Name length: {selectedUser.length}</p>
        </div>
      )}
    </div>
  );
}
