function toggleCustomField(fieldId) {
      var fieldContent = document.getElementById(fieldId);
      var isDisplayed = getComputedStyle(fieldContent).display === 'block';
      
      fieldContent.style.display = isDisplayed ? 'none' : 'block';
    }
    
    function openLightbox(imageUrl) {
      var lightbox = document.getElementById('lightbox');
      var lightboxImage = document.getElementById('lightbox-image');
      
      lightboxImage.src = imageUrl;
      lightbox.style.display = 'flex';
    }
    
    function closeLightbox() {
      var lightbox = document.getElementById('lightbox');
      
      lightbox.style.display = 'none';
    }


const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">


  return `
<header>

        <div class="header-content">
			<div class="header-title">⦅finchbones⦆</div>
	        <nav>
	          <ul>
	            <li><a href="#">Home</a></li>
	            <li><a href="#">Page 1</a></li>
	            <li><a href="#">Page 2</a></li>
	            <li><a href="#">Page 3</a></li>
	            <li><a href="#">Page 5</a></li>
	            <li><a href="#">Page 4</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  
      <aside class="left-sidebar">
	  
        <div class="sidebar-section">
          <div class="sidebar-title">testing</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">testing 2</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="#">List</a></li>
            <li>List</li>
          </ul>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<header>

        <div class="header-content">
        <img style="width: 100px; height: 70px; float: right;" src="https://finchbones.neocities.org/images/HTC_Heritage%20Library_Inspiring%20Insects%2006Element%203.png"></img>
			<div class="header-title">⦅finchbones⦆</div>
	        <nav>
	          <ul>
	            <li><a href="https://finchbones.neocities.org">Home</a></li>
	            <li><a href="https://finchbones.neocities.org/index-1">Blog</a></li>
	            <li><a href="https://finchbones.neocities.org/artqueue">Art Queue</a></li>
	            <li><a href="https://finchbones.neocities.org/oc_directory">OCs</a></li>
	            <li><a href="https://finchbones.neocities.org/shrine">Shrines & Collections</a></li>
	            <li><a href="https://finchbones.neocities.org/credit_page">Credits</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  
      <aside class="left-sidebar">
	  
        <div class="sidebar-section">
          <div class="sidebar-title">about me</div>
          <p>Hi! My name is Elliot ^w^. I'm a furry and trans man! 18+, minors please DNI!</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">My time and date</div>
          <blockquote>
            
            <iframe src="https://free.timeanddate.com/clock/i9jerpzj/n263/fn6/fs16/tct/pct/ahl/tt0/tw1/tm1/ts1/ta1/tb4" frameborder="0" width="141" height="38" allowtransparency="true"></iframe>


          </blockquote>
        </div>
        
        
		<div class="sidebar-section">
          <marquee>
		  	<a href="https://graphic.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/blinkies/stamps/tumblr_48eddd33be41c7a74fb77f3fbce6704e_fb60e50a_100.png"></a>
		  	<a href="https://graphic.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/blinkies/stamps/tumblr_48eddd33be41c7a74fb77f3fbce6704e_fb60e50a_100.png""></a>
		  	<a href="https://graphic.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/blinkies/stamps/tumblr_48eddd33be41c7a74fb77f3fbce6704e_fb60e50a_100.png""></a>
		  	<a href="https://graphic.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/blinkies/stamps/tumblr_48eddd33be41c7a74fb77f3fbce6704e_fb60e50a_100.png""></a>
		  </marquee>
        </div>
            
    
    
    <div class="sidebar-section">
          <div class="sidebar-title">Link back to my site (this is a button)!</div>
          <div class="site-button">
		  	<a href="https://finchbones.neocities.org/" target="_blank"><img style="width: 88px; height: 31px;" src="https://finchbones.neocities.org/images/blinkies/buttons/sitebutton.png"></a>
			<textarea><a href="https://finchbones.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/blinkies/buttons/sitebutton.png"</a></textarea>
		  </div>
        </div>
    
		
		<div class="sidebar-section">
          <div class="sidebar-title">Link back to my site (this is formatted for webgardens)!</div>
          <div class="site-button">
		  	<a href="https://finchbones.neocities.org/" target="_blank"><img style="width: 100px; height: 100px;" src="https://finchbones.neocities.org/images/pot.png"></a>
			<textarea><a href="https://finchbones.neocities.org/" target="_blank"><img src="https://finchbones.neocities.org/images/pot.png"</a></textarea>
		  </div>
        </div>
        
        
      </aside>
      
      
      <footer>Layout by <a href="https://petrapixel.neocities.org/">Petrapixel, <a href="https://petrapixel.neocities.org/coding/layout-generator"> using her layout generator!</a></a></footer>
	
      `;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
