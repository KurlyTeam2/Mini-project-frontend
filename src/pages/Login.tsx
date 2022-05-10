import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleIdChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }, [])

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const handleLoginButtonClick = () => {
    //TODO: 백엔드 연동 후 로직 변경
    if (id === "manager" && password === "1234") {
      navigate("/manager")
    }
    else if (id === "staff" && password === "1234") {
      navigate("/staff")
    }
    else {
      alert("유효하지 않은 ID 또는 PASSWORD 입니다")
    }
  }

  return (
    <Container style={{}}>
      <Box>
      <h2>로그인</h2>
      <Form style={{borderWidth: 10, width: 500}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="아이디를 입력하세요" value={id} onChange={handleIdChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={handlePasswordChange}/>
        </Form.Group>

        <Button style={{width: 100, marginRight: 10}} onClick={() => handleLoginButtonClick()}>로그인</Button>
        <Link to="/signup">
          <Button style={{width: 120}}>회원가입</Button>
        </Link>
      </Form>
      </Box>
     
    </Container>
  )
}

export default Login;