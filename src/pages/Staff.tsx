import {Container} from "react-bootstrap";

const Staff = () => {
  return (
    <Container className="border border-dark">
      <Container style={{width: 1235, height: 100, marginTop: 20, marginBottom: 20}} className="border border-dark">
        <h2>헤더 (내정보)</h2>
      </Container>
      <Container style={{display: "flex"}}>
        <Container style={{width: 200, height: 600, marginBottom: 20}} className="border border-dark">
          <h2>메뉴</h2>
        </Container>
        <Container style={{width: 1000, height: 600}} className="border border-dark">
          <h2>직원 페이지</h2>
        </Container>
      </Container>
    </Container>
  )
}

export default Staff;