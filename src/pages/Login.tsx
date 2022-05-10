import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {

  return (
    <Container style={{display: "flex", justifyContent: "center", marginTop: 200}}>
      <Form style={{borderWidth: 10, width: 500}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="아이디를 입력하세요"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
        </Form.Group>

        <Button style={{width: 100, marginRight: 10}}>로그인</Button>
        <Link to="/signup">
          <Button style={{width: 120}}>회원가입</Button>
        </Link>
      </Form>
    </Container>
  )
}

export default Login;