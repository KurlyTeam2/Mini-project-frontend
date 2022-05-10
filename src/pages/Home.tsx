import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  styled  from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;
const Title = styled.text`
  font-size: 40px;
  font-weight: 600;
`;

const Home = () => {

  return (
    <Container>
      <Box>
        <Title>근태 관리 사이트</Title>
          <Link to="/login">
            <Button >로그인</Button>
          </Link>
          <Link to="/signup">
            <Button style={{width: 150}}>회원가입</Button>
          </Link>
      </Box>
    </Container>
  )
}

export default Home;