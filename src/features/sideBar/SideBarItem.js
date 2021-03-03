export function SideBarItem() {
  const items = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
  ];
  return (
    <div>
      {items ? (
        items.map((item) => (
          <li key={item.id}>
            {/*             <Link to={`/${item.id}`}>{item.title || "no description"}</Link> */}
          </li>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}
