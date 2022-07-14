export default function SiteNav(props){
  // these functions get the data that comes in as a prop, in layouts/SiteLayout.astro file
  // you write functions to keep the data 'reactive', meaning you can update the data file and the component
  // updates with the latest data
  const where = () => props.where.toString().split('3000').pop();
  const menu = () => props.menu;

  // <For ></For> is a built-in SolidJS component that loops over the data you pass in
  // the {(item) => ...} is the function that tells Solid what to do with each item in the data
  // here it's giving back an <a>anchor</a> tag, with a class to indicate which <a> is the selected one
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