export const routePath = {
  toDashboard: "/",
  toWidgets: "/widgets",
  toUIElements: "/ui-elements", // Consistent with other keys
  toAdvanceUI: "/advanced-ui", // Consistent with other keys
  toFormElements: "/form-elements",
  toEditors: "/editors",
  toCharts: "/charts",
  toTables: "/tables",
  toPopups: "/popups",
  toNotification: "/notification",
  toIcons: "/icons",
  toMaps: "/maps",
  toUserPages: "/user-pages",
  toErrorPages: "/error-pages",
  toGeneralPages: "/general-pages",
  toECommerce: "/e-commerce",
  toEMail: "/email", // Consistent with other keys
  toCalendar: "/calendar",
  toTodoList: "/todo-list",
  toGallery: "/gallery",
  toDocumentation: "/documentation",
};

export enum MenuItems {
  Dashboard = "Dashboard",
  Widgets = "Widgets",
  UIElements = "UI Elements",
  AdvanceUI = "Advanced UI",
  FormElements = "Form Elements",
  Editors = "Editors",
  Charts = "Charts",
  Tables = "Tables",
  Popups = "Popups",
  Notification = "Notifications",
  Icons = "Icons",
  Maps = "Maps",
  UserPages = "User Pages",
  ErrorPages = "Error Pages",
  GeneralPages = "General Pages",
  ECommerce = "E-Commerce",
  Email = "E-mail",
  Calendar = "Calendar",
  TodoList = "Todo List",
  Gallery = "Gallery",
  Documentation = "Documentation",
}

export enum Status {
  InProcess = "process",
  Open = "open",
  OnHold = "on-hold",
}