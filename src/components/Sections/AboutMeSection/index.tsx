import * as React from "react"
import { Heading, Text } from "@chakra-ui/react";
import { ChoiceButtons } from "../../../components";
import { strings } from "../../../localization";
import { Utils } from "../../../utils";
import moment from "moment";

interface IProps {
	setCurrentSection: (section: Section) => void;
}

export const AboutMeSection: React.FC<IProps> = (props) => {
	const { setCurrentSection } = props;
	const { sections: { aboutMe }, questions } = strings;

	const choices = [
		{
			question: questions.aboutExperience,
			onClick: () => {},
		},
		{
			question: questions.aboutJobs,
			onClick: () => {
			},
		},
		{
			question: questions.contact,
			onClick: () => {},
		},
		{
			question: questions.backToWelcome,
			onClick: () => {
				setCurrentSection("welcome");
			}
		}
	];

	return (
		<>
			<Heading
				size="2xl"
				variant="htmlTags"
			>
				{Utils.handleText(aboutMe.headingText)}
			</Heading>
			{
				aboutMe.paragraphs.map((paragraph, i) => (
					<Text
						variant="htmlTags"
						key={`a-p-${i}`}
					>
						{strings.formatString(
							Utils.handleText(paragraph),
							{
								years: moment().diff("19970909", "years"),
							}
						)}
					</Text>
				))
			}
			<ChoiceButtons
				section="aboutMe"
				choices={choices}
			/>
		</>
	);
}
