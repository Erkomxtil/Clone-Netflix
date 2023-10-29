import { CheckEmail } from "./CheckEmail"

export const HandleSubmit = (e: React.FormEvent<HTMLFormElement>, setButtonClick: (value: React.SetStateAction<boolean>) => void ) => {
  e.preventDefault()
  const formData = (e.target as HTMLInputElement).getElementsByTagName("input")
  const email = formData[0].value
  if(email === "") {
    setButtonClick(false)
  } else {
    if(email !== "" && CheckEmail(email) === false) {
      setButtonClick(false)
    } else {
      setButtonClick(true)
    }
  }
}