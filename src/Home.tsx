import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Post } from './utils/types';

type PostProps = { posts: Post[] };

const PostsBlock = (props: PostProps) => {
	return (
		<div className="grid">
			{props.posts.map((post) => (
				<Card post={post} />
			))}
		</div>
	);
};

export const Home = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPosts = async () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((resp) => resp.json())
			.then((json) => {
				setPosts(json);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="container">
			<div className="main">
				<h1 className="title">Posts and Comments</h1>
				<p className="description">Select a post to view comments</p>
			</div>
			{isLoading ? <div>...loading</div> : <PostsBlock posts={posts} />}
		</div>
	);
};
