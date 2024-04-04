import CardProducts from "../components/CardProducts"
import Header from "../components/header"

export default function HomePage() {
    return (
      <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CardProducts />
      </main>
      </>
    )
  }