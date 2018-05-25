

var content = "Haruki Murakami began his career in writing after he watched a baseball game at the Jingu Stadium one day in 1978. He is one of the most popular, if not the best, "
+"novelist the Land of the Rising Sun could offer as his books and stories gained Bestseller titles not just in his native country but all around the world. His works have been translated into 50 different languages to cater various readers and sold millions of copies. Aside from fiction and non-fiction stories, he also dabbled with surrealism, magical realism, science fiction, picaresque, and realism among others, "
+"making him an impeccable storyteller who is worthy of numerous awards and receiving international recognition, such as the Franz Kafka Prize in 2006 and Jerusalem Prize in 2009.";


var count = 0;

function countclick(){
	
	document.getElementById("C-click").addEventListener("click", function(){
		count+=1;
		if(count>=3){
			document.getElementById("content").innerHTML = "The critical success of Hear the Wind Sing encouraged Murakami to continue writing, and he soon authored two successful sequels, Pinball, 1973 and A Wild Sheep Chase. Murakami has since written 10 additional novels, as well as three collections of short stories and several works of nonfiction. Over the course of his career, Murakami has been awarded several international literary honors, including the Franz Kafka Prize and the Jerusalem Prize. More recently, he was ranked on Time magazine’s 2015 list of the 100 most influential figures in the world";
			//document.write(tempcount);
			count =0;
		}
	});	
}

function clickk(){
	document.getElementById("R-click").addEventListener("click", function(){
		count+=1;
		if(count>=3){
			document.getElementById("content").innerHTML = content;
			count=0;
		}
	})
}