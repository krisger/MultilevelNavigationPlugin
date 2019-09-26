<h2>Instalation</h2>
<p>Get from "src" folder plugin "navigation.js" add it to you header under jQuery library included</p>
<p>This plugin requires jQuery to be included</p>
<p>Examples you can find in index.html</p>
<p>
	Call plugin with:
</p>
<p>
<pre lang="no-highlight">
<code>
	$(function(){
		$('.navigation').navigation();
	});
</code>
</pre>
</p>
<p>
	Or initialize plugin with passed parameters:
</p>
<p>
<pre lang="no-highlight">
<code>
	$(function(){
		$('.navigation2').navigation({
			elListItem: "li",
			//Element used to find child menus
			elList: "ul",
			//Additional styles can be added by this class
			activeClassName: "active",	
			//If you choose not use default slideDown animation you will able to style it with css
			animate: true,
			//By default only one dropdown in same level is opened
			//You can change to false and it will leave all menu items opened
			showOnlySelected: true
		});
	)};
</code>
</pre>
</p>
<p>
	This plugin could be used without ul or li tags.
	Watch examples in index.html files.
</p>

<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"></a>License</h2>
<p>This project is licensed under the MIT License - for this read License.md file</p>