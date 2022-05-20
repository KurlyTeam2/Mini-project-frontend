import styled from "styled-components";
import {useLocation} from "react-router-dom";
import MyPageDropdown from "../components/MyPageDropdown";
import { getUsers } from "../api/userApi";
import { getWorks } from "../api/workApi";
import { useEffect, useState } from "react";


type User = {
  admin: Boolean,
  id: number,
  name: string,
}

class Staff{
  name: string;
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
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  align-items: center;
  border-right: 1px solid;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const NameBtn = styled.button`
  font-size: 30px;
  width: 100%;
  border: 0px;
  border-top: 1px solid black;
  background-color: white;
  padding: 10px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  padding: 30px 40px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HourBox = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Text1 = styled.div`
  font-size: 30px;
  margin-right: 40px;
`;

const Calendar = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 50px;
  border: 2px solid;
  font-size: 30px;
  text-align: center;
`;

const staff = new Staff("신민규", "Staff", 6, 10, 40);

const Manager = () => {
  const location = useLocation();
  const state = location.state as {id: number, name: string, password: string};
  const d = new Date();
  const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDay()

  const [Users, setUsers] = useState<any[]>([])
  const [Total, setTotal] = useState("");
  const [End, setEnd] = useState("");
  const [Start, setStart] = useState("");

  useEffect(() => {
    const input = async () => {
      const res = await getUsers();
      const array = [];
      for (const user of res.data){
        if (user.admin === false) {
          array.push(user);
        }
      }
      console.log(array);
      setUsers(array);
    }
    input();
  }, [])
  
  const handleNameBtn = async(id:number) => {
    const res = await getWorks(id);
    console.log(res.data[res.data.length-1].workingTime);
    setStart(res.data[res.data.length-1].workingTime);
    setEnd(res.data[res.data.length-1].quittingTime);
    setTotal(res.data[res.data.length-1].totalTime);
  }
  return (
    <Container>
      <Header>
        <h1 style={{marginRight:20, marginLeft: 50}}>{state.name}</h1>
        <h4>(Manager)</h4>
        <MyPageDropdown state={state}/>
      </Header>
      <Layout>
        <Menu>
          <h2 style={{marginTop:20}}>직원 목록</h2>
          <List>
            {
              Users.map(user => (
                <NameBtn key={user.id} onClick={()=>handleNameBtn(user.id)}>{user.name}</NameBtn>
              ))
              }
          </List>
        </Menu>
        <Content>
          <ContentBox>
          <h4 style={{ marginLeft: 5 }}>{date}</h4>
          <HourBox>
            <Text1>출근 시간 {Start.slice(-8,-3)}</Text1>
            <Text1>퇴근 시간 {End.slice(-8,-3)}</Text1>
          </HourBox>
          <h2 style={{marginTop:20}}>상태: 퇴근</h2>
          <h1 style={{marginTop:50}}>출근 통계</h1>
          
          <HourBox>
            <Text1>총: {Total.slice(0,5)}시간</Text1>
          </HourBox>
          </ContentBox>
        </Content>
      </Layout>
    </Container>
  )
}

export default Manager;