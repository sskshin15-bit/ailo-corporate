/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const isUserOrOrgSite = repoName.endsWith(".github.io")
const basePath = isGithubActions && !isUserOrOrgSite ? `/${repoName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
