function Header() {
    return ( 
        <>
            <header className="bg-teal-600 shadow-md p-4 flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">ระบบบริหารจัดการ</h1>
                <div className="flex space-x-4">
                    <button className="bg-white text-teal-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400">
                        Login
                    </button>
                    <button className="bg-white text-teal-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400">
                        Logout
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
