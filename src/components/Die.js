export default function Die(props) {
  const styles = props.on ? {backgroundColor: "#222222"} : {backgroundColor: "transparent"};

  return (
    <div style={styles} id="die" onClick={() => props.toggle(props.name)}>
      <h1>{props.value}</h1>
    </div>
  )
}