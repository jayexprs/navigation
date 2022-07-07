function VerticalMenu(tree) {
  for (branch of tree) {
    if (branch.links.length) {
      <ul>
        {branch.name}
        <For items={branch.links}>
          <li>{item}</li>
        </For>
      </ul>;
    } else {
    }
  }
}
export default VerticalMenu;
