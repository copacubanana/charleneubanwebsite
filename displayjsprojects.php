<?php

	function displayJavascriptProjects() {
	
		class JavascriptProject
		{
			public $title;
			public $projectUrl;
			public $githubUrl;
			public $description;
			public $thumbnail;
			public static $counter = 0; 
			public static $jsProjectList = array();
			//Constructor of the class
			public function __construct($title , $projectUrl , $githubUrl , $description  , $thumbnail) {
				$this->title = $title;
				$this->projectUrl = $projectUrl;
				$this->githubUrl = $githubUrl;
				$this->description = $description;
				$this->thumbnail = $thumbnail;
				self::$counter++;  
				array_push(self::$jsProjectList, $this); 
			}
		}

	$memorycardmatch = new JavascriptProject(
		"Memory Card Match Game",
		"http://charleneuban.com/monetmatch/monetmatch.html",
		"https://github.com/copacubanana/memorycardgame",
		"Memory Card Match game. The player must match cards before the time runs out.",
		"images/monetmatchthumb.png"
	);

	$fortunecards = new JavascriptProject(
		"Fortune Telling Playing Cards",
		"http://charleneuban.com/fortunecards/fortunecards.html",
		"https://github.com/copacubanana/fortunecards",
		"Learn from your past, examine your present, and see your future.",
		"images/fortunecardsthumb.png"
	);

	$pianokeys = new JavascriptProject(
		"Piano Keys", 
		"http://charleneuban.com/pianokeys/pianokeys.html",
		"https://github.com/copacubanana/pianokeys",
		"A set of piano keys.",
		"images/pianokeysthumb.png"
	);

	$languagetree = new JavascriptProject(
		"Language Tree", 
		"http://charleneuban.com/languagetree/languagetree.html",
		"https://github.com/copacubanana/languagetree",
		"A language learning game.",
		"images/languagetreethumb.png"
	);

// Loop Through Each Javascript Project

	$list = JavascriptProject::$jsProjectList;
	$length = JavascriptProject::$counter;
	$i = 0;
	
	while ( $i < $length ) {

	$title = $list[$i]->title;
	$url = $list[$i]->projectUrl;
	$github = $list[$i]->githubUrl;
	$thumbnail = $list[$i]->thumbnail;
	$description = $list[$i]->description;

echo<<<END
<!-- project item -->
<div class="projectitem">

	<!-- dropdown -->
	<div class="dropdown">

		<!-- thumbnail link -->
		<a class="dropdown" href="{$url}" target="_blank">
			<img class="projectthumbnail" src="{$thumbnail}" />
		</a><!-- /thumbnail link -->

		<description class="projectdescription">
			<a href="{$url}" target="_blank">{$title}</a> | <a href="{$github}" target="_blank">Github</a>
			<p>{$description}</p>
		</description>

	</div><!-- /dropdown -->

</div><!-- /project item -->
END;
$i++;
	}
}

?>