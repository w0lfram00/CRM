import StatusLabel, { Status } from "./components/StatusLabel/StatusLabel";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="bg-red-400">Home page</h1>
        <StatusLabel status={Status.Active}>LabelLabel</StatusLabel>
        <StatusLabel status={Status.NotActive}>LabelLabel</StatusLabel>
        <StatusLabel status={Status.Pending}>LabelLabel</StatusLabel>
        <StatusLabel status={Status.Suspended}>LabelLabel</StatusLabel>
      </main>
    </div>
  );
  ``;
}
