import {
  FaBell,
  FaBolt,
  FaChartLine,
  FaDiceD6,
  FaHome,
  FaIcons,
  FaListUl,
  FaMapMarkerAlt,
  FaPhotoVideo,
  FaPollH,
  FaRegSquare,
  FaShoppingCart,
  FaSlackHash,
  FaWpforms,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {
  BsCalendar,
  BsLayoutSidebarInset,
  BsLayoutWtf,
  BsTable,
} from 'react-icons/bs'
import { AiOutlineForm } from 'react-icons/ai'
import { MdErrorOutline, MdPages } from 'react-icons/md'

import { MenuItems, routePath } from "utils/enums";

const {
  toDashboard,
  toWidgets,
  toUIElements,
  toAdvanceUI,
  toFormElements,
  toEditors,
  toCharts,
  toTables,
  toPopups,
  toNotification,
  toIcons,
  toMaps,
  toUserPages,
  toErrorPages,
  toGeneralPages,
  toECommerce,
  toEMail,
  toCalendar,
  toTodoList,
  toGallery,
  toDocumentation,
} = routePath;
const {
  Dashboard,
  Widgets,
  UIElements,
  AdvanceUI,
  FormElements,
  Editors,
  Charts,
  Tables,
  Popups,
  Notification,
  Icons,
  Maps,
  UserPages,
  ErrorPages,
  GeneralPages,
  ECommerce,
  Email,
  Calendar,
  TodoList,
  Gallery,
  Documentation,
} = MenuItems;

export const sidebarMenuItems = [
  {
    key: 1,
    icon: <FaHome />,
    path: toDashboard,
    name: Dashboard,
    routesArray: [toDashboard],
    selected: true,
    subMenu: [],
  },
  {
    key: 2,
    icon: <FaDiceD6 />,
    path: toWidgets,
    name: Widgets,
    routesArray: [toWidgets],
    selected: true,
    subMenu: [],
  },
  {
    key: 3,
    icon: <BsLayoutSidebarInset />,
    path: toUIElements,
    name: UIElements,
    routesArray: [toUIElements],
    selected: true,
    subMenu: [],
  },
  {
    key: 4,
    icon: <BsLayoutWtf />,
    path: toAdvanceUI,
    name: AdvanceUI,
    routesArray: [toAdvanceUI],
    selected: true,
    subMenu: [],
  },
  {
    key: 5,
    icon: <FaWpforms />,
    path: toFormElements,
    name: FormElements,
    routesArray: [toFormElements],
    selected: true,
    subMenu: [],
  },
  {
    key: 6,
    icon: <AiOutlineForm />,
    path: toEditors,
    name: Editors,
    routesArray: [toEditors],
    selected: true,
    subMenu: [],
  },
  {
    key: 7,
    icon: <FaChartLine />,
    path: toCharts,
    name: Charts,
    routesArray: [toCharts],
    selected: true,
    subMenu: [],
  },
  {
    key: 8,
    icon: <BsTable />,
    path: toTables,
    name: Tables,
    routesArray: [toTables],
    selected: true,
    subMenu: [],
  },
  {
    key: 9,
    icon: <FaRegSquare />,
    path: toPopups,
    name: Popups,
    routesArray: [toPopups],
    selected: true,
    subMenu: [],
  },
  {
    key: 10,
    icon: <FaBell />,
    path: toNotification,
    name: Notification,
    routesArray: [toNotification],
    selected: true,
    subMenu: [],
  },
  {
    key: 11,
    icon: <FaIcons />,
    path: toIcons,
    name: Icons,
    routesArray: [toIcons],
    selected: true,
    subMenu: [],
  },
  {
    key: 12,
    icon: <FaMapMarkerAlt />,
    path: toMaps,
    name: Maps,
    routesArray: [toMaps],
    selected: true,
    subMenu: [],
  },
  {
    key: 13,
    icon: <MdPages />,
    path: toUserPages,
    name: UserPages,
    routesArray: [toUserPages],
    selected: true,
    subMenu: [],
  },
  {
    key: 14,
    icon: <MdErrorOutline />,
    path: toErrorPages,
    name: ErrorPages,
    routesArray: [toErrorPages],
    selected: true,
    subMenu: [],
  },
  {
    key: 15,
    icon: <FaSlackHash />,
    path: toGeneralPages,
    name: GeneralPages,
    routesArray: [toGeneralPages],
    selected: true,
    subMenu: [],
  },
  {
    key: 16,
    icon: <FaShoppingCart />,
    path: toECommerce,
    name: ECommerce,
    routesArray: [toECommerce],
    selected: true,
    subMenu: [],
  },
  {
    key: 17,
    icon: <SiGmail />,
    path: toEMail,
    name: Email,
    routesArray: [toEMail],
    selected: true,
    subMenu: [],
  },
  {
    key: 18,
    icon: <BsCalendar />,
    path: toCalendar,
    name: Calendar,
    routesArray: [toCalendar],
    selected: true,
    subMenu: [],
  },
  {
    key: 19,
    icon: <FaListUl />,
    path: toTodoList,
    name: TodoList,
    routesArray: [toTodoList],
    selected: true,
    subMenu: [],
  },
  {
    key: 20,
    icon: <FaPhotoVideo />,
    path: toGallery,
    name: Gallery,
    routesArray: [toGallery],
    selected: true,
    subMenu: [],
  },
  {
    key: 21,
    icon: <FaPollH />,
    path: toDocumentation,
    name: Documentation,
    routesArray: [toDocumentation],
    selected: true,
    subMenu: [],
  },
];

export const dummyActivities = [
  {
    id: 1,
    recent: "42 mins ago",
    icon: (
      <FaListUl className="rounded-circle fs-1 me-3 status-icon bg-orange text-white" />
    ),
    title: "Task Updated",
    name: "Dharmik",
    status: "Updated a Task",
  },
  {
    id: 2,
    recent: "1 day ago",
    icon: (
      <FaBolt className="rounded-circle fs-1 me-3 status-icon bg-info text-white" />
    ),
    title: "Deal Added",
    name: "Panshi",
    status: "Updated a Task",
  },
  {
    id: 3,
    recent: "42 minutes ago",
    icon: (
      <FaBolt className="rounded-circle fs-1 me-3 status-icon bg-info text-white" />
    ),
    title: "Published Article",
    name: "Rasel",
    status: "Updated a Task",
  },
  {
    id: 4,
    recent: "1 day ago",
    icon: (
      <FaBolt className="rounded-circle fs-1 me-3 status-icon bg-info text-white" />
    ),
    title: "Dock Updated",
    name: "Reshmi",
    status: "Updated a Dock",
  },
  {
    id: 5,
    recent: "1 day ago",
    icon: (
      <FaBolt className="rounded-circle fs-1 me-3 status-icon bg-info text-white" />
    ),
    title: "Replayed Comment",
    name: "Jenathon",
    status: "Added a Comment",
  },
];

type dummyTableDataTypes = {
  id: number;
  invoice: number;
  customers: string;
  from: string;
  price: string;
  status: "process" | "open" | "on-hold";
}[];

export const dummyTableData: dummyTableDataTypes = [
  {
    id: 1,
    invoice: 12386,
    customers: "Dharmik Shah",
    from: "India",
    price: "$462",
    status: "process",
  },
  {
    id: 2,
    invoice: 12386,
    customers: "Mark Zuckerberg",
    from: "USA",
    price: "$2995",
    status: "open",
  },
  {
    id: 3,
    invoice: 12386,
    customers: "Marko",
    from: "Brazil",
    price: "$299",
    status: "on-hold",
  },
  {
    id: 4,
    invoice: 12386,
    customers: "Bill Gates",
    from: "Pakistan",
    price: "$30",
    status: "process",
  },
  {
    id: 5,
    invoice: 12386,
    customers: "Mr Incredible",
    from: "Russia",
    price: "$956",
    status: "open",
  },
];
export const dummyStatusData = [
  {
    id: 1,
    title: 'Revinue Status',
    amount: '',
    withDropdown: false,
    variant: 'info',
  },
  {
    id: 2,
    title: 'Page View',
    amount: '',
    withDropdown: false,
    variant: 'warning',
  },
  {
    id: 1,
    title: 'Bounce Rate',
    amount: '',
    withDropdown: false,
    variant: 'orange',
  },
  {
    id: 1,
    title: 'Revinue Status',
    amount: '',
    withDropdown: false,
    variant: 'primary',
  },
]
