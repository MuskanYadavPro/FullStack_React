const { useState } = React;

// ProductCard component
const ProductCard = ({ name, price, status }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

// Main App component
const App = () => {
  const products = [
    { name: 'Wireless Mouse', price: 25.99, status: 'In Stock' },
    { name: 'Keyboard', price: 45.50, status: 'Out of Stock' },
    { name: 'Monitor', price: 199.99, status: 'In Stock' },
  ];

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          status={product.status}
        />
      ))}
    </div>
  );
};

// Render React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
