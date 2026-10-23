import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"; 
import "./App.css";

export default function App() {
  const max = 50;
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(false);

  const addVisitor = (n) => {
    if (count + n > max) {
      setWarning(true);

      // SweetAlert muncul di sini
      Swal.fire({
        title: "🚫 Kapasitas Penuh!",
        text: "Jumlah pengunjung sudah mencapai batas maksimal 50 orang.",
        icon: "warning",
        confirmButtonText: "Mengerti",
        background: "#0f1419",
        color: "#e8f6f3",
        confirmButtonColor: "#00e0ff",
      });

      return;
    }

    setWarning(false);
    setCount(count + n);
  };

  const reset = () => {
    setCount(0);
    setWarning(false);

    Swal.fire({
      title: "🔄 Reset Berhasil",
      text: "Jumlah pengunjung sudah kembali ke 0.",
      icon: "success",
      background: "#0f1419",
      color: "#e8f6f3",
      confirmButtonColor: "#00e0ff",
    });
  };

  return (
    <main className="container">
      <header>
        <h1>🎬 Penghitung Pengunjung Bioskop</h1>
        <p className="subtitle">Pantau jumlah penonton dengan mudah dan cepat</p>
      </header>

      <section className="display-section">
        <div className={`counter-display ${warning ? "warning" : ""}`} id="count">
          {count}
        </div>
        <p className="info">
          Maksimal kapasitas: <strong>50 orang</strong>
        </p>
      </section>

      <section className="button-section">
        <button className="btn green" onClick={() => addVisitor(1)}>+1</button>
        <button className="btn blue" onClick={() => addVisitor(2)}>+2</button>
        <button className="btn red" onClick={reset}>Reset</button>
      </section>

      <footer>
        <p className="footer-text">© 2025 Bioskop XXI | Sistem Penghitung Manual</p>
      </footer>
    </main>
  );
}
