import { VariableGroup } from "components/theme/variables";

export type Route = {
  anchor: string;
  component: string;
  name: string;
  variables?: VariableGroup[];
};
