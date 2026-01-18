import PageHeader from "../../components/typography/PageHeader.tsx";
import SalesTableSkeleton from "../../components/loading/TableSkeleton.tsx";
import EmptySales from "../../components/empty-states/EmptySales.tsx";

export default function Vendas() {
  return (
    <div>
      <PageHeader title="Vendas" />
      <SalesTableSkeleton />
    </div>
  );
}
