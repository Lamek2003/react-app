function Users() {
    return (
        <>
            <div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
                <h1 className="text-4xl font-extrabold text-white mb-8">Users Page</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">User List</h2>
                        <p className="text-gray-600">View and manage all registered users.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
                        <p className="text-gray-600">Create new user accounts and assign roles.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">User Settings</h2>
                        <p className="text-gray-600">Adjust user permissions and settings.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
