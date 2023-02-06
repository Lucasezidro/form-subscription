type Payment = {
  title: "Monthly" | "Yearly"
  color: "#02295a" | "#9699ab"
}

export function PaymentPlan(props: Payment) {
  return <span style={{ color: props.color }}>{props.title}</span>;
}
