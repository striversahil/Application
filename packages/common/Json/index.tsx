import * as Slug from "@/packages/components";

import * as Template from "@/packages/components/core/__template";

import * as Table from "@/packages/components/core/Table";
import * as Pagination from "@/packages/components/core/Pagination";
import * as Toast from "@/packages/components/core/Toast";
import * as Shadcn_table from "@/packages/components/core/shadcn_table";

interface Props {
  title: string;
  description: string;
  usage: JSX.Element;
  code: string;
  prop: Object;
}

export const data: { [key: string]: Props } = {
  table: {
    title: Table.Title,
    description: Table.Description,
    usage: <Table.Usage />,
    code: Table.code,
    prop: Table.Props,
  },
  template: {
    title: Template.Title,
    description: Template.Description,
    usage: <Template.Usage />,
    code: Template.code,
    prop: Template.Props,
  },
  pagination: {
    title: Pagination.Title,
    description: Pagination.Description,
    usage: <Pagination.Usage />,
    code: Pagination.code,
    prop: Pagination.Props,
  },
  toast: {
    title: Toast.Title,
    description: Toast.Description,
    usage: <Toast.Usage />,
    code: Toast.code,
    prop: Toast.Props,
  },
  // shadcn_table: {
  //   title: Shadcn_table.Title,
  //   description: Shadcn_table.Description,
  //   usage: <Shadcn_table.Usage />,
  //   code: Shadcn_table.code,
  //   prop: Shadcn_table.Props,
  // },
};
