import StaffMember from './StaffMember'
import './StaffPage.css'
import staffMembers from '../data/staff.json'

function StaffPage() {
  return (
    <section className="content-panel" id="staff">
      <div className="staff-grid">
        {staffMembers.map((member) => (
          <StaffMember
            key={member.id}
            portrait={member.portrait}
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
