import Expenses from "../src/components/Expenses/Expenses";

function App() {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurace";
  // const expensePrice = 150;

  const expenses = [
    {
      title: "Health Insurance",
      date: new Date(2021, 2, 28),
      amount: 50,
    },

    {
      title: "Car Insurance",
      date: new Date(2021, 2, 28),
      amount: 90,
    },

    {
      title: "House Insurance",
      date: new Date(2021, 2, 28),
      amount: 80,
    },

    {
      title: "Dental Insurance",
      date: new Date(2021, 2, 28),
      amount: 28,
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#000000", fontWeight: "normal" }}>Expense App</h1>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
