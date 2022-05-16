import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import {getUsers} from "../api/userApi";
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
  border: 5px solid #F6F6F6;
  border-radius: 20px;
  padding: 20px;
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

  const handleLoginButtonClick = async () => {
    let exist = false;
    const response = await getUsers();
    for (let i = 0; i < response.data.length; i++) {
      if (id === response.data[i].userId) {
        exist = true;
        if (password === response.data[i].password) {
          if (response.data[i].admin)
            navigate("/manager/" + response.data[i].userId, {state: {id: response.data[i].id, name: response.data[i].name, password: response.data[i].password}});
          else
            navigate("/staff/" + response.data[i].userId, {state: {id: response.data[i].id, name: response.data[i].name, password: response.data[i].password}});
        }
        else {
          alert("잘못된 PASSWORD 입니다.");
        }
        break;
      }
    }

    if (!exist) {
      alert("존재하지 않는 ID 입니다.");
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