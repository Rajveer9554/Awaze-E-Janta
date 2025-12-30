export const setupAutoLogout = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const payload = token.split('.')[1];
      if (!payload) throw new Error("Invalid token format");
      
      const decoded = JSON.parse(atob(payload));
      const expiryTime = decoded.exp * 1000;
      const currentTime = Date.now();
      const timeUntilExpiry = expiryTime - currentTime;
      
      if (timeUntilExpiry > 0) {
        setTimeout(() => {
          localStorage.removeItem('token');
          window.location.href = '/login';
          alert('Session expired. Please login again.');
        }, timeUntilExpiry);
      } else {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    } catch (err) {
      console.error("Token parsing error:", err);
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
};

// export const setupInactivityLogout = (minutes = 10) => {
//   let inactivityTimer;
  
//   const resetTimer = () => {
//     clearTimeout(inactivityTimer);
//     inactivityTimer = setTimeout(() => {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//       alert('Logged out due to inactivity');
//     }, minutes * 60 * 1000);
//   };

//   const events = ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'];
  
//   events.forEach(event => {
//     document.addEventListener(event, resetTimer, true);
//   });

//   resetTimer();

//   return () => {
//     clearTimeout(inactivityTimer);
//     events.forEach(event => {
//       document.removeEventListener(event, resetTimer, true);
//     });
//   };
// };

// export const setupTabCloseLogout = () => {
//   window.addEventListener('beforeunload', () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   });
// };

export const manualLogout = async () => {
  try {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:8081/api/logout', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error("Logout error:", err);
  } finally {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
};