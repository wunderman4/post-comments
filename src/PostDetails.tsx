import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Card } from './Card';

interface Props extends RouteComponentProps {}

export const PostDetails = (props: Props) => {
	console.log('post props: ', props);
	// @ts-ignore
	const { post } = props.location.state;
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchComments = async (postId?: string) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then((resp) => resp.json())
			.then((json) => {
				setComments(json);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e.message);
			});
	};

	useEffect(() => {
		if (!post) return;
		fetchComments(post.id);
	}, [post]);

	return (
		<div className="post-details">
			<button className="return-button">
				<Link to="/">...return to posts</Link>
			</button>
			{isLoading ? (
				<div>...loading</div>
			) : (
				<div>
					<Card post={post} disableNavigation />
					<h2>Comments</h2>
					<ul className="comment-list">
						{error ? (
							<div>opps...</div>
						) : (
							comments.map((comment) => {
								const { name, email, body } = comment;
								return (
									<li className="comment">
										<h3 style={{ marginBottom: 0 }}>{name}</h3>
										<span style={{ fontSize: '0.8em' }}>{email}</span>
										<p>{body}</p>
									</li>
								);
							})
						)}
					</ul>
				</div>
			)}
		</div>
	);
};
