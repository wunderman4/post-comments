import { Link } from 'react-router-dom';
import { Post } from './utils/types';

type Props = {
	post: Post;
	disableNavigation?: boolean;
};

export const Card = ({ post, disableNavigation }: Props) => (
	<div className="card" key={post.id}>
		{console.log('disable', disableNavigation)}
		{disableNavigation ? (
			<h3 className="card-title">{post.title}</h3>
		) : (
			<Link to={{ pathname: `post/${post.id}`, state: { post } }}>
				<h3 className="card-title">{post.title}</h3>
			</Link>
		)}

		<p className="card-body">{post.body}</p>
	</div>
);
