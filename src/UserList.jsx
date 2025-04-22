import { useState } from "react";

export default function UserList() {
  const [users] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);

  const showDetail = selectedUser !== null ? true : false;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Users</h2>
      <ul>
        {users.map((user, index) => (
          <li
            onClick={() => setSelectedUser(user)}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            {user}
          </li>
        ))}
      </ul>
      {showDetails && (
        <div className="mt-2 p-2 bg-yellow-100">Selected: {selectedUser}</div>
      )}
    </div>
  );
}
