import {Button} from "react-bootstrap";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

class User{
  name: string | undefined;
  auth: string;
  day = 0;
  week = 0;
  month = 0;

  constructor(name: string, auth: string, day:number, week:number, month:number) {
    this.name = name;
    this.auth = auth;
    this.day = day;
    this.week = week;
    this.month = month;
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: lightblue;
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid;
`;

const Layout = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 30px 40px;
`;

const HourBox = styled.div`
  display: flex;
  margin-top: 30px;
  width: 50vw;
  justify-content: center;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
`;

const Text1 = styled.div`
  font-size: 30px;
  margin-right: 40px;
  margin-bottom: 30px;
`;

const Calendar = styled.div`
  width: 50vw;
  height: 20%;
  margin-bottom: 50px;
  font-size: 30px;
  border: 2px solid;
  text-align: center;
`;

const staff = new User("컬리2", "Staff", 6, 10, 40);

const Staff = () => {
  const location = useLocation();
  const state = location.state as {name: string};

  return (
    <Container>
      <Header>
        <h1 style={{marginRight:20, marginLeft: 50}}>{state.name}</h1>
        <h4>({staff.auth})</h4>
      </Header>
      <Layout>
        <Content>
          <Calendar>일주일 달력
          </Calendar>
          <h4 style={{ marginLeft: 5 }}>5/10(화)</h4>
          <HourBox>
            <BtnBox>
              <Text1>출근 시간 10:00</Text1>
              <Button>출근</Button>
            </BtnBox>
            <BtnBox>
              <Text1>퇴근 시간 10:00</Text1>
              <Button>퇴근</Button>
            </BtnBox>
          </HourBox>
          <h1 style={{marginTop:50}}>출근 통계</h1>
          
          <HourBox style={{justifyContent:"flex-start"}}>
            <Text1>일: {staff.day}시간</Text1>
            <Text1>주: {staff.week}시간</Text1>
            <Text1>월: {staff.month}시간</Text1>
          </HourBox>
        </Content>
      </Layout>
    </Container>
  )
}

export default Staff;