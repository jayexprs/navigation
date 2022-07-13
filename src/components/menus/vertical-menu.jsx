function VerticalMenu(props) {
  const tree = () => props.tree;
  return(
  <ul class='list'>
    <For each={tree()}>{(branch) =>  
      {if (!branch.links.length){
        return <li>{branch.name}</li>
      }
      else {
        return <li>{branch.name}<VerticalMenu tree={[...branch.links]}/></li>
      }
      }}
    </For>
  </ul>
  );
}
export default VerticalMenu;
