type ButtonClosePropsType = {
  handleOpenForm: (isOpen: boolean) => void;
};

function ButtonClose({ handleOpenForm }: ButtonClosePropsType) {
  return (
    <button
      type="button"
      onClick={() => handleOpenForm(false)}
      className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-lg border border-solid border-charcoal/25 transition-all hover:shadow-md active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

export default ButtonClose;
