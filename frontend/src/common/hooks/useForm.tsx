import { Form, Input } from 'antd';
import { useEffect } from 'react';
import { IFormElement } from '../models/IFormElement';
import SubmitButton from '../components/SubmitButton';

type Props = {
  inputs: IFormElement[];
  onSubmit: (values: unknown) => void;
  is_edit_mode?: boolean;
  data?: unknown;
  loading: boolean;
  errorMessage?: string;
};

const UseForm = ({
  inputs,
  onSubmit,
  is_edit_mode = false,
  data,
  loading,
  errorMessage,
}: Props) => {
  const { TextArea } = Input;
  const [LuckyNumberForm] = Form.useForm();

  const onFormSubmit = (values: unknown) => {
    onSubmit(values);
  };

  useEffect(() => {
    if (is_edit_mode) {
      LuckyNumberForm.setFieldsValue(data);
    }
  }, []);

  return (
    <Form
      onFinish={onFormSubmit}
      form={LuckyNumberForm}
      layout="vertical"
      className="w-full"
      requiredMark={false}
    >
      {inputs.map((input, index) => (
        <Form.Item
          className="mb-8"
          key={index}
          name={input.name}
          label={<span style={{ color: '#afaabc' }}>{input.label}</span>}
          rules={[
            {
              required: input.is_required,
              message: input.required_message,
            },
          ]}
        >
          <Input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />

          {input.type === 'textarea' && (
            <TextArea
              rows={4}
              maxLength={6}
              name={input.name}
              placeholder={input.placeholder}
            />
          )}
        </Form.Item>
      ))}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      <SubmitButton text="Submit" loading={loading} />
    </Form>
  );
};

export default UseForm;
