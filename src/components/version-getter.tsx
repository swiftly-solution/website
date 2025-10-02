import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";


interface VersionGetterProps {
}

export const VersionGetter: React.FC<VersionGetterProps> = async ({
}) => {
  const version = await fetch('https://api.github.com/repos/swiftly-solution/swiftlys2/releases/latest')
    .then(res => res.json())
    .then(data => data.tag_name.replace('v', ''))
    .catch(() => 'latest');

  return <>
    <DynamicCodeBlock lang="xml" code={`<PackageReference Include="SwiftlyS2.CS2" Version="${version}" ExcludeAssets="runtime" />`} />
  </>
};