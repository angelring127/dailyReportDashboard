import React, { useState } from 'react';
import cx from 'classnames';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Table,
  Form,
  Input,
  FormGroup,
  Label
} from 'reactstrap';

import Widget from '../../components/Widget/Widget';

import s from './Truck.module.scss';

import * as constant from '../../constants';
import BasicModal from '../../components/Modal/Modal';

const Truck = () => {
  const [isOpenCreate, handleCreate] = useState(false);
  const [isOpenDelete, handleDelete] = useState(false);
  const [isOpenEdit, handleEdit] = useState(false);
  const toggleCreate = () => handleCreate(!isOpenCreate);
  const toggleDelete = () => handleDelete(!isOpenDelete);
  const toggleEdit = () => handleEdit(!isOpenEdit);
  const formatDate = (str) => {
    return str.replace(/,.*$/, "");
  };

  const createTruck = () => {

  }
  const deleteTruck = () => {

  }
  const editTruck = () => {
    
  }

  const btnCreateTruck = (<Button color="primary" onClick={createTruck}>{constant.CREATE}</Button>);
  const btnDeleteTruck = (<Button color="danger" onClick={deleteTruck}>{constant.DELETE}</Button>)

  const content = (
    <Form>
      <FormGroup row>
        <Label for="" sm={2}>{constant.TRUCK_NO}</Label>
        <Col sm={10}>
          <Input type="text" name="truck_no" id="truck_no" placeholder={constant.TRUCK_NO} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="" sm={2}>{constant.TRUCK_TYPE}</Label>
        <Col sm={10}>
          <Input type="text" name="type" id="type" placeholder={constant.TRUCK_TYPE} />
        </Col>
      </FormGroup>
    </Form>
  );
  const deleteContent = (
    <>
      <span>TEST</span>
    </>
  );

  return (
    <div className={s.root}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem active>{constant.TRUCK}</BreadcrumbItem>
      </Breadcrumb>
      <h1 className="mb-lg">{constant.TRUCK}</h1>
      <Row>
        <Col sm={12} md={12}>
          <Widget
            title={
              <div>
                <h5 className="mt-0 mb-3">
                  <i className="fa fa-user mr-xs opacity-70" />{' '}
                  {constant.TRUCK + constant.LIST}
                </h5>
              </div>
            }
          >
            <Button onClick={toggleCreate}>{constant.NEW + constant.CREATE}</Button>
            <BasicModal
              className=''
              isOpen={isOpenCreate}
              toggle={toggleCreate}
              select={btnCreateTruck}
              content={content}
              title={constant.CREATE}
            />
            <Table responsive borderless className={cx('mb-0', s.usersTable)}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{constant.TRUCK_TYPE}</th>
                  <th>{constant.TRUCK + constant.NUMBER}</th>
                  <th>{constant.OPTION}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alice</td>
                  <td>alice@email.com</td>
                  <td>
                    <ButtonGroup>
                      <Button className='btn-sm' color='warning' onClick={toggleEdit}>{constant.EDIT}</Button>
                      <Button className='btn-sm' color='danger' onClick={toggleDelete}>{constant.DELETE}</Button>
                    </ButtonGroup>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bob</td>
                  <td>bob@email.com</td>
                  <td>
                    <span className="py-0 px-1 bg-warning rounded text-white">delayed</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Duck</td>
                  <td>duck@email.com</td>
                  <td>
                    <span className="py-0 px-1 bg-success rounded text-white">active</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Shepherd</td>
                  <td>shepherd@email.com</td>
                  <td>
                    <span className="py-0 px-1 bg-danger rounded text-white">removed</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Widget>
        </Col>
      </Row>
      <BasicModal
        isOpen={isOpenEdit}
        toggle={toggleEdit}
        // select = {btnCreateTruck}
        // content = {content}
        title={constant.EDIT}
      ></BasicModal>
      <BasicModal
        isOpen={isOpenDelete}
        toggle={toggleDelete}
        select = {btnDeleteTruck}
        content = {deleteContent}
        title={constant.DELETE}
      ></BasicModal>
    </div>
  );
}

export default Truck;

