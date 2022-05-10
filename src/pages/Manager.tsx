import {Button} from "react-bootstrap";
import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";

class User {
  name: string;
  auth: string;

  constructor(name: string, auth: string) {
    this.name = name;
    this.auth = auth;
  }
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
  justify-content: space-between;
  margin-top: 20px;
`;

const Name = styled.text`
  font-size: 30px;
  margin-top: 10px;
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

const me = new User("컬리2", "Manager");

const staff = new Staff("신민규", "Staff", 6, 10, 40);

const Manager = () => {
  return (
    <Container>
      <Header>
        <h1 style={{marginRight:20, marginLeft: 50}}>{me.name}</h1>
        <h4>({me.auth})</h4>
      </Header>
      <Layout>
        <Menu>
          <h2 style={{marginTop:20}}>직원 목록</h2>
          <List>
            <Name>{staff.name}</Name>
            <Name>??</Name>
            <Name>??</Name>
            <Name>??</Name>
          </List>
        </Menu>
        <Content>
          <Calendar>일주일 달력</Calendar>
          <h4 style={{ marginLeft: 5 }}>5/10(화)</h4>
          <HourBox>
            <Text1>출근 시간 10:00</Text1>
            <Text1>퇴근 시간 10:00</Text1>
          </HourBox>
          <h2 style={{marginTop:20}}>상태: 퇴근</h2>
          <h1 style={{marginTop:50}}>출근 통계</h1>
          
          <HourBox>
            <Text1>일: {staff.day}시간</Text1>
            <Text1>주: {staff.week}시간</Text1>
            <Text1>월: {staff.month}시간</Text1>
          </HourBox>
        </Content>
      </Layout>
    </Container>
  )
}

export default Manager;