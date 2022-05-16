import {Button, Form, Modal} from "react-bootstrap";
import {ChangeEvent, useCallback, useState} from "react";
import {putUser} from "../api/userApi";

interface Props {
  id: number
  password: string
  isChangePasswordModalShow: boolean
  setIsChangePasswordModalShow: (isChangePasswordModalShow: boolean) => void
}

const ChangePasswordModal = (props: Props) => {
  const {id, password, isChangePasswordModalShow, setIsChangePasswordModalShow} = props;

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleCurrentPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value)
  }, [])

  const handleNewPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
  }, [])

  const handleChangeButtonClick = async () => {
    if (currentPassword !== password) {
      alert("현재 비밀번호가 일치하지 않습니다.")
    }
    else {
      const response = await putUser(id, currentPassword, newPassword);
      console.log(response);
      alert("비밀번호가 변경되었습니다.")
      setIsChangePasswordModalShow(false);
    }
  }

  return (
    <Modal show={isChangePasswordModalShow} onHide={() => setIsChangePasswordModalShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 변경</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formCurrentPassword">
            <Form.Label>현재 비밀번호</Form.Label>
            <Form.Control type="currentPassword" placeholder="현재 비밀번호를 입력하세요" value={currentPassword} onChange={handleCurrentPasswordChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label>새 비밀번호</Form.Label>
            <Form.Control type="newPassword" placeholder="새 비밀번호를 입력하세요" value={newPassword} onChange={handleNewPasswordChange}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsChangePasswordModalShow(false)}>닫기</Button>
        <Button variant="primary" onClick={() => handleChangeButtonClick()}>변경</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangePasswordModal;