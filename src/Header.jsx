import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient.js';

const Header = ({ session }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  
  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'التصميم المخصص', href: '/custom-design' },
    { name: 'المصممات', href: '/designers' },
    { name: 'الخياطات', href: '/seamstresses' },
  ];

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px', maxWidth: '1200px', margin: 'auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontSize: '24px' }}>
          ستايلك
        </Link>
        <nav style={{ display: 'flex', gap: '20px' }}>
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} style={{ textDecoration: 'none', color: '#333' }}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div>
          {session ? (
            <>
              <Link to="/dashboard" style={{ textDecoration: 'none', marginLeft: '15px' }}>
                <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
                  لوحة التحكم
                </button>
              </Link>
              <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                تسجيل الخروج
              </button>
            </>
          ) : (
            <Link to="/login">
              <button style={{ padding: '8px 16px', cursor: 'pointer' }}>تسجيل الدخول</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;