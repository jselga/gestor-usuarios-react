import { useState } from "react";

import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import UserForm from "./components/UserFrom";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios)
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}></UserForm>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((u) => (
              <li key={u.email}>{`${u.name} ${u.lastname}: ${u.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}
export default App;
