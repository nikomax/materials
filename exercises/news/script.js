(function (window, document) {

    function Articles() {
        this.articles = {};
        this.random = false;
        this.settings = {
            apiUrl: 'https://rss-deploy.herokuapp.com/rss/feed/habr/hub/{{hubId}}/'
        };
        this.domElems = {
            articleTemplate: document.getElementsByClassName('article_template')[0]
        };
    }

    Articles.prototype.init = function (param) {
        if (param === 'random') {
            this.random = true;
            this.counter = 1;
        } else if (parseInt(param, 10)) {
            this.counter = parseInt(param, 10);
        }

        var __self = this;

        this.getData();

        window.addEventListener('hashchange', function (e) {
            __self.getData();
        });
    };

    Articles.prototype.getData = function () {
        var hash = window.location.hash.substring(1);

        var rssUrl = this.settings.apiUrl.replace('{{hubId}}', hash);
        var __self = this;

        fetch(rssUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                __self.articles = data.entries;
                __self.update();
            })
            .catch( function(err){ console.log(err)} );
    };

    Articles.prototype.update = function () {
        var articlesHtml = this.generateAll(),
            articlesDomElem = document.querySelectorAll('.articles')[0];

            console.log(articlesDomElem);

        articlesDomElem.innerHTML = '';

        articlesDomElem.appendChild(articlesHtml);
    };

    Articles.prototype.generateAll = function () {
        var __self = this;

        var articlesHtml = document.createDocumentFragment();

        var articles;

        if( this.random ) {
            var articleId = Math.floor(Math.random() * this.articles.length);
            articles = [this.articles[articleId]]
        } else if (this.counter) {
            articles = this.articles.slice(0,this.counter)
        }
        else {
            articles = this.articles;
        }

        articles.forEach(function (item) {
            articlesHtml.appendChild(__self.generateArticle(item));
        });

        return articlesHtml;
    };

    Articles.prototype.generateArticle = function (itemData) {
        var newArticle = this.domElems.articleTemplate.cloneNode(true);

        newArticle.classList.remove('article_template');

        newArticle.getElementsByClassName('post-heading')[0].innerHTML = itemData.title;
        newArticle.getElementsByClassName('excerpt')[0].innerHTML = itemData.contentSnippet;
        newArticle.getElementsByClassName('article__date')[0].innerHTML = this.convertDate(itemData.pubDate);

        newArticle.getElementsByClassName('post-heading')[0].setAttribute('href', itemData.link);
        newArticle.getElementsByClassName('action-button')[0].setAttribute('href', itemData.link);

        return newArticle;
    };

    Articles.prototype.convertDate = function (dateStr) {
        var date = new Date(dateStr);
        console.log(date);
        return date;
    };

    var articles = new Articles();

    articles.init(2);

    console.dir(articles);


})(window, document);




