import { faker } from "@faker-js/faker";
import StoryCard from "./StoryCard";

function Stories() {
	const createUser = () => {
		return {
			name: faker.name.fullName(),
			src: faker.image.avatar(),
			profile: faker.image.avatar(),
		};
	};

	const createUsers = (numUsers = 5) => {
		return Array.from({ length: numUsers }, createUser);
	};

	const stories = createUsers();

	const storiesMap = stories.map((story) => {
		return (
			<StoryCard
				key={story.src}
				name={story.name}
				src={story.src}
				profile={story.profile}
			/>
		);
	});

	return (
		<div className='flex justify-center space-x-3 mx:auto'>{storiesMap}</div>
	);
}

export default Stories;
