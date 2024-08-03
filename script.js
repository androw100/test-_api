async function testFetchAPI() {
    const url = "https://qasimahapp.com/api/home/1";
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (data && data.data) {
        console.log("Data fetched successfully:", data.data);
        // عرض البيانات في الـ console أو في الصفحة
        displayTestData(data.data);
      } else {
        console.error("No data found in response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function displayTestData(data) {
    let container = document.getElementById("test-data-container");
  
    if (!container) {
      container = document.createElement("div");
      container.id = "test-data-container";
      document.body.appendChild(container);
    }
  
    container.innerHTML = "";
  
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "test-data-item";
      div.innerHTML = `
        <p>ID: ${item.id}</p>
        <p>Title: ${item.title}</p>
        <p>Description: ${item.description}</p>
      `;
      container.appendChild(div);
    });
  }
  
  // استدعاء الدالة لاختبار جلب البيانات
  testFetchAPI();
  