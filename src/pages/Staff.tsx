import {Button, Dropdown, DropdownButton, Form, Modal} from "react-bootstrap";
import styled from "styled-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ChangePasswordModal from "../components/ChangePasswordModal";
import WithdrawalModal from "../components/WithdrawalModal";
import MyPageDropdown from "../components/MyPageDropdown";
import { getWorks, postWorks } from "../api/workApi";
import { time } from "console";


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


const Staff = () => {
  const location = useLocation();
  const state = location.state as { id: number, name: string, password: string, user_id:string };
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [TotalTime, setTotalTime] = useState("");

  const d = new Date();
  const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDay()
  
  const today = () => {
    var d = new Date();
    var year = d.getFullYear();
    var month;
    if (d.getMonth() < 9) {
      month = "0"+(d.getMonth() + 1);
    } else {
      month = d.getMonth() + 1;
    }
    var day;
    if (d.getDate() < 10) {
      day = "0"+(d.getDate() + 1);
    } else {
      day = d.getDate() + 1;
    }
    var hour;
    if (d.getHours() < 10) {
      hour = "0"+d.getHours();
    } else {
      hour = d.getHours();
    }
    var min;
    if (d.getMinutes() < 10) {
      min = "0"+d.getMinutes();
    } else {
      min = d.getMinutes();
    }
    var sec="00";
//    if (d.getSeconds() < 10) {
//      sec = "0"+d.getSeconds();
//    } else {
//      sec = d.getSeconds();
//    }
    const td = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec;
    return td;
  }
  
  const getTotalTime = (start:string,end:string) => {
    var startTime = Number(start.slice(-8, -6))*60 + Number(start.slice(-5, -3));
    var endTime = Number(end.slice(-8, -6)) * 60 + Number(end.slice(-5, -3));
    var total = endTime - startTime;
    var min = total % 60;
    var hour = (total - min) / 60;
    var strhour = (hour<10)? "0"+hour:hour;
    var strmin = (min<10)? "0"+min:min;
    const result = strhour + ":" + strmin + ":" + "00";
    return result;
  }
  
  const handleStartBtn = async () => {
    const time = today();
    console.log(time);
    setStartTime(time);
  }

  const handleEndBtn = async () => {
    const time = today();
    console.log(time);
    setEndTime(time);
    setTotalTime(getTotalTime(StartTime,time));
    const response = await postWorks(state.id, StartTime, time, getTotalTime(StartTime,time));
    console.log(response);
  }

  return (
    <Container>
      <Header>
        <h1 style={{marginRight:20, marginLeft: 50}}>{state.name}</h1>
        <h4>(Staff)</h4>
        <MyPageDropdown state={state}/>
      </Header>
      <Layout>
        <Content>
          <h4 style={{ marginLeft: 5 }}>{date}</h4>
          <HourBox>
            <BtnBox>
              <Text1>출근 시간 </Text1>
              <Text1>{StartTime.slice(-8,-3)}</Text1>
              <Button onClick={()=>handleStartBtn()}>출근</Button>
            </BtnBox>
            <BtnBox>
              <Text1>퇴근 시간</Text1>
              <Text1>{EndTime.slice(-8,-3)}</Text1>
              <Button onClick={()=>handleEndBtn()}>퇴근</Button>
            </BtnBox>
          </HourBox>
          <h1 style={{marginTop:50}}>출근 통계</h1>
          
          <HourBox style={{justifyContent:"flex-start"}}>
            <Text1>총: {TotalTime.slice(0,5)}시간</Text1>
          </HourBox>
        </Content>
      </Layout>
    </Container>
  )
}

export default Staff;