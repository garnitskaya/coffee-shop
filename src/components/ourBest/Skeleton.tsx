import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={260}
    height={260}
    viewBox="0 0 260 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="27" y="147" rx="3" ry="3" width="167" height="20" />
    <rect x="137" y="184" rx="3" ry="3" width="60" height="20" />
    <rect x="105" y="32" rx="0" ry="0" width="3" height="1" />
    <rect x="16" y="23" rx="0" ry="0" width="0" height="22" />
    <rect x="26" y="18" rx="0" ry="0" width="167" height="115" />
    <rect x="55" y="97" rx="0" ry="0" width="0" height="1" />
    <rect x="145" y="220" rx="3" ry="3" width="50" height="20" />
    <rect x="160" y="4" rx="0" ry="0" width="0" height="2" />
  </ContentLoader>
)

export default Skeleton;