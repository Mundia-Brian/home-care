import StatsCounter from '../StatsCounter'

export default function StatsCounterExample() {
  const stats = [
    { value: 15, label: "Years Combined Experience", suffix: "+" },
    { value: 500, label: "Families Served", suffix: "+" },
    { value: 50, label: "Healthcare Professionals", suffix: "+" },
    { value: 10, label: "Counties Covered", suffix: "+" },
  ];

  return <StatsCounter stats={stats} />
}
