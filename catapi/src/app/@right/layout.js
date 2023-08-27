export default function RightSideLayout(props) {
  return (
      <div>
          {props.children}
          {props.voting}
      </div>
  )
}