type ButtonFieldProps = {
    buttonValue: string;
    buttonClicked: string;
    setButtonClicked: (value : string) => void;
}

// const asdf = { buttonValue, buttonClicked, setButtonCLicked }

export default function ButtonField(
  { buttonValue, buttonClicked, setButtonClicked }: ButtonFieldProps,
) {
  const handleClick = () => {
    if (buttonValue === '전체') {
      console.log(`${buttonValue} clicked!`);

      setButtonClicked(buttonValue);
    } else {
      console.log(`${buttonValue} clicked!`);

      setButtonClicked(buttonValue);
    }
  };

  return (
    <input
      type="button"
      value={buttonValue}
      onClick={handleClick}
    />
  );
}
