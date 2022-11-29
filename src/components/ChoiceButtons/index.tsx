import * as React from "react"
import { Button, SimpleGrid } from "@chakra-ui/react";
import { Utils } from "../../utils";

interface Choice {
	question: string | string[];
	onClick: () => void;
}

interface IProps {
	section: Section;
	choices: Choice[];
}

export const ChoiceButtons: React.FC<IProps> = (props) => {
	const { choices, section } = props;

	return (
		<SimpleGrid
			spacing={5}
			columns={{
				sm: 1,
				md: 2,
			}}
		>
			{choices.map((choice, i) => {
				const randomColor = Utils.getColorFromString(Utils.handleText(choice.question));

				return (
					<Button
						key={`${section}-choice-${i}`}
						size="lg"
						variant="outline"
						fontWeight="bolder"
						onClick={choice.onClick}
						style={{
							whiteSpace: "normal",
							wordWrap: "break-word",
							borderColor: randomColor,
							color: randomColor,
						}}
						py={8}
					>
						{Utils.handleText(choice.question)}
					</Button>
				)
			})}
		</SimpleGrid>
	)
}
