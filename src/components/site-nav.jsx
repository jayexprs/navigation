export default function SiteNav(props){
  const where = () => props.where.toString().split('3000').pop();
  const menu = () => props.menu;

  return (
    <nav class="nav">
      <For each={menu()}>{
        (item) => {
          return <a href={item.links[0]} class={where() == item.links[0] ? 'current-nav' : 'not-current'}>{item.space}</a>
        }
      }
      </For>
    </nav>
  )
}