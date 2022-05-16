import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import {getUsers, postUser} from "../api/userApi";

const Container = styled.div`
  //background-image: "../image/login.jpg";
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

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isManager, setIsManager] = useState(true);
  const [isStaff, setIsStaff] = useState(false);

  const navigate = useNavigate();

  const handleIdChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }, [])

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }, [])

  const handleCheckboxClick = () => {
    setIsManager(!isManager)
    setIsStaff(!isStaff)
  }

  const handleSignupButtonClick = async () => {
    let success = true;
    const response = await getUsers();
    for (let i = 0; i < response.data.length; i++) {
      if (id === response.data[i].userId) {
        alert("사용중인 아이디입니다.")
        success = false;
        break;
      }
    }

    if (success) {
      const response = await postUser(id, password, name, isManager);
      console.log(response)
      alert("회원가입에 성공하였습니다.")
      navigate("/login")
    }
  }

  return (
    <Container>
      <Box>
      <h2>회원가입</h2>
        <Form style={{borderWidth: 10, width: 500}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="아이디를 입력하세요" value={id} onChange={handleIdChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={handlePasswordChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>이름</Form.Label>
            <Form.Control type="name" placeholder="이름을 입력하세요" value={name} onChange={handleNameChange}/>
          </Form.Group>

          <div style={{display: "flex", marginBottom: 10}}>
            <Form.Check style={{marginRight: 10}} label="관리자" checked={isManager} onClick={() => handleCheckboxClick()}/>
            <Form.Check label="직원" checked={isStaff} onClick={() => handleCheckboxClick()}/>
          </div>

          <Button style={{width: 120}} onClick={() => handleSignupButtonClick()}>회원가입</Button>
        </Form>
      </Box>
      </Container>
  )
}

export default Signup;