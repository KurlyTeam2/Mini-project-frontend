import {Link} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <Container style={{marginTop: 300}}>
      <h1 style={{textAlign: "center"}}>근태 관리 사이트</h1>
      <div style={{textAlign: "center"}}>
        <Link to="/login">
          <Button style={{marginRight: 10, width: 100}}>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button style={{width: 150}}>회원가입</Button>
        </Link>
      </div>
    </Container>
  )
}

export default Home;