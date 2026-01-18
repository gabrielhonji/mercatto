import PageHeader from "../../components/typography/PageHeader";
import BackButton from "../../components/ui/BackButton";

export default function NotFound() {


  return (
    <div className="min-h-screen w-screen flex flex-col gap-16 justify-center items-center bg-amber-50">
      <div className="flex flex-col gap-4 items-center">
        <PageHeader title="404" />
        <p>A página que você está procurando não existe.</p>
      </div>
      <BackButton >Voltar</BackButton>
    </div>
  );
}
