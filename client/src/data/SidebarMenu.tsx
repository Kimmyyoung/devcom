const sidebarStructure = [
  {
    id: "dashboard",
    title: "Job Board",
    name: "dasbor",
    parent: true,
    icon: "dasbor",
    link: "/"
  },
  {
    id: "dev-event",
    title: "Dev Event",
    name: "devEvent",
    parent: true,
    icon: "devevent",
    child: [
      {
        id: "vancouver",
        title: "Vancouver",
        name: "devEvent.vancouver",
        link: "/dashboard/devevent/vancouver",
        icon: "dot"
      },
      {
        id: "burnaby",
        title: "Burnaby",
        name: "devEvent.burnaby",
        link: "/dashboard/devevent/burnaby",
        icon: "dot"
      },
      {
        id: "coquitlam",
        title: "Coquitlam",
        name: "devEvent.coquitlam",
        link: "/dashboard/devevent/coquitlam",
        icon: "dot"
      },
    ]
  },
  {
    id: "community",
    title: "Community",
    name: "community",
    parent: true,
    link: "/dashboard/community",
    icon: "community"
  },
  {
    id: "calendar",
    title: "Calendar",
    name: "calendar",
    parent: true,
    link: "/dashboard/calendar",
    icon: "calendar"
  },
];

export { sidebarStructure };
