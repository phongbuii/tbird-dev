import { InboxOutlined } from '@ant-design/icons';
import { Input, message, Modal, Select, Upload } from 'antd';
import { UploadProps } from 'antd/lib';
import React, { useEffect } from 'react';
interface ItemProps {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  onFinish: (data: { title: string; desc: string; type: string; id: number }) => void;
}

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const ModalPickSample = ({ isModalOpen, setIsModalOpen, onFinish }: ItemProps) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('');
  const [selectedFolder, setSelectedFolder] = React.useState(null);
  const { Option } = Select;

  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    setTitle('');
    setType('');
    setTitle('');
  }, [isModalOpen]);
  const handleOk = () => {
    setIsModalOpen(false);
    onFinish({
      title,
      desc: description,
      type,
      id: new Date().getTime(),
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Thêm mẫu phân tích"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Dragger {...props} style={{ marginTop: 32 }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Chọn tệp</p>
          <p className="ant-upload-hint">Kéo thả tệp để chọn</p>
        </Dragger>
        <Select
          style={{ width: '100%', marginTop: 16 }}
          placeholder="Loại tài liệu"
          onChange={(val) => setType(val)}
        >
          <Option value="email">email</Option>
          <Option value="pdf">pdf</Option>
          <Option value="word">word</Option>
        </Select>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginTop: 16 }}
        />
        <Input.TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginTop: 16 }}
        />
      </Modal>
    </>
  );
};

export default ModalPickSample;
