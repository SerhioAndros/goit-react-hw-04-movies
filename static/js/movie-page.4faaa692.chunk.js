(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{34:function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return s}));var n=r(35),a=r.n(n),c="https://api.themoviedb.org/3",o="6134c0cbc147d9cd4205b14b99890083",i=function(){return a.a.get("".concat(c,"/movie/popular?api_key=").concat(o,"&page=1")).then((function(t){return t.data.results}))},u=function(t){var e=t.page,r=void 0===e?1:e,n=t.searchQuery,i=void 0===n?"":n;return a.a.get("".concat(c,"/search/movie?api_key=").concat(o,"&page=").concat(r,"&include_adult=false&query=").concat(i)).then((function(t){return t.data.results}))},s=function(t){return a.a.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(o,"&append_to_response=credits,images,reviews")).then((function(t){return t.data}))}},36:function(t,e,r){"use strict";r(0);var n=r(37),a=r.n(n),c=r(3),o=function(t){var e=t.btnName,r=t.btnFunction;return Object(c.jsx)("button",{className:a.a.Button,type:"button",onClick:r,children:e})};o.defaultProps={btnName:"Just BTN"},e.a=o},37:function(t,e,r){t.exports={Button:"Button_Button__2WRPN"}},38:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},39:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return a}))},40:function(t,e,r){"use strict";r(0);var n=r(9),a=r(1),c=r(3),o=Object(a.f)((function(t){var e=t.id,r=t.title,a=t.location;return Object(c.jsx)("li",{children:Object(c.jsx)(n.b,{to:{pathname:"/movies/".concat(e),state:{from:a}},children:r})})}));e.a=function(t){var e=t.movies;return Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsx)(o,{title:t.title,id:t.id},t.id)}))})}},67:function(t,e,r){t.exports={SearchForm:"SearchForm_SearchForm__2G5Qu",SearchForm_button:"SearchForm_SearchForm_button__pd__S",SearchForm_button_label:"SearchForm_SearchForm_button_label__1QaWl",SearchForm_input:"SearchForm_SearchForm_input__26GzE",Searchbar:"SearchForm_Searchbar__G6d0e"}},77:function(t,e,r){"use strict";r.r(e);var n=r(39),a=r(14),c=r(15),o=r(17),i=r(16),u=r(0),s=r(36),h=r(40),l=r(38),b=r(67),f=r.n(b),m=r(3),d=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){var t;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={search:""},t.handleInputChange=function(e){var r=e.currentTarget,n=r.name,a=r.value;t.setState(Object(l.a)({},n,a))},t.handleSubmit=function(e){e.preventDefault();var r=t.state.search;if(!r.trim())return alert("Please, enter your request");t.props.onSubmit(r),t.setState({search:""})},t}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsx)("div",{className:f.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:f.a.SearchForm_button,children:Object(m.jsx)("span",{className:f.a.SearchForm_button_label,children:"Search"})}),Object(m.jsx)("input",{className:f.a.SearchForm_input,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:this.state.search,onChange:this.handleInputChange})]})})}}]),r}(u.Component),p=r(34),v=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){var t;Object(a.a)(this,r);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={searchMoviesList:[],searchQuery:"",page:1},t.handleAddMovies=function(){var e=t.state,r={searchQuery:e.searchQuery,page:e.page};Object(p.b)(r).then((function(e){return t.setState((function(t){return{searchMoviesList:[].concat(Object(n.a)(t.searchMoviesList),Object(n.a)(e)),page:t.page+1}}))}))},t.handleSearchQuery=function(e){t.setState({searchQuery:e,page:1,searchMoviesList:[]})},t.loadMore=function(){t.handleAddMovies()},t}return Object(c.a)(r,[{key:"componentDidUpdate",value:function(t,e){e.searchQuery!==this.state.searchQuery&&this.handleAddMovies()}},{key:"render",value:function(){var t=this.state.searchMoviesList;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{onSubmit:this.handleSearchQuery}),Object(m.jsx)(h.a,{movies:t}),!!t.length&&Object(m.jsx)(s.a,{btnName:"Load more",btnFunction:this.loadMore})]})}}]),r}(u.Component);e.default=v}}]);
//# sourceMappingURL=movie-page.4faaa692.chunk.js.map