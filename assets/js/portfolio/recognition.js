function loadLinks(profileLinks){
var i=0,j;			
profileLinks.sort(function(a,b){
    return a.sn-b.sn;
});
var profileLinksInnerHTML = '';
while(i<profileLinks.length){
    profileLinksInnerHTML+='<div class="row">'
    for(j=i;j<profileLinks.length&&j<i+5;j++){
        profileLinksInnerHTML+='<div class="col s2">													<a href="'+profileLinks[j].link+'" target="_blank" >					<img src="/assets/img/'+profileLinks[j].icon+'" alt="'+profileLinks[j].name+'">															</a></div>';
    }
    profileLinksInnerHTML+='</div>';
    i=j;
}
$('#links').html(profileLinksInnerHTML);
}

function loadLikes(likes){
likes = likes.sort(function(a,b){
    return a.sn-b.sn;
});
var i;
var likesInnerHTML = '<h4>I like</h4>';
for(i=0;i<likes.length;i++){
    likesInnerHTML+='<object type="image/svg+xml" data="/assets/img/'+likes[i].icon+'">'+likes[i].name+'</object>'
}
$('#likes').html(likesInnerHTML);
}

function loadBlog() {
var blogHtml = `<div class='sk-ww-medium-publication-feed' data-embed-id='26322'></div><script src='https://www.sociablekit.com/app/embed/medium-publication-feed/widget.js'></script>`;
$('#blog').html(blogHtml);	
}

function onBodyLoad(){
console.log('body loaded called');
$('div.progress').css('display','none');
$('div.content').css('display','block');
$('.collapsible').collapsible({
    'accordion' : true
});
$('#tabs').tabs({ 'swipeable': true });
onWindowResize();
}

function onWindowResize(){
const heightPageA = parseInt($('#pagea').css('height').replace('px',''),10);
const tabContentHeight = Math.max(heightPageA-48,(window.innerHeight - 50)) + 'px';
// console.log(`${document.getElementsByClassName('tabs-content carousel initialized')[0].style.height } to ${tabContentHeight}`);
const tabs = document.getElementsByClassName('tabs-content carousel initialized');
if (tabs && tabs[0]) {
    tabs[0].style.height = tabContentHeight;
}
$('#skills div.m2').css('height',$('#skills div.m2').css('width'));
$('#image img').css('height',$('#image img').css('width'));
}


$(window).resize(onWindowResize);

var profile;
swal({
    title: "Hello World!!!",
    text: "Hello visitor, you have landed upon little webspace of Arijit Bhowmick, aka sys41x4. I hope you're doing well."

});



function loadMoghysSays() {
const sys41x4SaysInnerHtml = `<div class="col m6">
    <h6>Recipe for this website:</h6>	
    <div class="row">
        Would you like to have your own portfolio in this template ? It"s pretty easy, <a href="https://github.com/Arijit-Bhowmick">Arijit-Bhowmick</a> covered it up for everyone out their. 
        All the content on this website is dynamically loaded from JSON data.
        Fork this <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/">repo</a> on github and edit <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/blob/master/js/profile.json">js/profile.json</a> for adding your data.
        <a href="https://medium.com/howcatcancode/developer-profile-template-2017-219f43147efe">Read more</a><br>
        If you like this website, consider giving a star to its repo <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/">here</a>.
    </div>
</div>
<div class="col m6">
    <h6>Warm Gratitudes</h6>
    <div class="row">
        <div class="col m3 s3"><a href="https:https://pages.github.com/">Github Pages</a></div>
        <div class="col m3 s3"><a href="https://stackoverflow.com/">Stack Overflow</a></div>
        <div class="col m3 s3"><a href="https://jquery.com/">jQuery</a></div>
        <div class="col m3 s3"><a href="http://materializecss.com/">Materialize</a></div>
    </div>
    <div class="row">
        <div class="col m3 s3"><a href="https://fonts.google.com/">Google Fonts</a></div>	
        <div class="col m3 s3"><a href="http://konpa.github.io/devicon/">Devicons</a></div>
        <div class="col m3 s3"><a href="http://www.flaticon.com/">Flaticons</a></div>
        <div class="col m3 s3"><a href="https://simpleicons.org/">SimpleIcons</a></div>				
    </div>
    <div class="row">
        <div class="col m3 s3"><a href="http://noraesae.github.io/perfect-scrollbar/">Perfect Scrollbar</a></div>
        <div class="col m3 s3"><a href="http://www.mattboldt.com/demos/typed-js/">TypedJs</a></div>					
        <div class="col m3 s3"><a href="https://daneden.github.io/animate.css/">Animate.CSS</a></div>
        <div class="col m3 s3"><a href="http://t4t5.github.io/sweetalert/">Sweetalert</a></div>
    </div>
</div>`;
$('#sys41x4Says').html(sys41x4SaysInnerHtml);
}

//--------------------------------------------------------




function loadInfosecBlogs(infosecBlogs){
    infosecBlogs.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i=0,j;
    var infosecBlogsInnerHTML='';
    for(i=0;i<infosecBlogs.length;i++){					
        infosecBlog = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+infosecBlogs[i].infosecBlogTitle+'</span><hr></div><div class="row"><span>'+infosecBlogs[i].periodStart+'-'+infosecBlogs[i].periodEnd+'</span></div>';
        toolsUsed = '<div class="row">Tools Used:&nbsp';
        for(j=0;j<infosecBlogs[i].toolsUsed.length;j++){
            toolsUsed+='<span>'+infosecBlogs[i].toolsUsed[j]+'</span>&nbsp';
        }
        toolsUsed+='</div>';
        infosecBlog+=toolsUsed;
        tags = '<div class=row">'
        for(j=0;j<infosecBlogs[i].tags.length;j++)tags+='<span class="tag">#'+infosecBlogs[i].tags[j]+'</span>&nbsp';
        if(infosecBlogs[i].link!="#") tags+='<a href="'+infosecBlogs[i].link+'" target="_blank"><i class="material-icons right">language</i></a>';
        tags+='</div>';
        infosecBlog+=tags;
        infosecBlog+='</div><div class="col m6 s12 details">'+infosecBlogs[i].shortInfo+'</div></div>';
        infosecBlogsInnerHTML+=infosecBlog;
    }
    $('#infosecBlogs').html(infosecBlogsInnerHTML);
}

function loadBlogs(blogs){
    blogs.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i=0,j;
    var blogsInnerHTML='';
    for(i=0;i<blogs.length;i++){					
        blog = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+blogs[i].blogTitle+'</span><hr></div><div class="row"><span>'+blogs[i].periodStart+'-'+blogs[i].periodEnd+'</span></div>';
        toolsUsed = '<div class="row">Tools Used:&nbsp';
        for(j=0;j<blogs[i].toolsUsed.length;j++){
            toolsUsed+='<span>'+blogs[i].toolsUsed[j]+'</span>&nbsp';
        }
        toolsUsed+='</div>';
        blog+=toolsUsed;
        tags = '<div class=row">'
        for(j=0;j<blogs[i].tags.length;j++)tags+='<span class="tag">#'+blogs[i].tags[j]+'</span>&nbsp';
        if(blogs[i].link!="#") tags+='<a href="'+blogs[i].link+'" target="_blank"><i class="material-icons right">language</i></a>';
        tags+='</div>';
        blog+=tags;
        blog+='</div><div class="col m6 s12 details">'+blogs[i].shortInfo+'</div></div>';
        blogsInnerHTML+=blog;
    }
    $('#blogs').html(blogsInnerHTML);
}

function loadCertifications(certifications){
    certifications.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i=0,j;
    var certificationsInnerHTML='';
    for(i=0;i<certifications.length;i++){					
        certification = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+certifications[i].certificationTitle+'</span><hr></div><div class="row"><span>'+certifications[i].periodStart+'-'+certifications[i].periodEnd+'</span></div>';
        toolsUsed = '<div class="row">Tools Used:&nbsp';
        for(j=0;j<certifications[i].toolsUsed.length;j++){
            toolsUsed+='<span>'+certifications[i].toolsUsed[j]+'</span>&nbsp';
        }
        toolsUsed+='</div>';
        certification+=toolsUsed;
        tags = '<div class=row">'
        for(j=0;j<certifications[i].tags.length;j++)tags+='<span class="tag">#'+certifications[i].tags[j]+'</span>&nbsp';
        if(certifications[i].link!="#") tags+='<a href="'+certifications[i].link+'" target="_blank"><i class="material-icons right">language</i></a>';
        tags+='</div>';
        certification+=tags;
        certification+='</div><div class="col m6 s12 details">'+certifications[i].shortInfo+'</div></div>';
        certificationsInnerHTML+=certification;
    }
    $('#certifications').html(certificationsInnerHTML);
}

function loadSocialRecognition(socialRecognition){
	socialRecognition.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i=0,j;
	var socialRecognitionInnerHTML='';
	for(i=0;i<socialRecognition.length;i++){					
		socialRecognition_ = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+socialRecognition[i].socialRecognition_Title+'</span><hr></div><div class="row"><span>'+socialRecognition[i].periodStart+'-'+socialRecognition[i].periodEnd+'</span></div>';
		toolsUsed = '<div class="row">Tools Used:&nbsp';
		for(j=0;j<socialRecognition[i].toolsUsed.length;j++){
			toolsUsed+='<span>'+socialRecognition[i].toolsUsed[j]+'</span>&nbsp';
		}
		toolsUsed+='</div>';
		socialRecognition_+=toolsUsed;
		tags = '<div class=row">'
		for(j=0;j<socialRecognition[i].tags.length;j++)tags+='<span class="tag">#'+socialRecognition[i].tags[j]+'</span>&nbsp';
		if(socialRecognition[i].link!="#") tags+='<a href="'+socialRecognition[i].link+'" target="_blank"><i class="material-icons right">language</i></a>';
		tags+='</div>';
		socialRecognition_+=tags;
		socialRecognition_+='</div><div class="col m6 s12 details">'+socialRecognition[i].shortInfo+'</div></div>';
		socialRecognitionInnerHTML+=socialRecognition_;
	}
	$('#socialRecognition').html(socialRecognitionInnerHTML);
}

function loadBlog() {
	var blogHtml = `<div class='sk-ww-medium-publication-feed' data-embed-id='26322'></div><script src='https://www.sociablekit.com/app/embed/medium-publication-feed/widget.js'></script>`;
	$('#blog').html(blogHtml);	
}

function onBodyLoad(){
	console.log('body loaded called');
	$('div.progress').css('display','none');
	$('div.content').css('display','block');
	$('.collapsible').collapsible({
		'accordion' : true
	});
	$('#tabs').tabs({ 'swipeable': true });
	onWindowResize();
}

function onWindowResize(){
	const heightPageA = parseInt($('#pagea').css('height').replace('px',''),10);
	const tabContentHeight = Math.max(heightPageA-48,(window.innerHeight - 50)) + 'px';
	// console.log(`${document.getElementsByClassName('tabs-content carousel initialized')[0].style.height } to ${tabContentHeight}`);
	const tabs = document.getElementsByClassName('tabs-content carousel initialized');
	if (tabs && tabs[0]) {
		tabs[0].style.height = tabContentHeight;
	}
	$('#skills div.m2').css('height',$('#skills div.m2').css('width'));
	$('#image img').css('height',$('#image img').css('width'));
}


$(window).resize(onWindowResize);

var profile;
swal({
		title: "Hello World!!!",
		text: "Hello visitor, you have landed upon little webspace of Arijit Bhowmick, aka sys41x4. I hope you're doing well."

});



function loadMoghysSays() {
	const sys41x4SaysInnerHtml = `<div class="col m6">
		<h6>Recipe for this website:</h6>	
		<div class="row">
			Would you like to have your own portfolio in this template ? It"s pretty easy, <a href="https://github.com/Arijit-Bhowmick">Arijit-Bhowmick</a> covered it up for everyone out their. 
			All the content on this website is dynamically loaded from JSON data.
			Fork this <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/">repo</a> on github and edit <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/blob/master/js/profile.json">js/profile.json</a> for adding your data.
			<a href="https://medium.com/howcatcancode/developer-profile-template-2017-219f43147efe">Read more</a><br>
			If you like this website, consider giving a star to its repo <a href="https://github.com/Arijit-Bhowmick/arijit-bhowmick.github.io/">here</a>.
		</div>
	</div>
	<div class="col m6">
		<h6>Warm Gratitudes</h6>
		<div class="row">
			<div class="col m3 s3"><a href="https:https://pages.github.com/">Github Pages</a></div>
			<div class="col m3 s3"><a href="https://stackoverflow.com/">Stack Overflow</a></div>
			<div class="col m3 s3"><a href="https://jquery.com/">jQuery</a></div>
			<div class="col m3 s3"><a href="http://materializecss.com/">Materialize</a></div>
		</div>
		<div class="row">
			<div class="col m3 s3"><a href="https://fonts.google.com/">Google Fonts</a></div>	
			<div class="col m3 s3"><a href="http://konpa.github.io/devicon/">Devicons</a></div>
			<div class="col m3 s3"><a href="http://www.flaticon.com/">Flaticons</a></div>
			<div class="col m3 s3"><a href="https://simpleicons.org/">SimpleIcons</a></div>				
		</div>
		<div class="row">
			<div class="col m3 s3"><a href="http://noraesae.github.io/perfect-scrollbar/">Perfect Scrollbar</a></div>
			<div class="col m3 s3"><a href="http://www.mattboldt.com/demos/typed-js/">TypedJs</a></div>					
			<div class="col m3 s3"><a href="https://daneden.github.io/animate.css/">Animate.CSS</a></div>
			<div class="col m3 s3"><a href="http://t4t5.github.io/sweetalert/">Sweetalert</a></div>
		</div>
	</div>`;
	$('#sys41x4Says').html(sys41x4SaysInnerHtml);
}

$.get("/assets/js/profile2.json", 
	function(data, status){
		console.log('Got profile:',data,' \nwith status:',status);
		if(status!=="success") {
			window.location.href = "/404.html";
		}
		profile = data;
		var pInfo = profile.personalInfo;
		$('title').html(pInfo.nick+'| Recognition');
		$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
		$('#image img').attr('src','/assets/img/'+pInfo.myimg);
		$('#contact').html(pInfo.mob+'</br>'+pInfo.email+'</br>'+pInfo.skills+'</br>'+pInfo.project+'</br>'+pInfo.experience+'</br>'+pInfo.education+'</br>'+pInfo.infosecGitAcc);
		$('#summary').html(profile.summary);
		$('#tabs').html(`					
			<li class="tab col s2"><a href="#hello">Hello</a></li>
			<li class="tab col s2"><a href="#infosecBlogs">Infosec Blogs</a></li>
			<li class="tab col s3"><a href="#blogs">Blogs</a></li>
			<li class="tab col s3"><a href="#certifications">Certifications</a></li>
			<li class="tab col s2"><a href="#socialRecognition">Social Recognition</a></li>
		`);
		$('#believe').html('<h4>I believe</h4><span></span>');
		const typed = new Typed('#believe span', {
			strings: profile.qoutes,
			typeSpeed: 40,
			cursorChar:"_",
			loop:true
		});
		loadLikes(profile.likes);
		$('#helloText').html(profile.helloText);
		loadLinks(profile.profileLinks);
		loadInfosecBlogs(profile.infosecBlogs);
		loadBlogs(profile.blogs);
		loadCertifications(profile.certifications);
		loadSocialRecognition(profile.socialRecognition);

		loadMoghysSays();
		console.log('body loaded calling');
		onBodyLoad();
});
