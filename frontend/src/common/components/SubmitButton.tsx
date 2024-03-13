import { Button } from 'antd';

type Props = {
  loading: boolean;
  text: string;
};
const SubmitButton = ({ loading, text }: Props) => {
  return (
    <Button
      id="submit"
      type="primary"
      htmlType="submit"
      className="w-full flex justify-center items-center space-x-3 mt-5"
    >
      {loading ? (
        <svg
          style={{
            background: 'none',
            shapeRendering: 'auto',
          }}
          width="16px"
          height="16px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            r="42"
            strokeDasharray="113.09733552923255 150"
            transform="rotate(306.582 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            >
              <span>{text}</span>
            </animateTransform>
          </circle>
        </svg>
      ) : null}
      <span>{text}</span>
    </Button>
  );
};

export default SubmitButton;
