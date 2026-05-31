/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const isProduction = process.env.NODE_ENV === "production"
const isUserOrOrgSite = repoName.endsWith(".github.io")
const customDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? ""
const fallbackProjectRepo = "ailo-corporate"
const resolvedRepoName = repoName || fallbackProjectRepo
const hasCustomDomain = customDomain.length > 0
const basePath = !hasCustomDomain && !isUserOrOrgSite && (isGithubActions || isProduction) ? `/${resolvedRepoName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
