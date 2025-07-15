import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredDesigns = [
    { id: 1, title: 'فستان سهرة أنيق', designer: 'المصممة سارة' },
    { id: 2, title: 'عباية مطرزة فاخرة', designer: 'المصممة نورا' },
    { id: 3, title: 'فستان كاجوال عصري', designer: 'المصممة ريم' },
  ];

  const howItWorks = [
    { title: 'اختاري التصميم', description: 'تصفحي التصاميم أو ابدئي تصميمك' },
    { title: 'اختاري المصممة والخياطة', description: 'اختاري من أفضل المواهب' },
    { title: 'استلمي تصميمك', description: 'احصلي على تصميمك الفريد' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '100px 20px', background: '#f4f4f4' }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>اكتشفي أناقتك مع ستايلك</h1>
        <p style={{ fontSize: '20px', marginBottom: '30px' }}>
          منصة تصميم وطلب أزياء نسائية مخصصة
        </p>
        <Link to="/custom-design">
          <button style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', background: '#333', color: 'white', border: 'none' }}>
            ابدئي التصميم الآن
          </button>
        </Link>
      </section>

      {/* Featured Designs */}
      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>أحدث التصاميم</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {featuredDesigns.map((design) => (
            <div key={design.id} style={{ border: '1px solid #ddd', padding: '20px', width: '300px' }}>
              <h3>{design.title}</h3>
              <p>من {design.designer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '50px 20px', background: '#f4f4f4' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>كيف يعمل ستايلك؟</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
          {howItWorks.map((step, index) => (
            <div key={index} style={{ width: '300px' }}>
              <h3>{index + 1}. {step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;