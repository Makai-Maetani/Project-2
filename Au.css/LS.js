fetch('LB.txt')

return response.json();


    const { Name } = data;
    const { Score } = data.score[0];
    const { Date } = data.date; 
    
    
    document.querySelector("Name").innerText = " Name " + data;
    document.querySelector("Score").innerText = " Score " + data.score[0];
    document.querySelector("Date").innerText = " Date " + data.date;
    