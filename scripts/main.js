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

fetch('../content.json').then(top-content => )
/* 
<div class="row">
                            <div class="title">Astana</div>
                            <div class="bar">
                                <div class="rect" style="width: 35%">
                                <div class="value">35%</div>
                                </div>
                            </div>
                        </div>
                        
                        <rect class="content-rect" x="0" y="0" rx="5" ry="5" width="349px" height="38px"></rect>
                                    <text x="15" y="25">/</text>
                                    <text x="360" y="25">2.5K</text>
                                    <text x="440" y="25">2.1K</text>
                                
                                    <rect class="content-rect" x="0" y="40" rx="5" ry="5" width="230px" height="38px"></rect>
                                    <text x="15" y="65">/blog/</text>
                                    <text x="360" y="65">376</text>
                                    <text x="440" y="65">139</text>
                                
                            
                            
                                <rect class="content-rect" x="0" y="80" rx="5" ry="5" width="308px" height="38px"></rect>
                                <text x="15" y="105">/reserve/success</text>
                                <text x="360" y="105">468</text>
                                <text x="440" y="105">290</text>
                            
                                <rect class="content-rect" x="0" y="120" rx="5" ry="5" width="128px" height="38px"></rect>
                                <text x="15" y="145">/product/product-details</text>
                                <text x="360" y="145">298</text>
                                <text x="440" y="145">176</text>
                            
                                <rect class="content-rect" x="0" y="160" rx="5" ry="5" width="197px" height="38px"></rect>
                                <text x="15" y="185">/bog/digital-marketting</text>
                                <text x="360" y="185">179</text>
                                <text x="440" y="185">57</text>
                                
                                */