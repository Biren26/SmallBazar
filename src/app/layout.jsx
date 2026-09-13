import '../../src/index.css';
import '../../src/App.css';
import '../components/header.css';
import '../store-pages/home/HomePage.css';
import '../store-pages/checkout/checkout-header.css';
import '../store-pages/checkout/CheckoutPage.css';
import '../store-pages/orders/OrdersPage.css';
import '../store-pages/TrackingPage.css';

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Browse products and manage your orders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
