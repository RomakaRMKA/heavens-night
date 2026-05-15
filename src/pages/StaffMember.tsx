import StaffTag from './StaffTag'

interface Tag {
  text: string
  color?: string
}

interface StaffMemberProps {
  portrait: string
  name: string
  job: string
  tags: Tag[]
}

function StaffMember({ portrait, name, job, tags }: StaffMemberProps) {
  return (
    <article className="staff-member-card">
      <div className="staff-member-portrait">
        <img src={portrait} alt={name} />
      </div>
      <div className="staff-member-info">
        <h3 className="staff-member-name">{name}</h3>
        <p className="staff-member-job">{job}</p>
        <div className="staff-member-tags">
          {tags.map((tag) => (
            <StaffTag key={`${name}-${tag.text}`} label={tag.text} color={tag.color} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default StaffMember
