
## Introduction

Thanks to the collective effort provided by my mentors, I am now confident with my abilities to produce top quality content as a web developer. My lack of skills and knowledge has stopped me from achieving what i sought to achieve in the past, but I can now proudly say that I have overcome many of the challenges that are to be taken on in order to become a "worthy" developper and I now consider myself "employable" although not quite a "master" yet.
Because I understand how businesses operates, I have been set to reach a certain level of proficiency that would give me an edge over what is readily available through a Google search or an offshore indian sweatshop for a few roupies.

I am, of course,  dedicated to continue my learning and knowledge gathering as well as trying to become a better programmer every day to always stay up-to-date with what's going on and perhaps one day even, contribute and be a part of  "what's going on".


# YAP - Yet Another Portfolio<br>

##### <i>A Robust Structure and a Modern Approach, meet <bold>YAP - A FullStack Story</bold></i><br>
<small><i>Author: Belka HEDIA (zshmeta)</small></i>

<small><strong>Sources and Knowledge base</strong>:<br>- </small>

### Quick Recap'

##### 1.  What is this?

My Portfolio. The design was inspired by various sources and the stacks i used just felt allright and seemed to be fit for the task.

##### 2. Why is this?

As i grew more and more confident with my developper skills, it was time for me to "bundle up" my skills and nothing better than a plain Portfolio to show case what i am capable of.

##### 3. How is this?

I truly had a moment with (over)thinking what i should use as stack. Fortunately that led me to learn all about stacks and made me realise the only good stack is the one you chose.
In my case that led to having next which includes React for my front and express for the server side. I have also used nodaemon for server stability, cors (cross origin source sharing) axios for easy routing and a few others that i'll be mentionning.


## Overview

This is a full-stack web development project that was produced with the aim of showcasing my skills and in order to do that i have settled on a coding a Portfolio with a complex but efficient, safe  and robust architecture based on what the scope of  a highly-performant, scalable entreprise grade web applications would be.

The project is written using HTML, CSS and JavaScript and by leveraging tools available through nodejs and it's package manager "npm" (and/or yarn) which  has sped up my productivity and allowed me to create and implement more features and richer content as well as solidify the bases for this project, it's design and it's development, as well as making the move to production a success by deploying it live on a public domain.

some of these key tools are :

- Nextjs. The fastest growing js framework for full stack apps on node. With React integrated within next and the fact that it uses ssr (server side rendering) it has, in my opinion, all the features needed for a rich a impressive website.

- Expressjs . Although Next is the most popular js framework right now, expressjs still is the most widely used library to implement server capabilities in fullstack web projects. It is also the most popular nodejs library and it is a must have for any nodejs developer.

Next and/or Express are in their own enough in order to build full stack apps. Next only requires a Database to be complete where as Express usually works in a stack like in MERN/MEAN stacks (MongoDB, Express, React, Nodejs) and (MongoDB, Express, Angular, Nodejs) respectively but both can become even greater tools when used in conjunction. Plus, it is always good to have a more than one tool in your toolbox and to be able to use them both in order to be able to handle any situation.


- NoSQL/Cassandra.. NoSQL databases are generally used for unstructured data and Cassandra is one of the most popular NoSQL database out there. It is also a very powerful tool that is used by some of the biggest companies in the world such as Facebook, Netflix, Instagram, Twitter, Apple, Spotify, eBay, Uber, Reddit, and many more. It is also a very good tool to have in your toolbox and it is a must have for any fullstack developer.

- MySQL/Postgresql. Postgres and MySQL are the most popular RDBMS (Relational Database Management System) and they are also the most widely used databases in the world. They are also a must have for any fullstack developer. if i chose Postgres over MySQL it is because it is more popular and it is also the most advanced RDBMS out there. On top of working really well with nodejs, postgres has the ability to handle object oriented data and it is also a very powerful tool that is used by some of the biggest companies in the world such as Apple, Instagram, Uber, Netflix, eBay, Spotify, Reddit, and many more.

<small>*, ** : <i>it is actually not uncommon at all to have both database architectures within the same project. The RDBMS will generally be used for structured persistent data (ex: User's Profile, User's Posts, User's Shopping History etc ...), whereas a NoSQL database will be more common for unstructured realtime non persistent data (ex: User's Cart Content, User's Live Chat content, User's Current IP etc...) </i></small>


### Table of Contents

1. Developer State of Mine
2. From Ideas to Divs
3. What, Why, How. "A + B = B + A"
4. Compose moi un Mouton : A little story on components.
5. The Story: A YAP's (Yet Another Portfolio's) Novel by zshmeta
6. The Apps:
   - ReactTacToe
   - ReAImagine
   - IciPerd_IciGagne
   - PasCon_leCV
   - zSholitaire
7. A Peek Under the Maid's Robe
8. Le Mot de la Fin: The Final Word
9. Thanks and Remerciements: Acknowledging the Contributions of Others
10. The Keyboard is Yours...: An Invitation to Explore My Portfolio

In the following sections, I will provide more details about each part of the portfolio project.

```typescript
Mouse Follow

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}
```