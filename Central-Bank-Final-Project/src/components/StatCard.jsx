export default function StatCard({ title, value }) {
  return (
    <div className="card">
      <div>{title}</div>
      <strong>{value}</strong>
    </div>
  );
}