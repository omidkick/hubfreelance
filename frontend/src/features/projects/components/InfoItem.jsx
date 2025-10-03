// Reusable InfoItem component for consistency
function InfoItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-secondary-400 w-[14px] h-[14px]" />
      <span className="text-[13px]">{label}</span>
    </div>
  );
}

export default InfoItem;
