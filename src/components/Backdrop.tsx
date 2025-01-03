type BackdropPropsType = {
  handleOpenBackdrop: (isOpen: boolean) => void
};

function Backdrop({ handleOpenBackdrop }: BackdropPropsType) {
  return (
    <div
      onClick={() => handleOpenBackdrop(false)}
      className="absolute inset-0 z-[1] flex items-center justify-center bg-eerieBlack/50"
    />
  );
}

export default Backdrop;
