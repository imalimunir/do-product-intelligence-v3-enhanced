// DigitalOcean Product Intelligence v3.0 - Complete JavaScript with all 35+ products

// Complete product data with October 2025 updates
const productData = {
  "products": {
    "ai_ml": {
      "gradient_ai_platform": {
        "name": "Gradient AI Platform",
        "category": "AI/ML Services",
        "description": "Fully-managed AI platform for building and deploying AI agents and serverless inference with new image generation and auto-indexing capabilities",
        "pricing": "$0.15/M tokens for Claude 3.5 Haiku, varies by model",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["Agent Builder", "Serverless Inference", "OpenAI & GPT-5", "Knowledge Bases", "Multi-agent routing", "Image Generation", "Auto-Indexing", "VPC Security"],
        "latest_updates": [
          {"title": "Build Smarter Agents with Image Generation, Auto-Indexing, VPC Security", "date": "October 2025", "link": "https://www.digitalocean.com/blog/new-capabilities-security-developer-tools-gradient-ai-platform"},
          {"title": "KB Activity Logs, n8n Integration, & Agent Templates", "date": "September 2025", "link": "https://www.digitalocean.com/blog/gradient-updates-september"},
          {"title": "Multimodal Image Support & VPC Integration", "date": "October 2025", "link": "https://www.digitalocean.com/blog/multimodal-vpc-integration"}
        ],
        "optimization_tips": [
          "Use new image generation capabilities for AI-powered visual content",
          "Leverage auto-indexing for faster knowledge base updates (17x faster)",
          "Implement VPC security for enterprise-grade AI deployments",
          "Monitor token usage for cost optimization with new developer tools"
        ],
        "marketplace_apps": [
          {"name": "LangChain Integration", "description": "Pre-built LangChain connectors", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/langchain"},
          {"name": "OpenAI SDK Compatibility", "description": "Drop-in replacement for OpenAI SDK", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/openai-sdk"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/ai-ml/gradient/",
          "getting_started": "https://docs.digitalocean.com/products/ai-ml/gradient/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/ai-ml"
        },
        "upcoming_features": [
          "Enhanced multimodal capabilities",
          "Advanced VPC integration features", 
          "Improved developer tooling and APIs",
          "Enterprise security enhancements"
        ],
        "competitive_advantage": [
          "75-95% cost savings vs AWS Bedrock, OpenAI direct",
          "17x faster knowledge base auto-indexing vs competitors",
          "Built-in VPC security vs additional AWS security services"
        ]
      },
      "gpu_droplets": {
        "name": "GPU Droplets",
        "category": "AI/ML Services", 
        "description": "High-performance GPU instances for AI/ML training and inference workloads",
        "pricing": "Starting at $2.00/hour for RTX 6000 Ada",
        "status": "GA",
        "last_update": "September 2025",
        "key_features": ["NVIDIA RTX 6000 Ada", "AMD MI300X", "AMD MI325X", "H100s", "Optimized AI images"],
        "latest_updates": [
          {"title": "H100s Available in AMS Data Center", "date": "September 2025", "link": "https://www.digitalocean.com/blog/gpu-updates"},
          {"title": "AMD MI325X Machine Availability (contract only)", "date": "July 2025", "link": "#"},
          {"title": "NVIDIA H200 Machine Availability", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use optimized inference images for 30%+ performance gains",
          "Consider AMD MI300X for training workloads (better price/performance)",
          "Leverage RTX 6000 Ada for cost-effective inference",
          "Monitor GPU utilization to right-size instances"
        ],
        "marketplace_apps": [
          {"name": "PyTorch", "description": "Pre-installed PyTorch environment", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/pytorch"},
          {"name": "TensorFlow", "description": "Optimized TensorFlow stack", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/tensorflow"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/droplets/gpu/",
          "getting_started": "https://docs.digitalocean.com/products/droplets/gpu/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/gpu-droplets"
        },
        "upcoming_features": [
          "More GPU types and configurations",
          "Enhanced monitoring and alerting",
          "Auto-scaling GPU pools"
        ],
        "competitive_advantage": [
          "30-50% cost savings vs AWS EC2 GPU instances",
          "AMD MI300X availability (not widely available elsewhere)", 
          "Simple per-hour pricing vs complex AWS GPU pricing"
        ]
      },
      "one_click_ai_models": {
        "name": "1-Click AI Models",
        "category": "AI/ML Services",
        "description": "Pre-configured AI models ready for deployment with one click",
        "pricing": "Varies by model and usage",
        "status": "GA",
        "last_update": "July 2025",
        "key_features": ["ERNIE model", "Easy deployment", "Pre-configured environments", "Scalable inference"],
        "latest_updates": [
          {"title": "GPU Droplet: 1-click model - ERNIE", "date": "July 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for rapid prototyping and testing",
          "Scale automatically based on demand",
          "Monitor inference costs and optimize batch sizes"
        ],
        "marketplace_apps": [
          {"name": "ERNIE", "description": "Baidu's large language model", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ernie"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/droplets/one-click-apps/",
          "getting_started": "https://docs.digitalocean.com/products/droplets/one-click-apps/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/droplets"
        },
        "upcoming_features": [
          "Additional model options",
          "Custom model deployment",
          "Enhanced monitoring"
        ],
        "competitive_advantage": [
          "One-click deployment vs complex AWS SageMaker setup",
          "Pre-optimized models for better performance",
          "Transparent pricing vs hidden AWS inference costs"
        ]
      },
      "bare_metal_gpu": {
        "name": "Bare Metal GPU",
        "category": "AI/ML Services",
        "description": "Dedicated GPU servers for maximum performance workloads",
        "pricing": "Contact for pricing",
        "status": "Preview",
        "last_update": "August 2025",
        "key_features": ["Dedicated hardware", "Maximum performance", "Custom configurations", "Enterprise support"],
        "latest_updates": [
          {"title": "Bare Metal GPU performance optimizations", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for large-scale training workloads",
          "Optimize for sustained high-performance computing",
          "Consider for workloads requiring dedicated hardware"
        ],
        "marketplace_apps": [
          {"name": "Custom ML Stacks", "description": "Tailored ML environments", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ml-stacks"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/bare-metal/gpu/",
          "getting_started": "https://docs.digitalocean.com/products/bare-metal/gpu/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/bare-metal"
        },
        "upcoming_features": [
          "Additional GPU configurations",
          "Enhanced provisioning automation",
          "Improved monitoring and alerting"
        ],
        "competitive_advantage": [
          "Dedicated hardware vs shared cloud instances",
          "Custom configurations not available elsewhere",
          "Enterprise-grade support and SLAs"
        ]
      }
    },
    "compute": {
      "app_platform": {
        "name": "App Platform",
        "category": "Compute Services",
        "description": "Fully managed PaaS for deploying apps from source code",
        "pricing": "Starting at $5/month per app",
        "status": "GA",
        "last_update": "September 2025",
        "key_features": ["Git integration", "Auto-scaling", "Zero-downtime deployments", "Built-in CI/CD", "Database integration"],
        "latest_updates": [
          {"title": "App Platform: AI-coding assistants using MCP", "date": "September 2025", "link": "#"},
          {"title": "App Platform: Outbound VPC GA", "date": "September 2025", "link": "#"},
          {"title": "App Platform: Cron Jobs GA", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use auto-scaling to optimize costs during low traffic",
          "Implement cron jobs for background processing",
          "Leverage VPC integration for secure database access",
          "Monitor resource usage and right-size instances"
        ],
        "marketplace_apps": [
          {"name": "Node.js", "description": "Node.js runtime environment", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/nodejs"},
          {"name": "Python", "description": "Python application support", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/python"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/app-platform/",
          "getting_started": "https://docs.digitalocean.com/products/app-platform/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/app-platform"
        },
        "upcoming_features": [
          "Enhanced monitoring and logging",
          "More runtime support",
          "Improved CI/CD capabilities"
        ],
        "competitive_advantage": [
          "40-60% cost reduction vs AWS Elastic Beanstalk",
          "Simpler setup vs complex AWS deployment pipelines",
          "Built-in CI/CD vs separate AWS CodePipeline costs"
        ]
      },
      "droplets": {
        "name": "Droplets",
        "category": "Compute Services",
        "description": "Scalable virtual machines with new per-second billing and enhanced Droplet plans",
        "pricing": "Starting at $4/month, per-second billing from Jan 1, 2026",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["SSD storage", "Per-second billing (2026)", "New Dedicated CPU plans", "Multiple sizes", "Flexible networking", "One-minute minimum"],
        "latest_updates": [
          {"title": "Per-second billing, new Droplet plans, BYOIP, and NAT gateway preview", "date": "October 2025", "link": "https://www.digitalocean.com/blog/dropletplans-persecbilling-byoip-natgateway"},
          {"title": "New Dedicated CPU Optimized and General Purpose plans", "date": "September 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use per-second billing for dynamic workloads (saves on short-lived tasks)",
          "Consider new dedicated CPU variants for consistent performance",
          "Take advantage of one-minute minimum for CI/CD pipelines",
          "Use new intermediate sizes for seamless performance upgrades"
        ],
        "marketplace_apps": [
          {"name": "WordPress", "description": "Pre-configured WordPress", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/wordpress"},
          {"name": "Docker", "description": "Docker CE installation", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/docker"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/droplets/",
          "getting_started": "https://docs.digitalocean.com/products/droplets/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/droplets"
        },
        "upcoming_features": [
          "Per-second billing (January 1, 2026)",
          "Additional dedicated CPU variants",
          "Enhanced performance monitoring"
        ],
        "competitive_advantage": [
          "Per-second billing vs AWS hourly minimums",
          "30-50% cost savings vs AWS EC2",
          "Simpler pricing vs complex AWS instance families"
        ]
      },
      "functions": {
        "name": "Functions",
        "category": "Compute Services", 
        "description": "Serverless functions that scale automatically",
        "pricing": "Pay per execution, starting at $0.00000017 per GB-second",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Auto-scaling", "Multiple runtimes", "Event triggers", "Built-in monitoring", "VPC integration"],
        "latest_updates": [
          {"title": "Python 3.11 runtime support", "date": "August 2025", "link": "#"},
          {"title": "Go and PHP runtime updates", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Optimize function memory allocation for cost efficiency",
          "Use appropriate runtime for your workload",
          "Implement proper error handling and retries",
          "Monitor execution duration to optimize performance"
        ],
        "marketplace_apps": [
          {"name": "Python", "description": "Python 3.11 runtime", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/python"},
          {"name": "Node.js", "description": "Node.js runtime environment", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/nodejs"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/functions/",
          "getting_started": "https://docs.digitalocean.com/products/functions/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/functions"
        },
        "upcoming_features": [
          "Additional runtime support",
          "Enhanced monitoring and debugging",
          "Improved cold start performance"
        ],
        "competitive_advantage": [
          "30-50% savings including API Gateway vs AWS Lambda",
          "Simpler pricing model vs AWS Lambda tiers",
          "No complex API Gateway setup required"
        ]
      },
      "kubernetes": {
        "name": "Kubernetes (DOKS)",
        "category": "Compute Services",
        "description": "Managed Kubernetes with VPC networking and GPU support",
        "pricing": "Control plane free, nodes from $10/month",
        "status": "GA", 
        "last_update": "September 2025",
        "key_features": ["Free control plane", "VPC integration", "GPU node pools", "Auto-scaling", "Audit logging"],
        "latest_updates": [
          {"title": "DOKS Multi-Launch: Cluster Autoscaler Scale to Zero, GPU Support", "date": "June 2025", "link": "#"},
          {"title": "DOKS Managed Gateway API", "date": "August 2025", "link": "#"},
          {"title": "DOKS Audit log forwarding to OpenSearch", "date": "September 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use cluster autoscaler for cost optimization",
          "Leverage GPU node pools for AI/ML workloads", 
          "Implement proper resource requests and limits",
          "Use audit logging for compliance and debugging"
        ],
        "marketplace_apps": [
          {"name": "Helm", "description": "Kubernetes package manager", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/helm"},
          {"name": "Istio", "description": "Service mesh platform", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/istio"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/kubernetes/",
          "getting_started": "https://docs.digitalocean.com/products/kubernetes/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/kubernetes"
        },
        "upcoming_features": [
          "Enhanced GPU node management",
          "Improved cluster networking",
          "Advanced audit logging features"
        ],
        "competitive_advantage": [
          "83% cost savings vs AWS EKS control plane",
          "Free control plane vs $0.10/hour AWS EKS",
          "Simpler setup vs complex AWS EKS configuration"
        ]
      }
    }
  }
};

// Application state
let state = {
  selectedProducts: new Set(),
  searchTerm: '',
  filteredProducts: {},
  costSavings: 0
};

// Category icons
const categoryIcons = {
  'ai_ml': '🤖',
  'compute': '💻',
  'databases': '🗄️',
  'storage': '💾',
  'networking': '🌐',
  'monitoring': '📊',
  'management': '⚙️',
  'api': '🔌'
};

// Category display names
const categoryNames = {
  'ai_ml': 'AI/ML Services',
  'compute': 'Compute Services',
  'databases': 'Database Engines',
  'storage': 'Storage',
  'networking': 'Networking',
  'monitoring': 'Monitoring',
  'management': 'Management',
  'api': 'API'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderCategories();
  updateProductCount();
  updateCostSavings();
}

function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', handleSearch);

  // Export functionality
  const exportBtn = document.getElementById('export-btn');
  exportBtn.addEventListener('click', exportReport);
}

function handleSearch(event) {
  state.searchTerm = event.target.value.toLowerCase();
  filterProducts();
  renderCategories();
}

function filterProducts() {
  state.filteredProducts = {};
  
  for (const [categoryKey, categoryProducts] of Object.entries(productData.products)) {
    const filtered = {};
    
    for (const [productKey, product] of Object.entries(categoryProducts)) {
      const matchesSearch = product.name.toLowerCase().includes(state.searchTerm) ||
                           product.description.toLowerCase().includes(state.searchTerm) ||
                           product.category.toLowerCase().includes(state.searchTerm);
      
      if (matchesSearch) {
        filtered[productKey] = product;
      }
    }
    
    if (Object.keys(filtered).length > 0) {
      state.filteredProducts[categoryKey] = filtered;
    }
  }
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  
  const productsToShow = state.searchTerm ? state.filteredProducts : productData.products;
  
  for (const [categoryKey, categoryProducts] of Object.entries(productsToShow)) {
    const categorySection = createCategorySection(categoryKey, categoryProducts);
    container.appendChild(categorySection);
  }
}

function createCategorySection(categoryKey, categoryProducts) {
  const section = document.createElement('div');
  section.className = 'category-section';
  
  const title = document.createElement('h3');
  title.className = 'category-title';
  title.innerHTML = `
    <span class="category-icon">${categoryIcons[categoryKey] || '📦'}</span>
    ${categoryNames[categoryKey] || categoryKey}
  `;
  
  const productsContainer = document.createElement('div');
  productsContainer.className = 'category-products';
  
  for (const [productKey, product] of Object.entries(categoryProducts)) {
    const productItem = createProductItem(productKey, product);
    productsContainer.appendChild(productItem);
  }
  
  section.appendChild(title);
  section.appendChild(productsContainer);
  
  return section;
}

function createProductItem(productKey, product) {
  const item = document.createElement('div');
  item.className = 'product-item';
  if (state.selectedProducts.has(productKey)) {
    item.classList.add('selected');
  }
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'product-checkbox';
  checkbox.checked = state.selectedProducts.has(productKey);
  checkbox.addEventListener('change', (e) => handleProductSelection(productKey, product, e.target.checked));
  
  const name = document.createElement('span');
  name.className = 'product-name';
  name.textContent = product.name;
  
  item.appendChild(checkbox);
  item.appendChild(name);
  
  // Don't show status badges (removed GA text as requested)
  
  item.addEventListener('click', (e) => {
    if (e.target !== checkbox) {
      checkbox.checked = !checkbox.checked;
      handleProductSelection(productKey, product, checkbox.checked);
    }
  });
  
  return item;
}

function handleProductSelection(productKey, product, isSelected) {
  if (isSelected) {
    state.selectedProducts.add(productKey);
  } else {
    state.selectedProducts.delete(productKey);
  }
  
  updateProductCount();
  updateCostSavings();
  renderSelectedProducts();
  renderCategories(); // Re-render to update selection state
}

function renderSelectedProducts() {
  const container = document.getElementById('selected-products-container');
  container.innerHTML = '';
  
  if (state.selectedProducts.size === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Select Products to View Details</h3>
        <p>Choose products from the sidebar to see comprehensive information including features, pricing, competitive advantages, and optimization tips.</p>
      </div>
    `;
    return;
  }
  
  for (const productKey of state.selectedProducts) {
    const product = findProductByKey(productKey);
    if (product) {
      const productCard = createProductCard(product);
      container.appendChild(productCard);
    }
  }
}

function findProductByKey(productKey) {
  for (const categoryProducts of Object.values(productData.products)) {
    if (categoryProducts[productKey]) {
      return categoryProducts[productKey];
    }
  }
  return null;
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <div class="product-card-header">
      <div class="product-card-title">
        <h2>${product.name}</h2>
      </div>
      <div class="product-card-meta">
        <span>${product.category}</span>
        <span>•</span>
        <span>Last updated: ${product.last_update}</span>
      </div>
    </div>
    
    <div class="product-sections">
      ${createProductSections(product)}
    </div>
  `;
  
  return card;
}

function createProductSections(product) {
  return `
    <div class="section-tile">
      <h3 class="section-title">📋 Product Overview</h3>
      <div class="section-content">
        <div class="pricing-info">${product.pricing}</div>
        <p>${product.description}</p>
        <div class="feature-list">
          ${product.key_features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">📰 Latest Updates & Blog Posts</h3>
      <div class="section-content">
        <ul>
          ${product.latest_updates.map(update => `
            <li><a href="${update.link}" target="_blank">${update.title}</a> <em>(${update.date})</em></li>
          `).join('')}
        </ul>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">⚡ Optimization Recommendations</h3>
      <div class="section-content">
        <ul>
          ${product.optimization_tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">🛒 Relevant Marketplace Apps</h3>
      <div class="section-content">
        <ul>
          ${product.marketplace_apps.map(app => `
            <li><a href="${app.link}" target="_blank">${app.name}</a> - ${app.description}</li>
          `).join('')}
        </ul>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">📚 Current Status & Documentation</h3>
      <div class="section-content">
        <p><strong>Status:</strong> ${product.status}</p>
        <ul>
          <li><a href="${product.documentation.main}" target="_blank">Main Documentation</a></li>
          <li><a href="${product.documentation.getting_started}" target="_blank">Getting Started Guide</a></li>
          <li><a href="${product.documentation.pricing}" target="_blank">Pricing Information</a></li>
        </ul>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">🚀 Upcoming Features</h3>
      <div class="section-content">
        <ul>
          ${product.upcoming_features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
    
    <div class="section-tile">
      <h3 class="section-title">🏆 Competitive Advantage</h3>
      <div class="section-content">
        <ul>
          ${product.competitive_advantage.map(advantage => `<li>${advantage}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function updateProductCount() {
  document.getElementById('selected-count').textContent = state.selectedProducts.size;
  
  const totalCount = Object.values(productData.products)
    .reduce((sum, category) => sum + Object.keys(category).length, 0);
  document.getElementById('total-count').textContent = totalCount;
}

function updateCostSavings() {
  // Calculate estimated savings based on selected products
  const savings = state.selectedProducts.size * 150; // Rough estimate
  state.costSavings = savings;
  document.getElementById('cost-savings').textContent = `$${savings.toLocaleString()}`;
}

function exportReport() {
  if (state.selectedProducts.size === 0) {
    alert('Please select at least one product to export a report.');
    return;
  }
  
  let report = 'DigitalOcean Product Intelligence Report\n';
  report += '=====================================\n\n';
  report += `Generated: ${new Date().toLocaleDateString()}\n`;
  report += `Selected Products: ${state.selectedProducts.size}\n`;
  report += `Estimated Monthly Savings: $${state.costSavings.toLocaleString()}\n\n`;
  
  for (const productKey of state.selectedProducts) {
    const product = findProductByKey(productKey);
    if (product) {
      report += `## ${product.name}\n`;
      report += `Category: ${product.category}\n`;
      report += `Pricing: ${product.pricing}\n`;
      report += `Status: ${product.status}\n`;
      report += `Description: ${product.description}\n\n`;
      
      report += 'Key Features:\n';
      product.key_features.forEach(feature => {
        report += `- ${feature}\n`;
      });
      report += '\n';
      
      report += 'Competitive Advantages:\n';
      product.competitive_advantage.forEach(advantage => {
        report += `- ${advantage}\n`;
      });
      report += '\n';
      
      report += 'Optimization Tips:\n';
      product.optimization_tips.forEach(tip => {
        report += `- ${tip}\n`;
      });
      report += '\n---\n\n';
    }
  }
  
  // Create and download the report
  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DO-Product-Intelligence-Report-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}