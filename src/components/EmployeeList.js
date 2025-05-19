

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

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/employees";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [name, setName] = useState("");
//   const [position, setPosition] = useState("");
//   const [image, setImage] = useState("");

//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState("");
//   const [editPosition, setEditPosition] = useState("");
//   const [editImage, setEditImage] = useState("");

//   useEffect(() => {
//     axios
//       .get(API_URL)
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
//     if (!name || !position || !image) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     axios
//       .post(API_URL, { name, position, image })
//       .then((res) => {
//         setEmployees((prev) => [...prev, res.data]);
//         setName("");
//         setPosition("");
//         setImage("");
//         setError("");
//       })
//       .catch((err) => {
//         console.error("Error adding employee:", err);
//         setError("Failed to add employee.");
//       });
//   };

//   const deleteEmployee = (id) => {
//     axios
//       .delete(`${API_URL}/${id}`)
//       .then(() => {
//         setEmployees((prev) => prev.filter((emp) => emp._id !== id));
//       })
//       .catch((err) => {
//         console.error("Error deleting employee:", err);
//         setError("Failed to delete employee.");
//       });
//   };

//   const startEdit = (emp) => {
//     setEditingId(emp._id);
//     setEditName(emp.name);
//     setEditPosition(emp.position);
//     setEditImage(emp.image);
//   };

//   const saveEdit = (id) => {
//     axios
//       .put(`${API_URL}/${id}`, {
//         name: editName,
//         position: editPosition,
//         image: editImage,
//       })
//       .then((res) => {
//         setEmployees((prev) =>
//           prev.map((emp) => (emp._id === id ? res.data : emp))
//         );
//         setEditingId(null);
//         setError("");
//       })
//       .catch((err) => {
//         console.error("Error updating employee:", err);
//         setError("Failed to update employee.");
//       });
//   };

//   if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
//   if (error && !employees.length)
//     return <p className="text-center text-red-600">{error}</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Employee Management</h2>

//       {/* Add Employee Form */}
//       <form onSubmit={addEmployee} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Position"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//         >
//           Add
//         </button>
//       </form>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {/* Employee List */}
//       {employees.length === 0 ? (
//         <p className="text-gray-500 text-center">No employees found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {employees.map((emp) =>
//             editingId === emp._id ? (
//               <li
//                 key={emp._id}
//                 className="p-4 border rounded-lg bg-gray-50 shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
//               >
//                 <div className="flex items-center gap-4 w-full sm:w-3/4">
//                   <img
//                     src={editImage}
//                     alt="Employee"
//                     className="w-16 h-16 object-cover rounded-full border"
//                   />
//                   <div className="flex-1 space-y-2">
//                     <input
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       className="w-full p-1 border rounded"
//                     />
//                     <input
//                       value={editPosition}
//                       onChange={(e) => setEditPosition(e.target.value)}
//                       className="w-full p-1 border rounded"
//                     />
//                     <input
//                       value={editImage}
//                       onChange={(e) => setEditImage(e.target.value)}
//                       className="w-full p-1 border rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => saveEdit(emp._id)}
//                     className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditingId(null)}
//                     className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </li>
//             ) : (
//               <li
//                 key={emp._id}
//                 className="p-4 border rounded-lg shadow hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={emp.image}
//                     alt={emp.name}
//                     className="w-16 h-16 object-cover rounded-full border"
//                   />
//                   <div>
//                     <p className="text-lg font-medium text-gray-800">{emp.name}</p>
//                     <p className="text-sm text-gray-600">{emp.position}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => startEdit(emp)}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteEmployee(emp._id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             )
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;

import React, { useEffect, useState } from "react";
import { Search, PlusCircle, Edit, Trash2, Save, X, User, BriefcaseMedical, Image } from "lucide-react";
import axios from "axios";

// Real API URL - make sure this matches your backend
const API_URL = "http://localhost:5000/api/employees";

const EmployeeManagement = () => {
  // State management
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Form states
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", position: "", image: "" });

  // Fetch employees on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(API_URL);
        setEmployees(response.data);
      } catch (err) {
        setError("Failed to load employees. Please try again later.");
        console.error("Error fetching employees:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleNewEmployeeChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Form submissions
  const addEmployee = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!newEmployee.name || !newEmployee.position) {
      setError("Name and position are required.");
      return;
    }

    try {
      // Use placeholder image if none provided
      const employeeToAdd = {
        ...newEmployee,
        image: newEmployee.image || "/api/placeholder/150/150"
      };
      
      const response = await axios.post(API_URL, employeeToAdd);
      setEmployees([...employees, response.data]);
      
      // Reset form
      setNewEmployee({ name: "", position: "", image: "" });
      setIsAddingEmployee(false);
      setError("");
    } catch (err) {
      setError("Failed to add employee.");
      console.error("Error adding employee:", err);
    }
  };

  const startEdit = (employee) => {
    setEditingId(employee._id);
    setEditFormData({
      name: employee.name,
      position: employee.position,
      image: employee.image
    });
  };

  const saveEdit = async (id) => {
    if (!editFormData.name || !editFormData.position) {
      setError("Name and position are required.");
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/${id}`, editFormData);
      setEmployees(
        employees.map((emp) => (emp._id === id ? response.data : emp))
      );
      setEditingId(null);
      setError("");
    } catch (err) {
      setError("Failed to update employee.");
      console.error("Error updating employee:", err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      setError("Failed to delete employee.");
      console.error("Error deleting employee:", err);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-blue-600 text-lg">Loading employees...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Employee Management System
      </h1>

      {/* Search and Add */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative flex-grow max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={() => setIsAddingEmployee(!isAddingEmployee)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors w-full md:w-auto justify-center"
        >
          {isAddingEmployee ? <X size={18} /> : <PlusCircle size={18} />}
          {isAddingEmployee ? "Cancel" : "Add Employee"}
        </button>
      </div>

      {/* Add Employee Form */}
      {isAddingEmployee && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Add New Employee</h3>
          <form onSubmit={addEmployee} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border bg-white rounded-lg overflow-hidden">
                <div className="p-3 bg-gray-50 border-r">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={newEmployee.name}
                  onChange={handleNewEmployeeChange}
                  className="flex-grow p-3 focus:outline-none"
                />
              </div>

              <div className="flex items-center border bg-white rounded-lg overflow-hidden">
                <div className="p-3 bg-gray-50 border-r">
                  <BriefcaseMedical size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="position"
                  placeholder="Position/Role"
                  value={newEmployee.position}
                  onChange={handleNewEmployeeChange}
                  className="flex-grow p-3 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center border bg-white rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 border-r">
                <Image size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
                value={newEmployee.image}
                onChange={handleNewEmployeeChange}
                className="flex-grow p-3 focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <PlusCircle size={18} />
                Add Employee
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Employee List */}
      <div className="space-y-4">
        {filteredEmployees.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">
              {searchTerm
                ? "No employees found matching your search."
                : "No employees added yet."}
            </p>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) =>
                editingId === employee._id ? (
                  <li key={employee._id} className="p-4 bg-blue-50">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <img
                          src={editFormData.image || "/api/placeholder/150/150"}
                          alt={editFormData.name}
                          className="w-20 h-20 object-cover rounded-full border-2 border-blue-200 mx-auto"
                        />
                      </div>
                      
                      <div className="md:w-3/4 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <input
                            name="name"
                            value={editFormData.name}
                            onChange={handleEditFormChange}
                            className="p-2 border border-gray-300 rounded w-full"
                            placeholder="Name"
                          />
                          <input
                            name="position"
                            value={editFormData.position}
                            onChange={handleEditFormChange}
                            className="p-2 border border-gray-300 rounded w-full"
                            placeholder="Position"
                          />
                        </div>
                        
                        <input
                          name="image"
                          value={editFormData.image}
                          onChange={handleEditFormChange}
                          className="p-2 border border-gray-300 rounded w-full"
                          placeholder="Image URL"
                        />
                        
                        <div className="flex justify-end gap-2 mt-3">
                          <button
                            onClick={() => setEditingId(null)}
                            className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 text-white px-3 py-2 rounded transition-colors"
                          >
                            <X size={16} />
                            Cancel
                          </button>
                          <button
                            onClick={() => saveEdit(employee._id)}
                            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                          >
                            <Save size={16} />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li 
                    key={employee._id} 
                    className="p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="md:w-1/6">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-20 h-20 object-cover rounded-full border mx-auto"
                        />
                      </div>
                      
                      <div className="md:w-3/6 text-center md:text-left">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {employee.name}
                        </h3>
                        <p className="text-gray-600">{employee.position}</p>
                      </div>
                      
                      <div className="md:w-2/6 flex justify-center md:justify-end gap-2 mt-3 md:mt-0">
                        <button 
                          onClick={() => startEdit(employee)}
                          className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded transition-colors"
                        >
                          <Edit size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEmployee(employee._id)}
                          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      
      {/* Employee Count */}
      <div className="mt-6 text-right text-sm text-gray-500">
        Total Employees: {employees.length}
      </div>
    </div>
  );
};

export default EmployeeManagement;