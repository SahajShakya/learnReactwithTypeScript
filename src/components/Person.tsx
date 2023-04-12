import { PersonProps } from "./Person_types"

export const Person = (props: PersonProps) => {
  return (
    <div>{props.name.first} and {props.name.last}</div>
  )
}