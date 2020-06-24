/* THIRD-PARTY IMPORTS */
import React, { useState } from 'react';
import { Button, Layout, Tooltip, Modal, Input } from 'antd';
// import marked from 'marked';
import SimpleMDE from 'react-simplemde-editor';

/* CUSTOM IMPORTS */

/* Assets */
import logo from '../assets/images/baythium-ecosystem-1.svg';
import '../styles/components/sidebar.css';

import NoteList from './NoteList';
import { NAME } from '../configs/app';

/* ************************************************************************* */

const { Sider } = Layout;

export default function Sidebar(props) {
  const cls = ['bth-sidebar'];

  const [modalVisibility, setModalVisibility] = useState(false);

  const showModal = () => {
    setModalVisibility(true);
  };

  const handleModalOk = e => {
    setModalVisibility(false);
  }

  const handleModalCancel = e => {
    setModalVisibility(false);
  }

  const handleEditorChange = value => {
  }

  return(
    <Sider theme="light"  className = { cls.join(' ') } breakpoint = "lg" collapsedWidth = "0">
      <div className="bth-sidebar__logo">
        <img src = { logo } alt = { NAME }/>
        <h1>{ NAME }</h1>
        <p>Built for developers in order to make technology open to the world</p>
      </div>
      <Tooltip placement="top" title="Creates a new note">
        <Button onClick={showModal} style={{ marginBottom: '16px' }} block>New Note</Button>
      </Tooltip>

      <Modal
        title="Note Editing"
        visible={modalVisibility}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <label>Name</label>
        <Input id="name" style={{ marginBottom: '16px' }}/>

        <label>Content</label>
        <SimpleMDE id="content" onChange={handleEditorChange}/>
      </Modal>
      
      <NoteList notes = { props.notes }/>
    </Sider>
  )
}