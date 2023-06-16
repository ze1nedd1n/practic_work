fetch('../cities.json').then(res => res.json()).then(res => {
    console.log(res);
    // let cities = element.cities;
    // let value = element.value;
    for (let i = 0; i < res.length; i++) {
        const element = res[i];
        const resId = document.getElementById('res');
        

        const row = document.createElement('div');
        row.className = 'row';

      
        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = element.city;
        
        row.append(title)
      
        const bar = document.createElement('div');
        bar.className = 'bar';
        row.append(bar);
      
        
        const rect = document.createElement('div');
        rect.className = 'rect';
        rect.style.width = element.value + '%';
        bar.append(rect);
      
        const value = document.createElement('div');
        value.className = 'value';
        value.innerText = element.value;
        rect.append(value);
        
        resId.append(row)
    }
});


/* 
<div class="row">
                            <div class="title">Astana</div>
                            <div class="bar">
                                <div class="rect" style="width: 35%">
                                <div class="value">35%</div>
                                </div>
                            </div>
                        </div>*/