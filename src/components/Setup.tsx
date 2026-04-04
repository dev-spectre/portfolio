export default function Setup() {
  const setup = [
    {
      name: "OS",
      value: "CachyOS",
    },
    {
      name: "WM",
      value: "Hyprland",
    },
    {
      name: "Terminal",
      value: "Alacritty",
    },
    {
      name: "Editor",
      value: "VSCode",
    },
    {
      name: "Hostname",
      value: "skynet",
    },
    {
      name: "Dot files",
      value: "Caelestia",
    },
  ];

  return (
    <section id="setup">
      <h2 className="text-accent uppercase mb-5 mt-16 text-xl">Dev Setup</h2>
      <ul className="divide-y divide-border">
        {setup.map((item, index) => (
          <li key={index} className="py-2 justify-between flex text-white">
            <strong className="text-secondary">{item.name}</strong> <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
