import StaffMember from './StaffMember'
import './StaffPage.css'
import staffMembers from '../data/staff.json'

const staffPortraits = import.meta.glob('../assets/staff/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function resolvePortraitPath(rawPortraitPath: string): string {
  const fileName = rawPortraitPath.split('/').pop()

  if (!fileName) {
    return rawPortraitPath
  }

  return staffPortraits[`../assets/staff/${fileName}`] ?? rawPortraitPath
}

function StaffPage() {
  return (
    <section className="content-panel" id="staff">
      <div className="staff-grid">
        {staffMembers.map((member) => (
          <StaffMember
            key={member.id}
            portrait={resolvePortraitPath(member.portrait)}
            name={member.name}
            job={member.job}
            tags={member.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default StaffPage
