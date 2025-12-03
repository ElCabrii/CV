interface SkillCategoryProps {
    pTitle: string;
    pSkills: string[];
}

export default function SkillCategory({ pTitle, pSkills }: SkillCategoryProps) {
    return (
        <div className="skill-category">
            <h4>{pTitle}</h4>
            <div className="skill-list">
                {pSkills.map((lSkill: string, lIndex: number) => (
                    <span key={lIndex} className="skill-tag">
                        {lSkill}
                    </span>
                ))}
            </div>
        </div>
    );
}
