import LogoutButton from "../pages/Logout";

function Header() {
    return(
    <header className="bg-teal-500 shadow p-4 flex justify-between">
        <h1 className="text-x1 font-bold">ระบบบริหารจัดการ</h1>
        <div>
            <LogoutButton/>
    </div>
    </header>
    );
}
    
    export default Header;
