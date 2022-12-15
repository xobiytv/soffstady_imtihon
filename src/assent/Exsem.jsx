import React, { useState } from 'react'
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/feather/home";
import { settings } from "react-icons-kit/feather/settings";
import { userX } from "react-icons-kit/feather/userX";
import { speaker } from "react-icons-kit/feather/speaker";
import { fileText } from "react-icons-kit/feather/fileText";
import { headphones } from "react-icons-kit/feather/headphones";
import { search } from "react-icons-kit/feather/search";
import { bell } from "react-icons-kit/feather/bell";
import { user } from "react-icons-kit/feather/user";
import { moreVertical } from "react-icons-kit/feather/moreVertical";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import  "bootstrap/dist/css/bootstrap.min.css";
import { unlock } from "react-icons-kit/feather/unlock";
import { x } from "react-icons-kit/feather/x";

import './exsem.css'
import {data} from './setData'

export default function Exsem() {
  const [searcha, setSearch] = useState('')
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ul>
            <li className="red">
              <Icon className="l-search" size={20} icon={unlock} />
              Bloklash
            </li>
            <li className="yelloo">
              <Icon className="l-search" size={20} icon={unlock} />
              Blokdan chiqarish
            </li>
            <li className="red">
              <Icon className="l-search" size={20} icon={x} />
              Sessiyani tugatish
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <header>
        <div className="row p-0 m-0">
          <div className="col-3 p-0 left">
            <ul>
              <li>
                <Icon className="l-search" size={20} icon={home} />
                Statistika
              </li>
              <li>
                <Icon className="l-search" size={20} icon={settings} />
                Amallar
              </li>
              <li>
                <Icon className="l-search" size={20} icon={speaker} />
                Foydalanuvchi siyosati
              </li>
              <li>
                <Icon className="l-search" size={20} icon={userX} />
                Ruxsatlar
              </li>
              <li>
                <Icon className="l-search" size={20} icon={fileText} />
                Hisobotlar
              </li>
              <li>
                <Icon className="l-search" size={20} icon={headphones} />
                Call-markaz
              </li>
            </ul>
          </div>
          <div className="col-9 rigth p-0">
            <div className="search-hed d-flex">
              <input
                onChange={(input) => setSearch(input.target.value)}
                type="text"
                placeholder="Search"
              />
              <div className="s-icon">
                <Icon className="s-icon-a " size={20} icon={search} />
                <Icon className="s-icon-a" size={20} icon={bell} />
                <Icon className="s-icon-a" size={20} icon={user} />
              </div>
            </div>

            <div className="id-search">
              <p>ID orqali qidirish</p>
              <div className="id-input">
                <input
                  onChange={(id) => setSearch(id.target.value)}
                  type="text"
                  placeholder="ID"
                />
                <button>Qidirish</button>
              </div>
            </div>

            <div className="col-10 d-flex align-items-center justify-content-end">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">User</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">JShShIR</th>
                    <th scope="col">Qurilma</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) => {
                      return searcha.toLowerCase() === ""
                        ? item
                        : item.first_name.toLowerCase().includes(searcha) ||
                            item.id.toLowerCase().includes(searcha);
                    })
                    .map((item) => (
                      <tr key={item.input} className="th">
                        <th>{item.id}</th>
                        <th>{item.first_name}</th>
                        <th>{item.phone}</th>
                        <th>{item.number}</th>
                        <th>{item.model}</th>

                        <a variant="primary" onClick={() => setModalShow(true)}>
                          <Icon
                            className="l-search text-center "
                            size={25}
                            icon={moreVertical}
                          />
                        </a>
                      </tr>
                    ))}
                </tbody>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </table>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
