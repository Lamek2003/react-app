// import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const employees = [
    { name: "AAA", email: "aaa@gmail.com", age: 19 },
    { name: "BBB", email: "bbb@gmail.com", age: 20 },
    { name: "CCC", email: "ccc@gmail.com", age: 21 }
  ];

  console.log(employees);

  return (
    <>
      <div className="App">
        <ul>
          {employees.map((em, index) => (
            <li key={index}>
              ชื่อพนักงาน: {em.name}  | อีเมล์: {em.email}  | อายุ : {em.age}
            </li>
          ))}
        </ul>
        
        <h1>hello Lamek</h1>
        <Button text="ok" />
        <Button text="Cancel" />
      </div>
      <h1 className="text01">hello Lamek</h1>
    </>
  );
}

export default App;
