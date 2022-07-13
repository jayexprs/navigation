export default function HorizontalMenu(props){
  const tree = () => props.tree;
  return (
    <For each={tree()}>{(branch) =>
      <p id={branch}>HI JEANA</p>
    }
    </For>
  )
}