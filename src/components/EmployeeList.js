

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import App from "../App";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [name, setName] = useState("");
//   const [position, setPosition] = useState("");

//   const API_URL = "http://localhost:5000/api/employees";

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((res) => {
//         setEmployees(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching employees:", err);
//         setError("Failed to load employees.");
//         setLoading(false);
//       });
//   }, []);

//   const addEmployee = (e) => {
//     e.preventDefault();
//     if (!name || !position) {
//       setError("Please fill in both name and position.");
//       return;
//     }

//     axios.post(API_URL, { name, position })
//       .then((res) => {
//         setEmployees((prev) => [...prev, res.data]);
//         setName("");
//         setPosition("");
//         setError("");
//       })
//       .catch((err) => {
//         console.error("Error adding employee:", err);
//         setError("Failed to add employee.");
//       });
//   };

//   const deleteEmployee = (id) => {
//     axios.delete(`${API_URL}/${id}`)
//       .then(() => {
//         setEmployees((prev) => prev.filter(emp => emp._id !== id));
//       })
//       .catch((err) => {
//         console.error("Error deleting employee:", err);
//         setError("Failed to delete employee.");
//       });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error && !employees.length) return <p style={{ color: "red" }}>{error}</p>;
// <App />
//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Employees</h2>

//       {/* Add Employee Form */}
//       <form onSubmit={addEmployee} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ marginRight: "10px" }}
//         />
//         <input
//           type="text"
//           placeholder="Position"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           style={{ marginRight: "10px" }}
//         />
//         <button type="submit">Add</button>
//       </form>

//       {/* Show error if any */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Employee List */}
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <ul>
//           {employees.map((emp) => (
//             <li key={emp._id}>
//               {emp.name} - {emp.position}
//               <button onClick={() => deleteEmployee(emp._id)} style={{ marginLeft: "10px" }}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [name, setName] = useState("");
//   const [position, setPosition] = useState("");

//   const API_URL = "http://localhost:5000/api/employees";

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((res) => {
//         setEmployees(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching employees:", err);
//         setError("Failed to load employees.");
//         setLoading(false);
//       });
//   }, []);

//   const addEmployee = (e) => {
//     e.preventDefault();
//     if (!name || !position) {
//       setError("Please fill in both name and position.");
//       return;
//     }

//     axios.post(API_URL, { name, position })
//       .then((res) => {
//         setEmployees((prev) => [...prev, res.data]);
//         setName("");
//         setPosition("");
//         setError("");
//       })
//       .catch((err) => {
//         console.error("Error adding employee:", err);
//         setError("Failed to add employee.");
//       });
//   };

//   const deleteEmployee = (id) => {
//     axios.delete(`${API_URL}/${id}`)
//       .then(() => {
//         setEmployees((prev) => prev.filter(emp => emp._id !== id));
//       })
//       .catch((err) => {
//         console.error("Error deleting employee:", err);
//         setError("Failed to delete employee.");
//       });
//   };

//   if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
//   if (error && !employees.length) return <p className="text-center text-red-600">{error}</p>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Employee Management</h2>

//       {/* Add Employee Form */}
//       <form onSubmit={addEmployee} className="flex flex-col sm:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="text"
//           placeholder="Position"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
//         >
//           Add
//         </button>
//       </form>

//       {/* Error Message */}
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {/* Employee List */}
//       {employees.length === 0 ? (
//         <p className="text-gray-500 text-center">No employees found.</p>
//       ) : (
//         <ul className="space-y-3">
//           {employees.map((emp) => (
//             <li
//               key={emp._id}
//               className="flex justify-between items-center p-4 border border-gray-200 rounded hover:shadow"
//             >
//               <span className="text-gray-800 font-medium">
//                 {emp.name} - <span className="text-sm text-gray-600">{emp.position}</span>
//               </span>
//               <button
//                 onClick={() => deleteEmployee(emp._id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPosition, setEditPosition] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
        setError("Failed to load employees.");
        setLoading(false);
      });
  }, []);

  const addEmployee = (e) => {
    e.preventDefault();
    if (!name || !position || !image) {
      setError("Please fill in all fields.");
      return;
    }

    axios
      .post(API_URL, { name, position, image })
      .then((res) => {
        setEmployees((prev) => [...prev, res.data]);
        setName("");
        setPosition("");
        setImage("");
        setError("");
      })
      .catch((err) => {
        console.error("Error adding employee:", err);
        setError("Failed to add employee.");
      });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setEmployees((prev) => prev.filter((emp) => emp._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting employee:", err);
        setError("Failed to delete employee.");
      });
  };

  const startEdit = (emp) => {
    setEditingId(emp._id);
    setEditName(emp.name);
    setEditPosition(emp.position);
    setEditImage(emp.image);
  };

  const saveEdit = (id) => {
    axios
      .put(`${API_URL}/${id}`, {
        name: editName,
        position: editPosition,
        image: editImage,
      })
      .then((res) => {
        setEmployees((prev) =>
          prev.map((emp) => (emp._id === id ? res.data : emp))
        );
        setEditingId(null);
        setError("");
      })
      .catch((err) => {
        console.error("Error updating employee:", err);
        setError("Failed to update employee.");
      });
  };

  if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
  if (error && !employees.length)
    return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Employee Management</h2>

      {/* Add Employee Form */}
      <form onSubmit={addEmployee} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Employee List */}
      {employees.length === 0 ? (
        <p className="text-gray-500 text-center">No employees found.</p>
      ) : (
        <ul className="space-y-4">
          {employees.map((emp) =>
            editingId === emp._id ? (
              <li
                key={emp._id}
                className="p-4 border rounded-lg bg-gray-50 shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-3/4">
                  <img
                    src={editImage}
                    alt="Employee"
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                  <div className="flex-1 space-y-2">
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full p-1 border rounded"
                    />
                    <input
                      value={editPosition}
                      onChange={(e) => setEditPosition(e.target.value)}
                      className="w-full p-1 border rounded"
                    />
                    <input
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      className="w-full p-1 border rounded"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(emp._id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </li>
            ) : (
              <li
                key={emp._id}
                className="p-4 border rounded-lg shadow hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{emp.name}</p>
                    <p className="text-sm text-gray-600">{emp.position}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(emp)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(emp._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
