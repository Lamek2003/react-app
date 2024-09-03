function Dashboard() {
    return (
        <>
            <div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
                <h1 className="text-4xl font-extrabold text-white mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">User Management</h2>
                        <p className="text-gray-600">Manage your users effectively and efficiently.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
                        <p className="text-gray-600">View detailed analytics and reports.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Settings</h2>
                        <p className="text-gray-600">Adjust your preferences and system settings.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
