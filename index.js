
loadCategories();
loadSales();
loadNews();


/*MOBILE MENU TOGGLE*/
function toggleMobileMenu(){
    var mobileNav = document.querySelector('nav.mobile');
    
    mobileNav.classList.toggle('active');
}



/*LOAD CATEGORIES*/
function loadCategories(){
    //CATEGORY ARRAY
    var categoryArray = [
        ['Headphones','cat-img1.png','Are you a music lover? Click this category to buy the best headphone in the market today.'],
        ['Smart Watches','cat-img2.png','Never be late again for any event with our finest collection of smart watches.'],
        ['Mobile Phones','cat-img3.png','Androids, Iphones, Ipads, we have them all. Just make your choice, and we will surely deliver.'],
        ['Advanced TVs','cat-img4.png','Keep your eyes busy and entertained with our collection of smart television sets.'],
        ['Modern PCs','cat-img5.png','there is no better place to get yourself a reliable Computer if not from us'],
        ['Other Devices','cat-img6.png','Explore our world of unique tech gadgets you need for your everyday lifestyle.']
    ]
    
    
    //GET THE CATEGORY TAB
    var categoryTab = document.querySelector('.category-tab');
    
    //CREATE CATEGORIES AND APPEND TO CATEGORY TAB
    categoryArray.forEach((category, index) => {
        //LINEUP
        var categoryName = category[0];
        var categoryImg = category[1];
        var categoryTag = category[2];
        
        
        //BUTTON CHOICE
        var btnChoice = "is-secondary";
        if(index == "0" || index == "5"){
            btnChoice = "is-primary";
        }
        
        
        
        var categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-cont');
        categoryContainer.style.background = `url('./assets/images/${categoryImg}')`;
        categoryContainer.style.backgroundSize = "100% 100%";
        
        categoryContainer.innerHTML = `<div class="category-shade"><div class="category-title">${categoryName}</div><div class="category-tag">${categoryTag}</div><div class="btn ${btnChoice}">View Products</div></div>`;
        
        categoryTab.append(categoryContainer);
    });
}





/*LOAD SALES*/
function loadSales(){
    //SALES ARRAY
    var salesArray = [
        ['sales-img1.png','0','JBL Ultra Speakers','230'],
        ['sales-img2.png','0','Sonic Visual Recorder','750'],
        ['sales-img3.png','5','New Age 15000MaH Power Bank','43'],
        ['sales-img4.png','0','Apple Air Pod Classic','12']
    ];
    
    //GET SALES CONTAINER
    var salesCont = document.querySelector('.sales-cont');
    
    //CREATE SALES TAB AND APPEND TO CONT
    salesArray.forEach((sales, index) => {
        //LINEUP
        var salesImg = sales[0];
        var salesDiscount = sales[1];
        var salesName = sales[2];
        var salesPrice = sales[3];
        
        var salesDisStat = '';
        if(salesDiscount != "0"){
            salesDisStat = "active";
        }
        
        var salesTab = document.createElement('div');
        salesTab.classList.add('sales-tab');
        salesTab.innerHTML = `<div class="sales-img"><img src="./assets/images/${salesImg}"><div class="sales-discount ${salesDisStat} center">-${salesDiscount}%</div></div><div class="sales-name">${salesName}</div><div class="sales-price">$<span class="price">${salesPrice}</span></div>`;
        
        
        salesCont.append(salesTab);
    });
}





/*LOAD NEWS*/
function loadNews(){
    //SALES ARRAY
    var newsArray = [
        ['news-img1.png','September 9, 2023','CEO of JBL Headphones division to resign in few months','John Buiget, the current company executive officer of the JBL audio company has issued his resignation later to the company.'],
        ['news-img2.png','October 5, 2023','New WhatsApp Update','The popular Meta encrypted chat platform has just released a new update which was made to the app platform on September 2023.'],
        ['news-img3.png','October 20, 2023','Musk to charge X users annually','The multi-billionaire made it known to the press on the 20th October, 2023, of his intentions to charge X users a $1 annual fee.']
    ];
    
    //GET SALES CONTAINER
    var newsCont = document.querySelector('.news-cont');
    
    //CREATE NEWS TAB AND APPEND TO CONT
    newsArray.forEach((news, index) => {
        //LINEUP
        var newsImg = news[0];
        var newsDate = news[1];
        var newsTitle = news[2];
        var newsTag = news[3];
        
        
        var newsTab = document.createElement('div');
        newsTab.classList.add('news-tab');
        newsTab.innerHTML = `<div class="news-img fw"><img src="./assets/images/${newsImg}"></div> <div class="news-date">${newsDate}</div><div class="news-title">${newsTitle}</div><div class="news-tag">${newsTag}</div>`;
        
        
        newsCont.append(newsTab);
    });
}











