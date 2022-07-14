import VerticalMenu from './vertical-menu.jsx';

export default function HorizontalMenu(props){
  const tree = () => props.tree;
  return (
    <For each={tree()}>{(branch) =>
      <div class="box" id={branch}>{branch.name}
        <VerticalMenu tree={branch.links} />
      </div>
    }
    </For>
  )
}