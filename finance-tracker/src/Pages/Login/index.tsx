import React from "react";
import { Container, Logo, Form, FormTitle } from "./style";

import Input from "../../components/Inputs";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

const Login: React.FC = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login } = useAuth();

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    console.log("Login submitted with:", { email, password });
  };

  return (
    <Container>
      <Logo>
        <img  src={"../assets/app-icon.svg"} alt="Finance Tracker Logo" />
        <h2>Finance Tracker</h2>
      </Logo>

      <Form onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        <Input
          required
          type="email"
          placeholder="Email"
          value={email}
           onChange={(e) => {
    console.log("Email digitado:", e.target.value);
    setEmail(e.target.value);
  }}
        />
        <Input
          required
          type="password"
          placeholder="Password"
          value={password}
           onChange={(e) => {
    console.log("Password digitado:", e.target.value);
    setPassword(e.target.value);
  }}
        />

        <Button type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
export default Login;