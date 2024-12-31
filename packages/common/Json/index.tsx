import * as Slug from "@repo/components";

import * as Template from "@repo/components/core/__template";

import * as Table from "@repo/components/core/Table";
import * as Pagination from "@repo/components/core/Pagination";
import * as Toast from "@repo/components/core/Toast";

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
};
