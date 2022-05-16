import {Dropdown, DropdownButton} from "react-bootstrap";
import ChangePasswordModal from "./ChangePasswordModal";
import WithdrawalModal from "./WithdrawalModal";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
  state: {
    id: number,
    name: string,
    password: string
  }
}

const MyPageDropdown = (props: Props) => {
  const {state} = props

  const [isChangePasswordModalShow, setIsChangePasswordModalShow] = useState(false);
  const [isWithdrawalModalShow, setIsWithdrawalModalShow] = useState(false);

  const navigate = useNavigate();

  const handleChangePasswordButtonClick = () => {
    setIsChangePasswordModalShow(true);
  }

  const handleWithdrawalButtonClick = () => {
    setIsWithdrawalModalShow(true);
  }

  const handleLogoutButtonClick = () => {
    navigate("/login");
  }

  return (
    <>
      <DropdownButton style={{marginLeft: 1000}} id="dropdown-basic-button" title="마이페이지">
        <Dropdown.Item onClick={() => handleChangePasswordButtonClick()}>비밀번호 변경</Dropdown.Item>
        <Dropdown.Item onClick={() => handleWithdrawalButtonClick()}>계정 탈퇴</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item onClick={() => handleLogoutButtonClick()}>로그아웃</Dropdown.Item>
      </DropdownButton>
      <ChangePasswordModal
        id={state.id}
        password={state.password}
        isChangePasswordModalShow={isChangePasswordModalShow}
        setIsChangePasswordModalShow={setIsChangePasswordModalShow}
      />
      <WithdrawalModal
        id={state.id}
        isWithdrawalModalShow={isWithdrawalModalShow}
        setIsWithdrawalModalShow={setIsWithdrawalModalShow}
      />
    </>
  )
}

export default MyPageDropdown;