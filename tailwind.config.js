module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: '#171321',
        blush: '#f4e7e9',
        sand: '#faf7f3',
        brand: {50:'#fbf7f8',100:'#f7eef0',200:'#ecd9dd',300:'#e0c3ca',400:'#cfa6b1',500:'#bd8999',600:'#a36f7f',700:'#815764',800:'#5f404a',900:'#2e1b21'},
        gold: {300:'#e6cd9a',400:'#d9b674',500:'#c69a52',600:'#b98d4f',700:'#9c7640'}
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23,19,33,.08)',
        lift: '0 24px 60px -12px rgba(23,19,33,.22)'
      }
    }
  }
}
