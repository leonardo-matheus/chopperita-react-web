declare module "react-input-mask" {
  const InputMask: React.ComponentType<InputMaskProps>;
  export default InputMask;

  interface InputMaskProps {
    mask: string;
    maskChar: string;
    alwaysShowMask?: boolean;
    children: (props: any) => React.ReactElement;
  }
}
