# TimeInvestr Website Deployment Script
# PowerShell script for easy website deployment

param(
    [string]$DeployType = "local",
    [string]$Domain = "timeinvestr.com"
)

Write-Host "🚀 TimeInvestr Website Deployment Script" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Function to check if command exists
function Test-Command($CommandName) {
    try {
        Get-Command $CommandName -ErrorAction Stop | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Function to create deployment files
function Create-DeploymentFiles {
    Write-Host "📁 Creating deployment files..." -ForegroundColor Yellow
    
    # Create CNAME file for custom domain
    $cnameContent = $Domain
    Set-Content -Path "CNAME" -Value $cnameContent -Encoding UTF8
    Write-Host "✅ Created CNAME file for $Domain" -ForegroundColor Green
    
    # Create .nojekyll file for GitHub Pages
    Set-Content -Path ".nojekyll" -Value "" -Encoding UTF8
    Write-Host "✅ Created .nojekyll file for GitHub Pages" -ForegroundColor Green
    
    # Create robots.txt
    $robotsContent = @"
User-agent: *
Allow: /

Sitemap: https://$Domain/sitemap.xml
"@
    Set-Content -Path "robots.txt" -Value $robotsContent -Encoding UTF8
    Write-Host "✅ Created robots.txt file" -ForegroundColor Green
}

# Function to validate website files
function Test-WebsiteFiles {
    Write-Host "🔍 Validating website files..." -ForegroundColor Yellow
    
    $requiredFiles = @(
        "index.html",
        "privacy.html", 
        "terms.html",
        "support.html",
        "css/style.css",
        "css/responsive.css",
        "js/main.js"
    )
    
    $missingFiles = @()
    
    foreach ($file in $requiredFiles) {
        if (Test-Path $file) {
            Write-Host "✅ $file" -ForegroundColor Green
        } else {
            Write-Host "❌ $file" -ForegroundColor Red
            $missingFiles += $file
        }
    }
    
    if ($missingFiles.Count -gt 0) {
        Write-Host "❌ Missing required files:" -ForegroundColor Red
        foreach ($file in $missingFiles) {
            Write-Host "   - $file" -ForegroundColor Red
        }
        return $false
    }
    
    Write-Host "✅ All required files present" -ForegroundColor Green
    return $true
}

# Function to setup Git repository
function Setup-GitRepository {
    Write-Host "📚 Setting up Git repository..." -ForegroundColor Yellow
    
    if (-not (Test-Command "git")) {
        Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
        return $false
    }
    
    if (Test-Path ".git") {
        Write-Host "✅ Git repository already exists" -ForegroundColor Green
    } else {
        git init
        Write-Host "✅ Initialized Git repository" -ForegroundColor Green
    }
    
    return $true
}

# Function to deploy to GitHub Pages
function Deploy-GitHubPages {
    Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Yellow
    
    if (-not (Test-Command "git")) {
        Write-Host "❌ Git is not installed" -ForegroundColor Red
        return $false
    }
    
    # Add all files
    git add .
    
    # Commit changes
    $commitMessage = "Deploy website - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    
    Write-Host "✅ Committed changes: $commitMessage" -ForegroundColor Green
    
    # Check if remote exists
    $remoteUrl = git remote get-url origin 2>$null
    if ($remoteUrl) {
        Write-Host "✅ Remote origin exists: $remoteUrl" -ForegroundColor Green
        git push origin main
        Write-Host "✅ Pushed to GitHub" -ForegroundColor Green
    } else {
        Write-Host "⚠️  No remote origin found. Please add your GitHub repository:" -ForegroundColor Yellow
        Write-Host "   git remote add origin https://github.com/yourusername/timeinvestr-website.git" -ForegroundColor Cyan
    }
    
    return $true
}

# Function to create deployment instructions
function Show-DeploymentInstructions {
    Write-Host "📋 Deployment Instructions" -ForegroundColor Cyan
    Write-Host "=========================" -ForegroundColor Cyan
    
    Write-Host ""
    Write-Host "🌐 GitHub Pages (Recommended):" -ForegroundColor Yellow
    Write-Host "1. Push your code to GitHub" -ForegroundColor White
    Write-Host "2. Go to repository Settings > Pages" -ForegroundColor White
    Write-Host "3. Select 'Deploy from a branch'" -ForegroundColor White
    Write-Host "4. Choose 'main' branch and '/ (root)' folder" -ForegroundColor White
    Write-Host "5. Click 'Save'" -ForegroundColor White
    
    Write-Host ""
    Write-Host "🌐 Netlify (Alternative):" -ForegroundColor Yellow
    Write-Host "1. Go to netlify.com" -ForegroundColor White
    Write-Host "2. Drag your website folder to deploy" -ForegroundColor White
    Write-Host "3. Get instant live URL" -ForegroundColor White
    
    Write-Host ""
    Write-Host "🔗 Custom Domain Setup:" -ForegroundColor Yellow
    Write-Host "1. Register $Domain with your domain provider" -ForegroundColor White
    Write-Host "2. Add CNAME record pointing to your hosting" -ForegroundColor White
    Write-Host "3. Wait 24-48 hours for DNS propagation" -ForegroundColor White
}

# Function to test website locally
function Test-WebsiteLocally {
    Write-Host "🧪 Testing website locally..." -ForegroundColor Yellow
    
    if (Test-Command "python") {
        Write-Host "✅ Starting Python HTTP server..." -ForegroundColor Green
        Write-Host "🌐 Open http://localhost:8000 in your browser" -ForegroundColor Cyan
        Write-Host "🛑 Press Ctrl+C to stop the server" -ForegroundColor Yellow
        python -m http.server 8000
    } elseif (Test-Command "php") {
        Write-Host "✅ Starting PHP HTTP server..." -ForegroundColor Green
        Write-Host "🌐 Open http://localhost:8000 in your browser" -ForegroundColor Cyan
        Write-Host "🛑 Press Ctrl+C to stop the server" -ForegroundColor Yellow
        php -S localhost:8000
    } else {
        Write-Host "⚠️  No local server found. Install Python or PHP for local testing." -ForegroundColor Yellow
        Write-Host "   Or simply open index.html in your browser" -ForegroundColor Cyan
    }
}

# Main execution
switch ($DeployType.ToLower()) {
    "local" {
        Write-Host "🏠 Local Development Mode" -ForegroundColor Green
        
        if (Test-WebsiteFiles) {
            Create-DeploymentFiles
            Test-WebsiteLocally
        } else {
            Write-Host "❌ Cannot proceed with missing files" -ForegroundColor Red
        }
    }
    
    "github" {
        Write-Host "📚 GitHub Deployment Mode" -ForegroundColor Green
        
        if (Test-WebsiteFiles) {
            Create-DeploymentFiles
            if (Setup-GitRepository) {
                Deploy-GitHubPages
                Show-DeploymentInstructions
            }
        } else {
            Write-Host "❌ Cannot proceed with missing files" -ForegroundColor Red
        }
    }
    
    "setup" {
        Write-Host "⚙️  Setup Mode" -ForegroundColor Green
        
        if (Test-WebsiteFiles) {
            Create-DeploymentFiles
            Setup-GitRepository
            Show-DeploymentInstructions
        } else {
            Write-Host "❌ Cannot proceed with missing files" -ForegroundColor Red
        }
    }
    
    default {
        Write-Host "❌ Invalid deployment type. Use: local, github, or setup" -ForegroundColor Red
        Write-Host "Usage: .\deploy.ps1 -DeployType [local|github|setup] -Domain [yourdomain.com]" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🎉 Deployment script completed!" -ForegroundColor Green
Write-Host "📖 See README.md for detailed instructions" -ForegroundColor Cyan
