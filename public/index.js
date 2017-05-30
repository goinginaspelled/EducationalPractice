var articleContent = (function(){
	var articlesTMP = [
	{
		id: '1',
		title: 'Трамп, brexit, bigdata',
		summary: 'Снова выборы',
		img: 'https://24smi.org/public/media/2016/10/13/234784647.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'CNN',
		tags:["politics", "USA"],
		content: 'Ничто не предвещало его победы. Ни на съезде республиканцев, ни на общенациональных выборах. Все расклады политтехнологов, социологов, аналитиков прочили победу Клинтон. А победил Трамп. Легко и уверенно '
	},
	{
		id: '2',
		title: 'Колин Ферт уезжает',
		summary: 'Британец Колин Ферт подал заявку на гражданство Италии',
		img: 'http://www.spletnik.ru/img/persons/Colin-Firth-post.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'lenta.ru',
		tags:["celebrities", "Britain"],
		content:'ританский актер Колин Ферт подал заявку на получение итальянского гражданства из-за процедуры выхода Великобритании из Евросоюза, получившей название Brexit. Об этом пишет Daily Express.Отмечается, что 56-летний артист обеспокоен последствиями Brexit.«Колин подал заявку на двойное гражданство (британское и итальянское), чтобы иметь те же документы, что и его жена с детьми», — заявил представитель артиста. Ферт женат на итальянском продюсере и режиссере Ливии Джуджолли уже 20 лет. У них двое детей.'
	},
	{
		id: '3',
		title: 'Tiny tracker',
		summary: 'Tiny Device Allows You To Track Your Vehicle Using Your Smartphone',
		img: 'http://www.nordicsemi.com/var/ezwebin_site/storage/images/news/press-releases/product-related-news/world-s-smallest-bluetooth-location-stickers-sticknfind-locate-misplaced-items-from-smartphone-app-using-nordic-semiconductor-nrf51822-socs/382397-1-eng-GB/World-s-smallest-Bluetooth-location-stickers-StickNFind-locate-misplaced-items-from-smartphone-app-using-Nordic-Semiconductor-nRF51822-SoCs.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'Aspelled',
		tags:["creatorCollumn", "tech"],
		content:'Have you ever lost your car on a parking lot? It happens. You park and go shopping. When you get back, you dont have a clue where your car is. Then you start roaming around clicking on the panic button on your car keys so the alarm goes off. It can be frustrating, especially on a hot, sunny day.No, you dont need to install an expensive GPS system to keep track of your car. Thats way too expensive. You would need to pay a monthly subscription fee just to use it. Dont we have enough bills to pay already? But is there a way to track your vehicle without spending a fortune? Yes, now there is! A California-based startup company was able to make this a reality. They created a tiny device that works with your smartphone, and it could be exactly what youre looking for!'
	},
	{
		id: '4',
		title: 'Breaking Bar',
		summary: 'В Нью-Йорке появится тематический бар Breaking Bad',
		img: 'http://www.espanarusa.com/files/autoupload/14/45/69/mhij5hle384966.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'usa.one',
		tags:["USA", "events"],
		content:'Это, конечно, не лаборатория по производству метамфетамина, но это нечто лучшее. В июле в Нью-Йорке откроется временный коктейль-бар в тематике Breaking Bad. Бар буквально приедет в город, так как будет распологаться в автофургоне.'
	},
	{
		id: '5',
		title: 'Единый Донбасс',
		summary: 'Жители Донбасса сдали по телефону ЛНР роту артиллеристов из ВСУ',
		img: 'http://ipolk.ru/uploads/topics/preview/00/02/83/40/f362b733df.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'nation-news.ru',
		tags:["Ukraine", "breakingNews"],
		content:'Американские и австралийские астрофизики обнаружили кандидата в черные дыры средней массы. Такое название они получили потому, что тяжелее обычных — то есть формирующихся в результате гравитационного коллапса звезд — объектов, но легче сверхмассивных черных дыр, как правило расположенных в активных ядрах крупных галактик. Происхождение необычных объектов до сих пор остается неясным. «Лента.ру» рассказывает о черных дырах промежуточных масс и об открытии ученых.'
	},
	{
		id: '6',
		title: 'Старый мэр за старые дома',
		summary: 'Лужков рассказал о своем опыте сноса пятиэтажек без акций протеста',
		img: 'https://pribalt.info/abc_lv/images/luzkov.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'rbk.ru',
		tags:["Russian", "oldfag"],
		content:'Выступая с лекцией в Пушкинском доме в Лондоне, Лужков высказал свое мнение по поводу дискуссии по сносу пятиэтажек в Москве, сообщает издание Russian Gap. По его словам, за время работы на посту столичного мэра в городе снесли 12 млн кв. м пятиэтажек из 20 млн и не было ни одного протеста. Экс-градоначальник объяснил это тем, что властям удалось взять на себя всю социальную сферу и заинтересовать строителей. «Мы сказали строителям: «Сносите пятиэтажки и в этом же месте переселяйте семьи». Квартира на квартиру в этом же месте, без каких-либо доплат, потому что там живут бедные люди. И ни у кого возражений не было», — сказал Лужков.' 
	},
	{
		id: '7',
		title: 'Вниз головой',
		summary: 'Корреспондент Российской Газеты прыгнула в ущелье и зовет за собой туристов',
		img: 'https://i.ytimg.com/vi/8KR57tzFUqI/maxresdefault.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'rg.ru',
		tags:["Russia", "tourism"],
		content:'Есть в Сочи и другие точки притяжения экстремалов. Так, в горах олимпийской столицы недавно появился новый вид развлечений - полеты на тандемном параплане с инструктором. Стоит такое удовольствие от 7500 до 15 тысяч рублей. Гостям предлагается два маршрута с разным перепадом высот. В первом случае полет вдоль склонов и отрогов горы Аибга длится не более 20 минут с перепадом высот до 1400 метров. Пока летишь, можно хорошенько рассмотреть горные водопады и горнолыжные трассы курорта. Второй маршрут рассчитан на полчаса и проходит возле горных цирков, с видом на Красную Поляну и перепадом высот до 1800 метров.' 
	},
	{
		id: '8',
		title: 'Британские учёные',
		summary: 'Ученые рассказали, что случится на Земле в ближайший миллиард лет',
		img: 'https://img-fotki.yandex.ru/get/41743/137106206.76e/0_1f854a_dbb22ea5_orig',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'vesti.ru',
		tags:["Earth", "science"],
		content:'По мнению ученых, через восемь тысяч лет человечество столкнется с компьютерной проблемой Y10k, названной так по аналогии с проблемой Y2k, опасения в связи с которой были широко распространены в преддверии наступления 2000 года. Проблемы будут связаны с тем, что компьютерам придется перейти с четырехзначной записи дат на пятизначную, сообщает Daily Mail.' 
	},
	{
		id: '9',
		title: 'Хех',
		summary: 'Белорусы выбирают Путина',
		img: 'https://i.ytimg.com/vi/XOZoVdKtEB0/maxresdefault.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'gazeta.ru',
		tags:["Russia", "Belarus"],
		content:'Две трети белорусов положительно относятся к Владимиру Путину, тогда как только 10% граждан страны-соседки его не любят. При этом Александр Лукашенко по рейтингам в разы отстает от президента России. В свою очередь, среди граждан России популярность Лукашенко очень высока — многие граждане РФ были бы не против увидеть его своим кандидатом в президенты.' 
	},
	{
		id: '10',
		title: 'Флешбек из прошлого',
		summary: 'Какая ошибка помешала фашистам сбросить ядерную бомбу на СССР',
		img: 'http://img11.nnm.me/6/4/a/3/5/956bda8b0c6401d32c5b07f654f.jpg',
		createdAt: new Date('2017-04-02T21:29:00'),
		author: 'eg.ru',
		tags:["history", "naziGermany", "weapon"],
		content:'К концу Второй мировой войны Третий рейх подошел к созданию ядерного оружия намного ближе, чем принято считать. Немцы имели не только теоретические, но и вполне конкретные практические наработки в этой сфере.' 
	},
	];

	var id = 11;

	var authors = [];

	function getArticles(skip, top, filterConfig){
		if(skip < 0 || top < 0) return undefined;

		var articles = takeArticles();
		skip = skip || 0;
		top = top || articles.length;

		var articlesNew =  articles.filter(function(elem){
			key = true;
			if(Boolean(filterConfig)){
				var date = elem.createdAt;

				if(Boolean(filterConfig.author) && filterConfig.author != elem.author){
					key = false;
				}

				if(Boolean(filterConfig.createdAfter)){
					if(filterConfig.createdAfter.getFullYear() > date.getFullYear()){
						key = false;
					}
					else if(filterConfig.createdAfter.getFullYear() == date.getFullYear()){
						if(filterConfig.createdAfter.getMonth() > date.getMonth()){
							key = false;
						}
						else if(filterConfig.createdAfter.getMonth() == date.getMonth()){
							if(filterConfig.createdAfter.getDate() > date.getDate()){
								key = false;
							}
						}
					}
				}
				   	
				if(Boolean(filterConfig.createdBefore)){
					if(filterConfig.createdBefore.getFullYear() < date.getFullYear()){
						key = false;
					}
					else if(filterConfig.createdBefore.getFullYear() == date.getFullYear()){
						if(filterConfig.createdBefore.getMonth() < date.getMonth()){
							key = false;
						}
						else if(filterConfig.createdBefore.getMonth() == date.getMonth()){
							if(filterConfig.createdBefore.getDate() < date.getDate()){
								key = false;
							}
						}
					}
				}

				if(Boolean(filterConfig.tags)){
					var tmp = elem.tags.slice().sort();
					var tags = filterConfig.tags.slice().sort();
					for(var i = 0; i < tags.length; i++){
						var key1 = false;
						for(var j = 0; j < tmp.length; j++){
							if(tmp[j] == tags[i]){
								key1 = true;
							}
						}
						if(!key1){
							key = false;
						}
					}
				}

			}
			return key;
		});

		return articlesNew.slice(skip, skip + top);
	}

	function getArticle(id){
		var articles = takeArticles();
		for(var i = 0; i < articles.length; i++){
			if(articles[i].id == id)
				return articles[i];
		}
		return undefined;
	}
	
	function validateArticle(article){
		if( article.title.length == 0 || article.title.length > 99 ||
			article.summary.length == 0 || article.summary.length > 199  || 
			article.author.length == 0 || article.content.length == 0){
			return false;
		}
		tags = article.tags;
		for(var i = 0; i < tags.length; i++){
			if(tags[i].length == 0 || ~tags[i].indexOf(' ')){
				return false;
			}
		}
		return true;
	}

	function addArticle(article){
		if (getArticle(article.id)){
			return false;
		}
		if(validateArticle(article)){
			var articles = takeArticles();
			article.id = id;
			id++;
			articles.unshift(article);
			storeArticles(articles);

			var author = article.author;
			var key = true;
			
			authors.forEach(function(item){
				if(item == author){
					key = false;
				}
			});

			if(key){
				authors.push(author);
			}

			authors.sort();

			return true;
		}
		return false;
	}

	function editArticle(id, article){
		var articles = takeArticles();
		var tmp;
		for(var i = 0; i < articles.length; i++){
			if(articles[i].id == id)
				tmp = articles[i];
		}
		if(tmp){
			for(var val in article){
				if( val == "title"){
					if(article[val].length != 0 && article[val].length < 100){
						tmp.title = article[val];
					}
					else return false;
				}

				else if( val == "summary"){
					if(article[val].length != 0 && article[val].length < 200){
						tmp.summary = article[val];
					}
					else return false;
				}

				else if( val == "content"){
					if(article[val].length != 0){
						tmp.content = article[val];
					}
					else return false;
				}

				else if( val == "tags"){
					tmp.tags = article[val].slice();					
				}

				else if (val == "img")
					tmp.img == article[val];
			}
			storeArticles(articles);
			return true;
		}
		return false;
	}

	function removeArticle(id){
		var articles = takeArticles();
		for (var i = 0; i < articles.length; i++) {
			if(articles[i].id == id){
				articles.splice(i,1);
				storeArticles(articles);
				return true;
			}
		}
		return false;
	}

		function authorsInit(){
			var articles = takeArticles();
			articles.forEach(function(item){
			var author = item.author;
			var key = true;
			for(var i = 0; i < authors.length; i++){
				if(authors[i] == author){
					key = false;
				}
			}
			if(key){
				authors.push(author);
			}
		});
		authors.sort();
	}
	
	function storeArticles(item){
		if(Boolean(item)){
			localStorage.setItem('articles', JSON.stringify(item));
		}
		else{
			if(!localStorage.getItem('articles')){
				localStorage.setItem('articles', JSON.stringify(articlesTMP));
			}
		}
	}

	function takeArticles(){
		var articles = JSON.parse(localStorage.getItem('articles'));
		articles.forEach(function(item){
			item.createdAt = new Date(item.createdAt);
		});
		return articles;
	}

	function count(){
		return takeArticles.length;
	}

	return {
		storeArticles: storeArticles,
		count: count,
		authors: authors,
		authorsInit: authorsInit,
		getArticle: getArticle,
		getArticles: getArticles,
		removeArticle: removeArticle,
		editArticle: editArticle,
		addArticle: addArticle
	}
}());

var popularTags = (function(){
	var tags = [];
	var allTags = [];

	function init(num){
		if(typeof num != "number") return false;
		if(tags){
			tags.length = 0;
		}
		if(allTags){
			allTags.length = 0;
		}
		var tmp = [];
		var articles = articleContent.getArticles();
		for(var i = 0; i < articles.length; i++){
			for(var j = 0; j < articles[i].tags.length; j++)
				tmp.push(articles[i].tags[j]);
		}
		tmp.sort();

		var a = 0;
		if(tmp.length > 1){
			allTags.push(tmp[a]);
			for(var i = 1; i < tmp.length; i++){
				if(tmp[i] != tmp[i - 1] || i == (tmp.length - 1)){
					if((i - a) >= num){
						tags.push(tmp[a]);
						a = i;
					}
					allTags.push(tmp[i]);
					a = i;
				}
			}
		}
		else if(num == 1 && tmp.length == 1){
			tags.push(tmp[a]);
		}

		return true;
	}

	function removeTagsFromDOM(){
		document.querySelector('.tag-list').innerHTML = '';
		return true;
	}

	function insertTagsInDOM(){
		var tags1 = document.querySelector('.tag-list');

		tags1.textContent = 'Popular: '

		for(i = 0; i < tags.length; i++){
			var tmp1 = document.createElement('li');
			tmp1.innerHTML = "<li>" + tags[i] + "</li>";
			tags1.appendChild(tmp1);
		}

		return true;
	}

	return{
		allTags: allTags,
		init: init,
		removeTagsFromDOM: removeTagsFromDOM,
		insertTagsInDOM: insertTagsInDOM
	}
}());

var articleRenderer = ( function(){
	var ARTICLE_TEMPLATE;
	var ARTICLE_LIST;

	function init(){
		ARTICLE_TEMPLATE = document.querySelector('#template-article');
		ARTICLE_LIST = document.querySelector('.article-list');
	}

	function insertArticlesInDOM(articles) {
		var articlesNodes = renderArticles(articles);
		articlesNodes.forEach(function (node) {
			ARTICLE_LIST.appendChild(node);
			ARTICLE_LIST.lastElementChild.addEventListener('click', readMoreHandler);
		});
	}

	function renderArticles(articles) {
		return articles.map(function (article) {
			return renderArticle(article);
		});
	}

	function renderArticle(article) {
		var template = ARTICLE_TEMPLATE;
		template.content.querySelector('.article').dataset.id = article.id;
		template.content.querySelector('#article-title').textContent = article.title;
		template.content.querySelector('#article-img').src = article.img;
		template.content.querySelector('.article-summary').textContent = article.summary;
		template.content.querySelector('#article-publname').textContent = article.author;
		template.content.querySelector('#article-date').textContent = formatDate(article.createdAt);
		var tags = template.content.querySelector('.article-tags');
		tags.innerHTML = 'ТЭГИ: ';
		
		if(Boolean(article.tags)){
			for(i = 0; i < article.tags.length; i++){
				var tmp = document.createElement('li');
				tmp.innerHTML = "<li>" + article.tags[i] + "</li>";
				tags.appendChild(tmp);
			}
		}

		return template.content.querySelector('.article').cloneNode(true);
	}

	function formatDate(d) {
		return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' +
		d.getHours() + ':' + d.getMinutes();
	}

	function removeArticlesFromDom () {
		ARTICLE_LIST.innerHTML = '';
	}

	return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
 }());

var userLog = ( function(){
	var userList = [
	{
		login: 'bidbaddev',
		password: 'lmjkj99m'
	},
	{
		login: 'Kirios',
		password: 'xkiriosdaniels'
	},
	{
		login: 'aspelled',
		password: 'devil1701'
	},
	];

	function init(login, password){
		for(var i = 0; i < userList.length; i++){
			if(userList[i].login == login){
				if(userList[i].password == password){
					localStorage.setItem('user', JSON.stringify(login));
					renderUser();
					return true;
				}
				return false;
			}
		}
		if(!Boolean(login)){
			localStorage.removeItem('user');
		}
		renderUser();
		return false;
	}

	function renderUser(){
		var user = JSON.parse(localStorage.getItem('user'));
		if(Boolean(user)){
			document.querySelector('#aAdd').textContent = 'Add';
			document.querySelector('.log-info').style.fontSize = '50%';
			document.querySelector('.log-info').innerHTML = 'Профиль<br/><div id="username">' + user + '</div>';
		}
		else{
			document.querySelector('#aAdd').textContent = '';
			document.querySelector('.log-info').style.fontSize = '100%';
			document.querySelector('.log-info').innerHTML = 'Log in';
		}
	}

	function username(){
		if(localStorage.getItem('user')){
			return JSON.parse(localStorage.getItem('user'));
		}
		else{
			return undefined;
		}
	}

	return{
		renderUser: renderUser,
		username: username,
		init: init
	};
}());

function readMoreHandler(event){
	window.onscroll = 0;
	var target = event.target;
	if(target == this.querySelector('#readMore') || target == this.querySelector('#article-img') || target == this.querySelector('#article-title')){    	
    	var id = this.dataset.id;
    	var article = articleContent.getArticle(id);

    	articleRenderer.removeArticlesFromDom();
    	popularTags.removeTagsFromDOM();
    	document.querySelector('.main-title').firstElementChild.textContent = '';

    	var template = document.querySelector('#template-article-full');
    	template.content.querySelector('.article').dataset.id = article.id;
		template.content.querySelector('#article-title').textContent = article.title;
		template.content.querySelector('#article-full-img').src = article.img;
		template.content.querySelector('.article-content').textContent = article.content;
		template.content.querySelector('#article-publname').textContent = article.author;
		template.content.querySelector('#article-date').textContent = formatDate(article.createdAt);
		var tags = template.content.querySelector('.article-tags');

		function formatDate(d) {
			return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' +
			d.getHours() + ':' + d.getMinutes();
		}

		tags.innerHTML = 'Tags: ';

		for(i = 0; i < article.tags.length; i++){
			var tmp = document.createElement('li');
			tmp.innerHTML = "<li>" + article.tags[i] + "</li>";
			tags.appendChild(tmp);
		}
		
		if(!Boolean(userLog.username())){
			template.content.querySelector('.article-footer').removeChild(template.content.querySelector('#article-delete'));
			template.content.querySelector('.article-footer').removeChild(template.content.querySelector('#article-change'));
		}

    	document.querySelector('.article-list').appendChild(template.content.querySelector('.article').cloneNode(true));
		
    	if(Boolean(userLog.username())){
    		document.querySelector('#article-delete').addEventListener('click', articleFullDeleteHandler);
    		document.querySelector('#article-change').addEventListener('click', articleFullChangeHandler);
    	}

    	function articleFullDeleteHandler(){
    		articleContent.removeArticle(document.querySelector('.article').dataset.id);
			popularTags.init(2);
    		mainPage.loadMainPage();
    	}

    	function articleFullChangeHandler(){
    		var id = document.querySelector('.article').dataset.id;
    		var article = articleContent.getArticle(id);


    		window.onscroll = 0;
    		document.querySelector('.main-title').firstElementChild.textContent = 'Edit news';
    		popularTags.removeTagsFromDOM();
    		articleRenderer.removeArticlesFromDom();

    		var template = document.querySelector('#template-add-article');
    		template.content.querySelector('.article').dataset.id = article.id;
    		var tags = popularTags.allTags;
    		var tagSelector = template.content.querySelector('.input-tags');
    		tagSelector.innerHTML = '';
    		var tmp1 = document.createElement('option');
    		tmp1.innerHTML = '<option disabled>Suggested tags</option>';
    		tagSelector.appendChild(tmp1);
    		tags.forEach(function(item){
    			var tmp = document.createElement('option');
    			tmp.innerHTML = '<option value=\'' + item + '\'>' + item + '</option>';
    			tagSelector.appendChild(tmp);
    		});

			template.content.querySelector('.input-button').setAttribute('onclick', "changeSubmitHandler()");

    		document.querySelector('.article-list').appendChild(template.content.querySelector('.article').cloneNode(true));
			document.forms.add.title.value = article.title;
			document.forms.add.summary.value = article.summary;
			document.forms.add.content.value = article.content;
			document.forms.add.img.value = article.img;
			document.forms.add.tags.value = article.tags.join(' ');

    		document.querySelector('.input-tags').addEventListener('change', tagSelectorHandler);

    		function tagSelectorHandler(event){
    			var target = event.currentTarget.value;
    			var text = document.forms.add.tags;
    			var tmp = text.value.split(' ');
    			var key = false;

    			tmp.forEach(function(item){
    				if(item == target){
    					key = true;
    				}
    			});
    			if(key){
    				text.value = tmp.map(function(item){
    					if(item == target){
    						return '';
    					}
    					return item;
    				}).join(' ');
    			}
    			else if(target == 'Suggested tags');
    			else{
    				text.value += ' ' + target;
    			}
    		}
    	}	
	} 
}

function changeSubmitHandler(){
	var form = document.forms.add;
	if(form.title.value != "" && form.summary.value != "" && form.content.value != ""){
		var article = {
			id: '0',
			title: form.title.value,
			img: "",
			summary: form.summary.value,
			content: form.content.value,
			createdAt: new Date(),
			author:  userLog.username(),
		}
		article.img = form.img.value;

		var tags = form.tags.value.split(' ');

		for(var i = 0; i < tags.length; i++){
			if(tags[i].length == 0){
				tags.splice(i,1);
				i--;
			}
		}

		article.tags = tags;
		article.id = document.querySelector('.article').dataset.id;

		articleContent.editArticle(article.id, article);
		
		popularTags.init(2);
		mainPage.loadMainPage();
	}
}




document.addEventListener('DOMContentLoaded', startApp);
function startApp(){
	articleContent.storeArticles();
	articleRenderer.init();
	userLog.renderUser();
	popularTags.init(2);
	articleContent.authorsInit();
	mainPage.loadMainPage();

	addEvents();
}





function addEvents(){
	document.querySelector('#aMain').addEventListener('click', aMain);
	document.querySelector('#aAdd').addEventListener('click', aAdd);
	document.querySelector('#aSearch').addEventListener('click', aSearchClosed);	
	logInfoAddEvents();

	function aMain(event){
		mainPage.loadMainPage();
	}

	function aAdd(event){
		window.onscroll = 0;
		document.querySelector('.main-title').firstElementChild.textContent = 'Add news';
		popularTags.removeTagsFromDOM();
		articleRenderer.removeArticlesFromDom();

  		var template = document.querySelector('#template-add-article');
  		var tags = popularTags.allTags;
  		var tagSelector = template.content.querySelector('.input-tags');
  		tagSelector.innerHTML = '';
  		var tmp1 = document.createElement('option');
  		tmp1.innerHTML = '<option disabled>Suggested tags</option>';
  		tagSelector.appendChild(tmp1);
  		tags.forEach(function(item){
  			var tmp = document.createElement('option');
  			tmp.innerHTML = '<option value=\'' + item + '\'>' + item + '</option>';
  			tagSelector.appendChild(tmp);
  		});
		document.querySelector('.article-list').appendChild(template.content.querySelector('.article').cloneNode(true));
		document.querySelector('.input-tags').addEventListener('change', tagSelectorHandler);

		function tagSelectorHandler(event){
			var target = event.currentTarget.value;
			var text = document.forms.add.tags;
			var tmp = text.value.split(' ');
			var key = false;

			tmp.forEach(function(item){
				if(item == target){
					key = true;
				}
			});
			if(key){
				text.value = tmp.map(function(item){
					if(item == target){
						return '';
					}
					return item;
				}).join(' ');
			}
			else if(target == 'Suggested tags');
			else{
				text.value += ' ' + target;
			}
		}
	}

	function aSearchClosed(event){
		this.removeEventListener('click', aSearchClosed);
		this.addEventListener('click', aSearchOpened);

  		var template = document.querySelector('#template-search');

  		var tags = popularTags.allTags;
  		var tagSelector = template.content.querySelector('.search-tags');
  		tagSelector.innerHTML = '';
  		var tmp1 = document.createElement('option');
  		tmp1.innerHTML = '<option disabled>Suggested tags</option>';
  		tagSelector.appendChild(tmp1);
  		tags.forEach(function(item){
  			var tmp = document.createElement('option');
  			tmp.innerHTML = '<option value=\'' + item + '\'>' + item + '</option>';
  			tagSelector.appendChild(tmp);
  		});

  		var authors = articleContent.authors;
  		var authorSelector = template.content.querySelector('.search-author');
  		authorSelector.innerHTML = '';
  		var tmp1 = document.createElement('option');
  		tmp1.innerHTML = '<option disabled>Suggested authors</option>';
  		authorSelector.appendChild(tmp1);
  		authors.forEach(function(item){
  			var tmp = document.createElement('option');
  			tmp.innerHTML = '<option value=\'' + item + '\'>' + item + '</option>';
  			authorSelector.appendChild(tmp);
  		});

  		document.querySelector('.search').innerHTML = '';
		document.querySelector('.search').appendChild(template.content.querySelector('.search-form').cloneNode(true));

		document.forms.search.createdAfter.addEventListener('change', createdAfterHandler);
		document.forms.search.createdBefore.addEventListener('change', createdBeforeHandler);
		document.forms.search.tags.value = '';

		tags = document.querySelector('.search-tags').addEventListener('change', tagSelectorHandler);

		document.querySelector('.search-button-accept').addEventListener('click', filter);

		function tagSelectorHandler(event){
			var target = event.currentTarget.value;
			var text = document.forms.search.tags;
			var tmp = text.value.split(' ');
			var key = false;

			tmp.forEach(function(item){
				if(item == target){
					key = true;
				}
			});
			if(key){
				text.value = tmp.map(function(item){
					if(item == target){
						return '';
					}
					return item;
				}).join(' ');
			}
			else if(target == 'Suggested tags');
			else{
				text.value += ' ' + target;
			}
		}

		function createdAfterHandler(){
			document.forms.search.createdBefore.setAttribute('min', this.value);
		}

		function createdBeforeHandler(){
			document.forms.search.createdAfter.setAttribute('max', this.value);
		}

		function filter(event){
			var form = document.forms.search;
			var filterConfig = {};
			var date1 = new Date(form.createdAfter.value);
			if(date1 != 'Invalid Date'){
				filterConfig.createdAfter = date1;
			}

			var date2 = new Date(form.createdBefore.value);
			if(date2 != 'Invalid Date'){
				filterConfig.createdBefore = date2;
			}

			var author = form.author.value;
			if(author != 'Suggested authors'){
				filterConfig.author = author;
			}

			var tags = form.tags.value.split(' ');

			for(var i = 0; i < tags.length; i++){
				if(tags[i].length == 0){
					tags.splice(i,1);
					i--;
				}
			}

			filterConfig.tags = tags;

			mainPage.setFilter(filterConfig);

			mainPage.loadMainPage();
		}

	}

	function aSearchOpened(event){
		this.removeEventListener('click', aSearchOpened);
  		document.querySelector('.search').innerHTML = '';
		this.addEventListener('click', aSearchClosed);
	}
}

function inputSubmitHandler(){
	var form = document.forms.add;
	if(form.title.value != "" && form.summary.value != "" && form.content.value != ""){
		var article = {
			id: '0',
			title: form.title.value,
			img: "",
			summary: form.summary.value,
			content: form.content.value,
			createdAt: new Date(),
			author:  userLog.username(),
		}
		article.img = form.img.value;

		var tags = form.tags.value.split(' ');

		for(var i = 0; i < tags.length; i++){
			if(tags[i].length == 0){
				tags.splice(i,1);
				i--;
			}
		}

		article.tags = tags;

		articleContent.addArticle(article);
		

		popularTags.init(2);
		mainPage.loadMainPage();
	}
}

function searchReset(){
  		document.querySelector('.search-input').innerHTML = '';
}

var mainPage = (function(){

	var filterConfig;

	var articleCount = 5;

	function renderArticles() {
		articleRenderer.removeArticlesFromDom();
		var articles = articleContent.getArticles(0, articleCount, filterConfig);
		articleRenderer.insertArticlesInDOM(articles);
	}

	function loadMainPage(){
		articleCount = 5;
		document.querySelector('.main-title').firstElementChild.textContent = 'News';
		popularTags.insertTagsInDOM();
		renderArticles();
		window.onscroll = scrollMainPage;
	}

	function setFilter(filter){
		filterConfig = filter;
	}

	function moreNews(){
		if(articleCount + 5 > articleContent.count()){
			articleCount = articleContent.count();
		}
		else{
			articleCount += 5;
		}
	}

	return{
		moreNews: moreNews,
		setFilter: setFilter,
		renderArticles: renderArticles,
		loadMainPage: loadMainPage
	}

}());

function scrollMainPage(){
	var bottom = document.querySelector('.footer-content').lastElementChild.getBoundingClientRect().top;
	if(window.pageYOffset > bottom){
		mainPage.moreNews();
		mainPage.renderArticles();
	}
}

function logInfoAddEvents(){
	var logInfo = document.querySelector('.log-info');

	if(Boolean(userLog.username())){
		logInfo.addEventListener('mouseover', mouseover);
		logInfo.addEventListener('click', logout);
	}
	else{
		logInfo.addEventListener('click', login);
	}

	function mouseover(){
		logInfo.removeEventListener('mouseover', mouseover);
		logInfo.addEventListener('mouseout', mouseout);
		document.querySelector('.log-info').innerHTML = 'Log out<br/><div id="username">' + userLog.username() + '</div>';
	}

	function mouseout(){
		logInfo.removeEventListener('mouseout', mouseout);
		logInfo.addEventListener('mouseover', mouseover);
		document.querySelector('.log-info').innerHTML = 'Profile<br/><div id="username">' + userLog.username() + '</div>';
	}

	function logout(){
		logInfo.removeEventListener('mouseout', mouseout);
		userLog.init();
		logInfo.removeEventListener('click', logout);
		logInfo.addEventListener('click', login);
	}

	function login(){
		window.onscroll = 0;
		document.querySelector('.main-title').firstElementChild.textContent = 'Log in';
		popularTags.removeTagsFromDOM();
		articleRenderer.removeArticlesFromDom();

		var template = document.querySelector('#template-login');
		document.querySelector('.article-list').appendChild(template.content.querySelector('.login-background').cloneNode(true));
	}
}

function loginSubmitHandler(){
	userLog.init(document.forms.login.login.value, document.forms.login.password.value);


	var logInfo = document.querySelector('.log-info');
	if(Boolean(userLog.username())){
		logInfo.removeEventListener('click', login);
		logInfo.addEventListener('mouseover', mouseover);
		logInfo.addEventListener('click', logout);
	}
	mainPage.loadMainPage();

	function mouseover(){
		logInfo.removeEventListener('mouseover', mouseover);
		logInfo.addEventListener('mouseout', mouseout);
		document.querySelector('.log-info').innerHTML = 'Выйти<br/><div id="username">' + userLog.username() + '</div>';
	}

	function mouseout(){
		logInfo.removeEventListener('mouseout', mouseout);
		logInfo.addEventListener('mouseover', mouseover);
		document.querySelector('.log-info').innerHTML = 'Profile<br/><div id="username">' + userLog.username() + '</div>';
	}

	function logout(){
		logInfo.removeEventListener('mouseout', mouseout);
		userLog.init();
		logInfo.removeEventListener('click', logout);
		logInfo.addEventListener('click', login);
	}

	function login(){
		window.onscroll = 0;
		document.querySelector('.main-title').firstElementChild.textContent = 'Log in';
		popularTags.removeTagsFromDOM();
		articleRenderer.removeArticlesFromDom();

		var template = document.querySelector('#template-login');
		document.querySelector('.article-list').appendChild(template.content.querySelector('.login-background').cloneNode(true));
	}
}


