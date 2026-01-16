import SectionTitle from "../typography/SectionTitle";
import Button from "../ui/Button";

export default function EmptySales() {
  return (
    <div className="flex flex-col items-center gap-10 pt-60">
      <SectionTitle title="Nenhuma venda registrada" />
      <p>Começe registrando sua primeira venda.</p>
      <Button>Nova venda</Button>
    </div>
  );
}
