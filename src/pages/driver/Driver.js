import React, { useState } from 'react';
import cx from 'classnames';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Table
} from 'reactstrap';

import Widget from '../../components/Widget';

import s from './Driver.module.scss';

import * as constant from '../../constants';
import BasicModal from '../../components/Modal/Modal';

const Driver = () => {

  const formatDate = (str) => {
    return str.replace(/,.*$/, "");
  };

  return (
    <div className={s.root}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem active>{constant.DRIVER}</BreadcrumbItem>
      </Breadcrumb>
      <h1 className="mb-lg">{constant.DRIVER}</h1>
      <Row>
        <Col sm={12} md={12}>
          <Widget
            title={
              <div>
                {/* <div className="pull-right mt-n-xs">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="form-control input-sm"
                  />
                </div> */}
                <h5 className="mt-0 mb-3">
                  <i className="fa fa-user mr-xs opacity-70" />{' '}
                    { constant.DRIVER + constant.LIST }
                  </h5>
              </div>
            }
          >
          <BasicModal 
            buttonLabel='TEST'
            className=''
          />
            <Table responsive borderless className={cx('mb-0', s.usersTable)}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{constant.NAME}</th>
                  <th>Email</th>
                  <th>{ constant.OPTION }</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alice</td>
                  <td>alice@email.com</td>
                  <td>
                    <span className="py-0 px-1 bg-success rounded text-white">active</span>
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
      
    </div>
  );
}

export default Driver;

