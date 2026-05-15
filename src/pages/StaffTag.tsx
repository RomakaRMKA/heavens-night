interface StaffTagProps {
  label: string
  color?: string
}

function StaffTag({ label, color }: StaffTagProps) {
  return (
    <span className="staff-tag" data-color={color}>
      {label}
    </span>
  )
}

export default StaffTag