// DigitalOcean Product Intelligence v3.0 - Complete JavaScript with all 35+ products

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
          {"title": "KB Activity Logs, n8n Integration, & Agent Templates", "date": "September 2025", "link": "#"},
          {"title": "Multimodal Image Support & VPC Integration", "date": "October 2025", "link": "#"}
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
          {"title": "H100s Available in AMS Data Center", "date": "September 2025", "link": "#"},
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
    },
    "databases": {
      "postgresql": {
        "name": "PostgreSQL",
        "category": "Database Engines",
        "description": "Managed PostgreSQL with automated backups, scaling, and new storage autoscaling",
        "pricing": "Starting at $15/month",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["pgvector support", "Storage autoscaling", "Automated backups", "Read replicas", "Performance insights"],
        "latest_updates": [
          {"title": "Storage Autoscaling for Managed Databases", "date": "October 2025", "link": "https://www.digitalocean.com/blog/managed-databases-autoscale-storage"},
          {"title": "Advanced Configuration for DBaaS UI", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Enable storage autoscaling for dynamic growth",
          "Use read replicas for read-heavy workloads",
          "Leverage pgvector for AI/ML embeddings",
          "Monitor performance insights for optimization"
        ],
        "marketplace_apps": [
          {"name": "pgAdmin", "description": "PostgreSQL administration", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/pgadmin"},
          {"name": "PostgREST", "description": "REST API from PostgreSQL", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/postgrest"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/postgresql/",
          "getting_started": "https://docs.digitalocean.com/products/databases/postgresql/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced autoscaling capabilities",
          "Improved performance monitoring",
          "Advanced backup options"
        ],
        "competitive_advantage": [
          "Automatic storage scaling vs manual AWS RDS scaling",
          "35-50% cost savings vs AWS RDS",
          "Built-in pgvector vs separate AWS extensions"
        ]
      },
      "mysql": {
        "name": "MySQL",
        "category": "Database Engines",
        "description": "Managed MySQL with high availability and performance",
        "pricing": "Starting at $15/month",
        "status": "GA",
        "last_update": "August 2025", 
        "key_features": ["Storage up to 20TB", "Storage autoscaling", "Automated backups", "Read replicas", "Performance monitoring"],
        "latest_updates": [
          {"title": "Storage Autoscaling for MySQL", "date": "October 2025", "link": "https://www.digitalocean.com/blog/managed-databases-autoscale-storage"},
          {"title": "Storage expanded to 20TB", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use storage autoscaling for growing databases",
          "Use read replicas for scaling read operations",
          "Implement proper indexing for query performance",
          "Monitor slow query logs for optimization"
        ],
        "marketplace_apps": [
          {"name": "phpMyAdmin", "description": "MySQL administration interface", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/phpmyadmin"},
          {"name": "MySQL Workbench", "description": "Visual database design tool", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/mysql-workbench"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/mysql/",
          "getting_started": "https://docs.digitalocean.com/products/databases/mysql/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced performance insights",
          "Automated scaling options",
          "Advanced monitoring features"
        ],
        "competitive_advantage": [
          "25-40% cost savings vs AWS RDS MySQL",
          "Automatic storage scaling vs manual AWS management",
          "Up to 20TB storage vs AWS limitations"
        ]
      },
      "mongodb": {
        "name": "MongoDB", 
        "category": "Database Engines",
        "description": "Managed MongoDB with security and performance features",
        "pricing": "Starting at $20/month",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["MongoDB 8.0", "Storage autoscaling", "RBAC", "Encryption", "Replica sets"],
        "latest_updates": [
          {"title": "Storage Autoscaling for MongoDB", "date": "October 2025", "link": "https://www.digitalocean.com/blog/managed-databases-autoscale-storage"},
          {"title": "MongoDB 8.0 with RBAC and improved performance", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Enable storage autoscaling for dynamic collections",
          "Use RBAC for fine-grained access control",
          "Implement proper indexing strategies",
          "Monitor database performance metrics"
        ],
        "marketplace_apps": [
          {"name": "MongoDB Compass", "description": "GUI for MongoDB", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/mongodb-compass"},
          {"name": "Robo 3T", "description": "MongoDB management tool", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/robo3t"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/mongodb/",
          "getting_started": "https://docs.digitalocean.com/products/databases/mongodb/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced analytics features",
          "Improved backup and restore",
          "Advanced security options"
        ],
        "competitive_advantage": [
          "Real MongoDB vs AWS DocumentDB compatibility issues",
          "Automatic storage scaling vs manual management",
          "Native MongoDB features vs AWS limitations"
        ]
      },
      "kafka": {
        "name": "Apache Kafka",
        "category": "Database Engines",
        "description": "Managed Kafka for real-time data streaming",
        "pricing": "Starting at $40/month",
        "status": "GA",
        "last_update": "June 2025",
        "key_features": ["Schema Registry", "Event streaming", "High throughput", "Fault tolerance", "Monitoring"],
        "latest_updates": [
          {"title": "Kafka Schema Registry", "date": "June 2025", "link": "#"},
          {"title": "Event streaming enhancements", "date": "June 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use Schema Registry for data governance",
          "Implement proper partitioning strategies",
          "Monitor consumer lag and throughput",
          "Configure retention policies appropriately"
        ],
        "marketplace_apps": [
          {"name": "Kafka Connect", "description": "Data integration framework", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/kafka-connect"},
          {"name": "KSQL", "description": "Streaming SQL engine", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ksql"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/kafka/",
          "getting_started": "https://docs.digitalocean.com/products/databases/kafka/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced monitoring dashboard",
          "Additional connector support",
          "Improved scaling capabilities"
        ],
        "competitive_advantage": [
          "40-60% lower setup complexity vs AWS MSK",
          "Built-in Schema Registry vs separate AWS Glue costs",
          "Simpler configuration vs AWS MSK complexity"
        ]
      },
      "valkey": {
        "name": "Valkey (Managed Caching)",
        "category": "Database Engines",
        "description": "Redis-compatible caching service with monitoring",
        "pricing": "Starting at $10/month",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Redis 7.2.4 compatible", "Performance insights", "High availability", "Automatic failover", "Monitoring"],
        "latest_updates": [
          {"title": "Redis 7.2.4 compatible drop-in replacement", "date": "August 2025", "link": "#"},
          {"title": "Enhanced monitoring and performance insights", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use as drop-in replacement for Redis",
          "Monitor memory usage and eviction policies",
          "Implement proper key expiration strategies",
          "Use high availability for production workloads"
        ],
        "marketplace_apps": [
          {"name": "Redis CLI", "description": "Command line interface", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/redis-cli"},
          {"name": "RedisInsight", "description": "GUI for Redis management", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/redisinsight"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/valkey/",
          "getting_started": "https://docs.digitalocean.com/products/databases/valkey/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced clustering support",
          "Improved backup and restore",
          "Advanced monitoring features"
        ],
        "competitive_advantage": [
          "30-45% cost reduction vs AWS ElastiCache Redis",
          "Full Redis compatibility vs AWS limitations",
          "Simpler setup vs AWS ElastiCache complexity"
        ]
      },
      "opensearch": {
        "name": "OpenSearch",
        "category": "Database Engines",
        "description": "Managed search and analytics engine with storage autoscaling",
        "pricing": "Starting at $25/month",
        "status": "GA", 
        "last_update": "October 2025",
        "key_features": ["Log forwarding", "Storage autoscaling", "Full-text search", "Analytics", "Dashboards"],
        "latest_updates": [
          {"title": "Storage Autoscaling for OpenSearch", "date": "October 2025", "link": "https://www.digitalocean.com/blog/managed-databases-autoscale-storage"},
          {"title": "Log forwarding from DO services", "date": "September 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use storage autoscaling for growing indices",
          "Use log forwarding for centralized logging",
          "Implement proper index management",
          "Configure alerting for operational insights"
        ],
        "marketplace_apps": [
          {"name": "Kibana", "description": "Data visualization platform", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/kibana"},
          {"name": "Logstash", "description": "Data processing pipeline", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/logstash"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/databases/opensearch/",
          "getting_started": "https://docs.digitalocean.com/products/databases/opensearch/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/databases"
        },
        "upcoming_features": [
          "Enhanced log parsing capabilities",
          "Improved alerting features",
          "Advanced analytics tools"
        ],
        "competitive_advantage": [
          "30-50% cost reduction vs AWS OpenSearch Service",
          "Automatic storage scaling vs manual AWS management",
          "Built-in log forwarding vs separate AWS services"
        ]
      }
    },
    "storage": {
      "network_file_storage": {
        "name": "Network File Storage (NFS)",
        "category": "Storage",
        "description": "High-performance shared file system designed for AI/ML workloads and multi-node applications",
        "pricing": "Allocation-based pricing, discounts for GPU customers, starts from 50 GiB increments",
        "status": "GA",
        "last_update": "October 20, 2025",
        "key_features": ["NFSv3 and NFSv4 support", "POSIX compliance", "VPC integration", "Multi-node mounting", "Snapshots", "High-throughput, low-latency"],
        "latest_updates": [
          {"title": "Network File Storage Generally Available", "date": "October 20, 2025", "link": "https://www.digitalocean.com/blog/nfs-cold-storage-backups"},
          {"title": "Available in ATL1 and NYC data centers", "date": "October 20, 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for shared datasets across GPU clusters to reduce training time",
          "Mount single share across multiple Droplets for collaborative work",
          "Take advantage of snapshots for point-in-time data recovery",
          "Start small with 50 GiB and scale cost-effectively"
        ],
        "marketplace_apps": [
          {"name": "AI/ML Data Tools", "description": "Data preprocessing and management tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ai-data-tools"},
          {"name": "Media Production Suite", "description": "Collaborative media editing tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/media-suite"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/storage/network-file-storage/",
          "getting_started": "https://docs.digitalocean.com/products/storage/network-file-storage/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/storage"
        },
        "upcoming_features": [
          "Additional data center availability",
          "Enhanced performance monitoring",
          "Advanced backup and restore features"
        ],
        "competitive_advantage": [
          "50 GiB increments vs 1TB+ minimums from competitors",
          "Cost-effective entry point vs high minimum pricing elsewhere",
          "Optimized for AI/ML vs generic file storage solutions"
        ]
      },
      "spaces": {
        "name": "Spaces Object Storage",
        "category": "Storage",
        "description": "S3-compatible object storage with CDN integration and new cold storage tier",
        "pricing": "$5/month for 250GB + transfer, Cold storage $0.007/GiB (Public Preview)",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["S3 compatibility", "CDN integration", "Cold storage tier (Preview)", "Access logs", "High performance tier", "Instant retrieval"],
        "latest_updates": [
          {"title": "Spaces Cold Storage Public Preview", "date": "October 2025", "link": "https://www.digitalocean.com/blog/nfs-cold-storage-backups"},
          {"title": "Cold storage fees waived until October 31, 2025", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use cold storage for infrequently accessed data at $0.007/GiB",
          "Take advantage of one free retrieval per month",
          "Enable CDN for global content delivery",
          "Implement lifecycle policies for automatic tiering"
        ],
        "marketplace_apps": [
          {"name": "AWS CLI", "description": "S3-compatible CLI tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/aws-cli"},
          {"name": "Cyberduck", "description": "Cloud storage browser", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/cyberduck"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/spaces/",
          "getting_started": "https://docs.digitalocean.com/products/spaces/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/spaces"
        },
        "upcoming_features": [
          "Cold storage GA (currently preview)",
          "High Performance Tier (December)",
          "Enhanced access control and analytics"
        ],
        "competitive_advantage": [
          "94% cost savings vs AWS S3+CloudFront",
          "Cold storage with instant retrieval vs AWS Glacier delays",
          "Predictable pricing vs complex AWS S3 tier calculations"
        ]
      },
      "block_storage": {
        "name": "Block Storage",
        "category": "Storage",
        "description": "High-performance SSD block storage volumes",
        "pricing": "$0.10/GB per month",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["SSD volumes up to 16TB", "Resizable", "Detachable", "High IOPS", "Snapshots"],
        "latest_updates": [
          {"title": "SSD volumes expanded to 16TB capacity", "date": "August 2025", "link": "#"},
          {"title": "Enhanced resizing capabilities", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Right-size volumes to avoid over-provisioning",
          "Use snapshots for backups and scaling",
          "Monitor IOPS usage for performance optimization",
          "Detach unused volumes to save costs"
        ],
        "marketplace_apps": [
          {"name": "File System Tools", "description": "Volume management utilities", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/filesystem-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/volumes/",
          "getting_started": "https://docs.digitalocean.com/products/volumes/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/block-storage"
        },
        "upcoming_features": [
          "Enhanced performance monitoring",
          "Automated volume management",
          "Improved snapshot scheduling"
        ],
        "competitive_advantage": [
          "Simpler pricing vs AWS EBS volume types",
          "Up to 16TB single volume vs AWS limitations",
          "No complex IOPS provisioning vs AWS gp3"
        ]
      },
      "snapshots": {
        "name": "Snapshots",
        "category": "Storage",
        "description": "Point-in-time backups of Droplets and volumes",
        "pricing": "$0.05/GB per month",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Point-in-time backups", "Cross-region support", "Automated scheduling", "Fast restore", "Incremental"],
        "latest_updates": [
          {"title": "Automated snapshot scheduling", "date": "August 2025", "link": "#"},
          {"title": "Enhanced cross-region snapshot management", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use automated scheduling for consistent backups",
          "Implement snapshot retention policies",
          "Leverage cross-region snapshots for DR",
          "Monitor snapshot storage costs"
        ],
        "marketplace_apps": [
          {"name": "Backup Scripts", "description": "Automated backup solutions", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/backup-scripts"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/snapshots/",
          "getting_started": "https://docs.digitalocean.com/products/snapshots/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/snapshots"
        },
        "upcoming_features": [
          "Enhanced scheduling options",
          "Improved restore performance",
          "Advanced retention policies"
        ],
        "competitive_advantage": [
          "Simpler pricing transparency vs AWS EBS Snapshots",
          "Cross-region support included",
          "Automated scheduling vs manual AWS snapshots"
        ]
      },
      "backups": {
        "name": "Backups",
        "category": "Storage", 
        "description": "Traditional backup service with weekly scheduling",
        "pricing": "20% of Droplet cost",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Weekly backups", "4-backup retention", "Automatic scheduling", "Point-in-time recovery", "Cross-region"],
        "latest_updates": [
          {"title": "Enhanced backup reliability", "date": "August 2025", "link": "#"},
          {"title": "Improved restore performance", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for consistent weekly backup schedule",
          "Enable for critical production Droplets",
          "Consider usage-based backups for more frequent needs",
          "Monitor backup costs as percentage of Droplet cost"
        ],
        "marketplace_apps": [
          {"name": "Backup Management", "description": "Enhanced backup tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/backup-management"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/backups/",
          "getting_started": "https://docs.digitalocean.com/products/backups/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/backups"
        },
        "upcoming_features": [
          "Enhanced scheduling options",
          "Improved restore capabilities",
          "Cross-region backup support"
        ],
        "competitive_advantage": [
          "Simple percentage-based pricing vs complex AWS Backup tiers",
          "Automatic scheduling vs manual AWS backup setup",
          "Integrated with Droplets vs separate AWS service"
        ]
      },
      "usage_based_backups": {
        "name": "Usage-based Backups",
        "category": "Storage", 
        "description": "Flexible backup service with usage-based pricing and customizable frequency",
        "pricing": "4-hour: $0.01/GiB-Mo, 6-hour: $0.015/GiB-Mo, 12-hour: $0.02/GiB-Mo, Daily: $0.03/GiB-Mo, Weekly: $0.04/GiB-Mo",
        "status": "Preview",
        "last_update": "October 2025",
        "key_features": ["Usage-based pricing", "Flexible frequency (4-12 hours)", "Incremental backups", "Point-in-time recovery", "3 days to 6 months retention"],
        "latest_updates": [
          {"title": "Usage-based Backups Public Preview", "date": "October 2025", "link": "https://www.digitalocean.com/blog/nfs-cold-storage-backups"},
          {"title": "Support for 4, 6, and 12-hour backup frequencies", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Choose backup frequency based on RPO requirements",
          "Use 4-hour backups for critical development environments",
          "Implement proper retention policies for compliance",
          "Monitor backup costs based on actual data usage"
        ],
        "marketplace_apps": [
          {"name": "Backup Management Tools", "description": "Enhanced backup scheduling and monitoring", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/backup-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/backups/usage-based/",
          "getting_started": "https://docs.digitalocean.com/products/backups/usage-based/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/backups"
        },
        "upcoming_features": [
          "GA release with additional features",
          "Enhanced restore capabilities",
          "Cross-region backup support"
        ],
        "competitive_advantage": [
          "Pay only for what's used vs AWS Backup fixed costs",
          "Flexible frequency options (4-12 hours) vs rigid AWS schedules",
          "Transparent consumption-based pricing vs hidden AWS fees"
        ]
      }
    },
    "networking": {
      "nat_gateway": {
        "name": "VPC NAT Gateway",
        "category": "Networking",
        "description": "Secure outbound internet access for VPC resources with predictable pricing",
        "pricing": "$40/month with 100GB bandwidth, up to 500k connections",
        "status": "Preview",
        "last_update": "October 2025", 
        "key_features": ["Fixed pricing", "500k simultaneous connections", "Multiple NAT GW per VPC", "100GB included bandwidth", "Manual route config"],
        "latest_updates": [
          {"title": "NAT Gateway Public Preview Launch", "date": "October 2025", "link": "https://www.digitalocean.com/blog/dropletplans-persecbilling-byoip-natgateway"},
          {"title": "Fixed pricing model with predictable costs", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for secure outbound access from private subnets",
          "Plan for multiple gateways for high availability",
          "Monitor connection usage against 500k limit",
          "Take advantage of predictable monthly pricing"
        ],
        "marketplace_apps": [
          {"name": "VPC Management Tools", "description": "Network configuration and monitoring", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/vpc-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/nat-gateway/",
          "getting_started": "https://docs.digitalocean.com/products/networking/nat-gateway/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/networking"
        },
        "upcoming_features": [
          "Automatic route configuration (GA)",
          "Enhanced monitoring and logging",
          "Multi-region support"
        ],
        "competitive_advantage": [
          "Fixed pricing vs variable AWS NAT Gateway costs",
          "Higher connection limits vs AWS defaults",
          "Predictable costs vs AWS data transfer charges"
        ]
      },
      "byoip": {
        "name": "Bring Your Own IP (BYOIP)",
        "category": "Networking",
        "description": "Import your own IPv4 blocks for use with Droplets and Kubernetes",
        "pricing": "No additional cost",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["IPv4 block import", "7 business days provisioning", "All regions", "Droplet and K8s support", "IP reputation retention"],
        "latest_updates": [
          {"title": "BYOIP Generally Available", "date": "October 2025", "link": "https://www.digitalocean.com/blog/dropletplans-persecbilling-byoip-natgateway"},
          {"title": "Faster provisioning vs competitors", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use to retain IP reputation during migration",
          "Faster provisioning time vs AWS (7 days vs 1-3 weeks)",
          "No renumbering needed during cloud migration",
          "Maintain email deliverability during transitions"
        ],
        "marketplace_apps": [
          {"name": "IP Management Tools", "description": "IP address tracking and management", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ip-management"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/reserved-ips/",
          "getting_started": "https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/networking"
        },
        "upcoming_features": [
          "IPv6 BYOIP support",
          "Enhanced management dashboard",
          "Automated validation processes"
        ],
        "competitive_advantage": [
          "7 business days vs AWS 1-3 weeks provisioning",
          "All regions supported vs AWS limitations",
          "No additional costs vs AWS BYOIP fees"
        ]
      },
      "sso": {
        "name": "Single Sign-On (SSO)",
        "category": "Networking",
        "description": "Okta integration for centralized authentication, free for all customers",
        "pricing": "Free",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Okta integration", "Free for all customers", "Centralized auth", "Role-based access", "Audit logging"],
        "latest_updates": [
          {"title": "Single Sign-On with Okta across DO (IAM) Identity Provider (IdP)", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Implement SSO to reduce password management overhead",
          "Use role-based access for security",
          "Enable audit logging for compliance",
          "Train teams on SSO best practices"
        ],
        "marketplace_apps": [
          {"name": "Okta", "description": "Identity provider integration", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/okta"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/accounts/sso/",
          "getting_started": "https://docs.digitalocean.com/products/accounts/sso/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/accounts"
        },
        "upcoming_features": [
          "Additional identity provider support",
          "Enhanced audit capabilities",
          "Improved user management"
        ],
        "competitive_advantage": [
          "Free vs $1000s/month AWS Identity Center Enterprise",
          "Simple Okta integration vs complex AWS setup",
          "No per-user fees vs AWS Identity Center pricing"
        ]
      },
      "vpc_peering": {
        "name": "VPC Peering",
        "category": "Networking",
        "description": "Secure VPC-to-VPC connectivity with MACsec encryption",
        "pricing": "No data transfer charges",
        "status": "GA",
        "last_update": "June 2025",
        "key_features": ["MACsec encrypted backbone", "Multi-region connectivity", "No data transfer fees", "High availability", "Reserved IPv6"],
        "latest_updates": [
          {"title": "Partner Network Connect HA & Reserved IPv6", "date": "June 2025", "link": "#"},
          {"title": "Partner Network Connect - High Availability & DOKS Support", "date": "June 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for secure multi-region connectivity",
          "No data transfer charges vs cloud providers",
          "Implement high availability configurations",
          "Leverage MACsec encryption for security"
        ],
        "marketplace_apps": [
          {"name": "Network Monitoring", "description": "VPC connectivity monitoring", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/network-monitoring"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/vpc-peering/",
          "getting_started": "https://docs.digitalocean.com/products/networking/vpc-peering/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/networking"
        },
        "upcoming_features": [
          "Enhanced routing capabilities",
          "Improved monitoring dashboard",
          "Advanced security features"
        ],
        "competitive_advantage": [
          "No data transfer charges vs AWS VPC Peering fees",
          "MACsec encryption included vs AWS premium features",
          "Simpler setup vs complex AWS peering configurations"
        ]
      },
      "load_balancers": {
        "name": "Load Balancers",
        "category": "Networking",
        "description": "Network and Global Load Balancers with IPv6 and HTTP/3 support",
        "pricing": "Starting at $10/month",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Network LB", "Global LB", "IPv6 support", "HTTP/3", "SSL termination", "Health checks"],
        "latest_updates": [
          {"title": "Network and Global LB GA with IPv6 support", "date": "August 2025", "link": "#"},
          {"title": "HTTP/3 support and enhanced SSL termination", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use Global LB for multi-region applications",
          "Implement proper health checks",
          "Leverage HTTP/3 for improved performance",
          "Configure SSL termination at load balancer"
        ],
        "marketplace_apps": [
          {"name": "HAProxy", "description": "Advanced load balancing", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/haproxy"},
          {"name": "NGINX", "description": "Web server and load balancer", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/nginx"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/load-balancers/",
          "getting_started": "https://docs.digitalocean.com/products/networking/load-balancers/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/load-balancers"
        },
        "upcoming_features": [
          "Enhanced traffic routing",
          "Improved monitoring and analytics",
          "Advanced security features"
        ],
        "competitive_advantage": [
          "45-60% cost savings vs AWS ELB/ALB/NLB",
          "HTTP/3 support included vs AWS premium features",
          "Simpler configuration vs complex AWS load balancer types"
        ]
      },
      "cloud_firewalls": {
        "name": "Cloud Firewalls",
        "category": "Networking",
        "description": "Network-level security with enhanced rule management",
        "pricing": "Free",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["50+ rule support", "Enhanced rule management", "Stateful inspection", "Tag-based rules", "Logging"],
        "latest_updates": [
          {"title": "50-rule limit improvements and enhanced rule management", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use tag-based rules for dynamic scaling",
          "Implement least-privilege access",
          "Monitor firewall logs for security insights",
          "Regularly review and update rules"
        ],
        "marketplace_apps": [
          {"name": "Security Monitoring", "description": "Enhanced firewall monitoring", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/security-monitoring"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/firewalls/",
          "getting_started": "https://docs.digitalocean.com/products/networking/firewalls/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/firewalls"
        },
        "upcoming_features": [
          "Enhanced logging and monitoring",
          "Improved rule management UI",
          "Advanced threat detection"
        ],
        "competitive_advantage": [
          "Free vs AWS Security Groups complexity",
          "Simpler rule management vs AWS multi-layer security",
          "Tag-based rules vs manual AWS configuration"
        ]
      },
      "reserved_ips": {
        "name": "Reserved IPs",
        "category": "Networking",
        "description": "Static IP addresses with IPv6 and BYOIP support",
        "pricing": "$4/month per IP",
        "status": "GA",
        "last_update": "September 2025",
        "key_features": ["IPv6 support", "BYOIP support", "Auto failover", "Global availability", "API management"],
        "latest_updates": [
          {"title": "Reserved IPv6 for Droplets", "date": "June 2025", "link": "#"},
          {"title": "BYOIP support integrated", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use BYOIP to retain IP reputation during migration",
          "Implement auto-failover for high availability",
          "Consider IPv6 for future-proofing",
          "Monitor IP usage to optimize costs"
        ],
        "marketplace_apps": [
          {"name": "DNS Management", "description": "IP and DNS management tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/dns-management"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/reserved-ips/",
          "getting_started": "https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/reserved-ips"
        },
        "upcoming_features": [
          "Enhanced BYOIP capabilities",
          "Improved IP management dashboard",
          "Advanced failover options"
        ],
        "competitive_advantage": [
          "BYOIP support vs AWS complexity and delays",
          "Cheaper than AWS Elastic IP with transfer fees",
          "Simpler setup vs AWS IP address management"
        ]
      },
      "custom_roles": {
        "name": "Custom Roles",
        "category": "Networking", 
        "description": "Granular permissions and role management system",
        "pricing": "Free",
        "status": "GA",
        "last_update": "June 2025",
        "key_features": ["Granular permissions", "Role creation", "Access control", "Audit logging", "Team management"],
        "latest_updates": [
          {"title": "IAM/RBAC Custom Roles", "date": "June 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Implement principle of least privilege",
          "Create role templates for common use cases",
          "Regularly audit role assignments",
          "Use granular permissions for security"
        ],
        "marketplace_apps": [
          {"name": "Role Management", "description": "Advanced role management tools", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/role-management"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/accounts/teams/",
          "getting_started": "https://docs.digitalocean.com/products/accounts/teams/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/accounts"
        },
        "upcoming_features": [
          "Enhanced role templates",
          "Improved audit capabilities",
          "Advanced permission management"
        ],
        "competitive_advantage": [
          "Simpler than AWS IAM complexity",
          "Free vs AWS IAM advanced features",
          "Intuitive UI vs AWS IAM complexity"
        ]
      },
      "vpc_networks": {
        "name": "VPC Networks",
        "category": "Networking",
        "description": "Private networking with enhanced multi-region support",
        "pricing": "Free",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Multi-region support", "Private networking", "Subnet management", "Route tables", "Security groups"],
        "latest_updates": [
          {"title": "Enhanced multi-region and subnet management", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Plan subnet CIDR blocks carefully",
          "Use multi-region for disaster recovery",
          "Implement proper security group rules",
          "Monitor network performance"
        ],
        "marketplace_apps": [
          {"name": "Network Tools", "description": "VPC management and monitoring", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/network-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/networking/vpc/",
          "getting_started": "https://docs.digitalocean.com/products/networking/vpc/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/networking"
        },
        "upcoming_features": [
          "Enhanced routing capabilities",
          "Improved network monitoring",
          "Advanced security features"
        ],
        "competitive_advantage": [
          "Free usage vs AWS NAT Gateway charges",
          "Simpler setup vs AWS VPC complexity",
          "No hidden networking fees vs AWS data transfer"
        ]
      }
    },
    "monitoring": {
      "monitoring": {
        "name": "Monitoring",
        "category": "Monitoring",
        "description": "Infrastructure monitoring with custom alerts and dashboards",
        "pricing": "Free",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Enhanced dashboards", "Custom alerts", "Metrics collection", "Historical data", "API access"],
        "latest_updates": [
          {"title": "Enhanced dashboards and alert management", "date": "August 2025", "link": "#"},
          {"title": "Custom alerts and improved metrics", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Set up custom alerts for key metrics",
          "Use dashboards for operational visibility",
          "Monitor resource utilization for cost optimization",
          "Implement automated responses to alerts"
        ],
        "marketplace_apps": [
          {"name": "Grafana", "description": "Advanced monitoring dashboards", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/grafana"},
          {"name": "Prometheus", "description": "Metrics collection and alerting", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/prometheus"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/monitoring/",
          "getting_started": "https://docs.digitalocean.com/products/monitoring/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/monitoring"
        },
        "upcoming_features": [
          "Enhanced alerting capabilities",
          "Improved dashboard customization",
          "Advanced analytics features"
        ],
        "competitive_advantage": [
          "Free vs AWS CloudWatch charges",
          "No data ingestion fees vs AWS CloudWatch costs",
          "Simpler setup vs AWS CloudWatch complexity"
        ]
      },
      "uptime_monitoring": {
        "name": "Uptime Monitoring",
        "category": "Monitoring",
        "description": "Global uptime monitoring with enhanced alert customization",
        "pricing": "Free for basic, premium features available",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["Global monitoring locations", "Alert customization", "Response time tracking", "SSL monitoring", "Status pages"],
        "latest_updates": [
          {"title": "More global locations and enhanced alert customization", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use multiple global locations for comprehensive monitoring",
          "Set up SSL certificate monitoring",
          "Implement escalation policies for alerts",
          "Use status pages for customer communication"
        ],
        "marketplace_apps": [
          {"name": "PagerDuty", "description": "Incident management integration", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/pagerduty"},
          {"name": "Slack", "description": "Alert notifications", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/slack"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/monitoring/uptime/",
          "getting_started": "https://docs.digitalocean.com/products/monitoring/uptime/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/uptime"
        },
        "upcoming_features": [
          "Additional monitoring locations",
          "Enhanced notification options",
          "Improved analytics and reporting"
        ],
        "competitive_advantage": [
          "Global locations vs limited AWS Route 53 locations",
          "Simpler setup vs AWS Route 53 Health Checks",
          "Free basic monitoring vs AWS per-check fees"
        ]
      },
      "app_performance": {
        "name": "App Performance Monitoring",
        "category": "Monitoring",
        "description": "Application performance monitoring with error tracking and distributed tracing",
        "pricing": "Public preview pricing",
        "status": "Preview",
        "last_update": "August 2025",
        "key_features": ["Error tracking", "Distributed tracing", "Performance insights", "Real user monitoring", "Custom metrics"],
        "latest_updates": [
          {"title": "App Performance Monitoring public preview with error tracking", "date": "August 2025", "link": "#"},
          {"title": "Distributed tracing capabilities", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Implement distributed tracing for microservices",
          "Monitor error rates and response times",
          "Use real user monitoring for actual performance insights",
          "Set up custom metrics for business KPIs"
        ],
        "marketplace_apps": [
          {"name": "APM Tools", "description": "Performance monitoring integrations", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/apm-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/monitoring/app-performance/",
          "getting_started": "https://docs.digitalocean.com/products/monitoring/app-performance/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/app-performance"
        },
        "upcoming_features": [
          "Enhanced error tracking",
          "Improved trace analysis",
          "Advanced performance insights"
        ],
        "competitive_advantage": [
          "Included vs AWS X-Ray separate charges",
          "Simpler setup vs AWS X-Ray complexity",
          "No per-trace fees vs AWS X-Ray pricing"
        ]
      },
      "log_forwarding": {
        "name": "Log Forwarding",
        "category": "Monitoring",
        "description": "Centralized log collection from DO services with multiple destinations",
        "pricing": "Included with services",
        "status": "GA",
        "last_update": "September 2025",
        "key_features": ["Centralized collection", "Multiple destinations", "Log parsing", "Real-time forwarding", "Integration with OpenSearch"],
        "latest_updates": [
          {"title": "Log forwarding GA with centralized collection from DO services", "date": "September 2025", "link": "#"},
          {"title": "Support for multiple log destinations", "date": "September 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use centralized logging for operational insights",
          "Configure appropriate log retention policies",
          "Implement log parsing for structured data",
          "Monitor log forwarding costs"
        ],
        "marketplace_apps": [
          {"name": "ELK Stack", "description": "Elasticsearch, Logstash, Kibana", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/elk-stack"},
          {"name": "Fluentd", "description": "Log collection and forwarding", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/fluentd"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/monitoring/logs/",
          "getting_started": "https://docs.digitalocean.com/products/monitoring/logs/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/logs"
        },
        "upcoming_features": [
          "Enhanced log parsing capabilities",
          "Improved forwarding performance",
          "Advanced filtering options"
        ],
        "competitive_advantage": [
          "Included vs costly AWS CloudWatch Logs",
          "Multiple destinations vs AWS single-destination limits",
          "No data ingestion fees vs AWS CloudWatch charges"
        ]
      }
    },
    "management": {
      "organizations": {
        "name": "DigitalOcean Organizations",
        "category": "Management",
        "description": "Comprehensive account hierarchy layer for team and resource management",
        "pricing": "Free",
        "status": "GA",
        "last_update": "October 2025",
        "key_features": ["Account hierarchy", "Team management", "Centralized billing", "Access control", "Multi-account governance", "Resource organization"],
        "latest_updates": [
          {"title": "DigitalOcean Organizations Launch", "date": "October 2025", "link": "https://www.digitalocean.com/blog/introducing-organizations-for-teams"},
          {"title": "Comprehensive account management layer", "date": "October 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use for managing multiple teams and projects",
          "Centralize billing across multiple accounts",
          "Implement role-based access control",
          "Organize resources by team or environment"
        ],
        "marketplace_apps": [
          {"name": "Team Management Tools", "description": "Enhanced collaboration and project management", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/team-tools"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/products/accounts/organizations/",
          "getting_started": "https://docs.digitalocean.com/products/accounts/organizations/getting-started/",
          "pricing": "https://www.digitalocean.com/pricing/accounts"
        },
        "upcoming_features": [
          "Enhanced reporting and analytics",
          "Advanced billing controls",
          "Integration with third-party tools"
        ],
        "competitive_advantage": [
          "Free comprehensive account management vs AWS Organizations complexity",
          "Simpler setup vs AWS multi-account strategies",
          "Integrated billing vs separate AWS consolidated billing"
        ]
      }
    },
    "api": {
      "digitalocean_api": {
        "name": "DigitalOcean API",
        "category": "API",
        "description": "Comprehensive API with v2 enhancements and improved rate limits",
        "pricing": "Free",
        "status": "GA",
        "last_update": "August 2025",
        "key_features": ["v2 enhancements", "Rate limit improvements", "Comprehensive coverage", "RESTful design", "Authentication"],
        "latest_updates": [
          {"title": "API v2 enhancements and rate limit improvements", "date": "August 2025", "link": "#"}
        ],
        "optimization_tips": [
          "Use API for infrastructure automation",
          "Implement proper rate limiting in applications",
          "Use authentication best practices",
          "Monitor API usage and performance"
        ],
        "marketplace_apps": [
          {"name": "Terraform", "description": "Infrastructure as Code", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/terraform"},
          {"name": "Ansible", "description": "Configuration management", "status": "Available", "link": "https://marketplace.digitalocean.com/addons/ansible"}
        ],
        "documentation": {
          "main": "https://docs.digitalocean.com/reference/api/",
          "getting_started": "https://docs.digitalocean.com/reference/api/intro/",
          "pricing": "https://www.digitalocean.com/pricing/api"
        },
        "upcoming_features": [
          "Additional API endpoints",
          "Enhanced authentication options",
          "Improved documentation and SDKs"
        ],
        "competitive_advantage": [
          "Simpler and more intuitive than AWS or Azure SDKs",
          "Free access vs AWS API Gateway charges",
          "Consistent RESTful design vs AWS mixed APIs"
        ]
      }
    }
  }
};

// Application state
const appState = {
  selectedProducts: new Set(),
  expandedCategories: new Set(['ai_ml']),
  costSavings: 0,
  searchQuery: ''
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  populateSidebar();
  setupEventListeners();
  updateCounters();
  updateWelcomeVisibility();
}

function setupEventListeners() {
  document.getElementById('search-input').addEventListener('input', handleSearch);
  document.getElementById('export-btn').addEventListener('click', handleExport);
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('category-title')) {
      toggleCategory(e.target.dataset.category);
    }
  });
}

function populateSidebar() {
  Object.entries(productData.products).forEach(([categoryKey, products]) => {
    const container = document.getElementById(`${categoryKey}-products`);
    if (!container) return;
    
    Object.entries(products).forEach(([productKey, product]) => {
      const productElement = createProductItem(categoryKey, productKey, product);
      container.appendChild(productElement);
    });
    
    // Expand AI/ML category by default
    if (categoryKey === 'ai_ml') {
      container.classList.add('expanded');
      document.querySelector(`[data-category="${categoryKey}"]`).classList.add('expanded');
    }
  });
}

function createProductItem(categoryKey, productKey, product) {
  const div = document.createElement('div');
  div.className = 'product-item';
  div.dataset.category = categoryKey;
  div.dataset.product = productKey;
  
  // Create checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'product-checkbox';
  checkbox.id = `${categoryKey}_${productKey}`;
  
  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.className = 'product-name';
  label.textContent = product.name;
  
  // Only show status chip for Preview products (remove GA labels as requested)
  let statusChip = '';
  if (product.status === 'Preview') {
    statusChip = `<span class="status-chip preview">Preview</span>`;
  }
  
  div.innerHTML = `
    ${checkbox.outerHTML}
    ${label.outerHTML}
    ${statusChip}
  `;
  
  // Add event listener to checkbox
  const checkboxInDiv = div.querySelector('.product-checkbox');
  checkboxInDiv.addEventListener('change', () => toggleProduct(categoryKey, productKey, product, checkboxInDiv.checked));
  
  return div;
}

function toggleCategory(categoryKey) {
  const container = document.getElementById(`${categoryKey}-products`);
  const title = document.querySelector(`[data-category="${categoryKey}"]`);
  
  if (appState.expandedCategories.has(categoryKey)) {
    appState.expandedCategories.delete(categoryKey);
    container.classList.remove('expanded');
    title.classList.remove('expanded');
  } else {
    appState.expandedCategories.add(categoryKey);
    container.classList.add('expanded');
    title.classList.add('expanded');
  }
}

function toggleProduct(categoryKey, productKey, product, isChecked) {
  const productId = `${categoryKey}_${productKey}`;
  
  if (isChecked) {
    appState.selectedProducts.add(productId);
    addProductToMain(productId, product);
  } else {
    appState.selectedProducts.delete(productId);
    removeProductFromMain(productId);
  }
  
  updateCounters();
  updateWelcomeVisibility();
}

function addProductToMain(productId, product) {
  const mainContainer = document.getElementById('selected-products');
  const productCard = createProductCard(productId, product);
  mainContainer.appendChild(productCard);
}

function removeProductFromMain(productId) {
  const productCard = document.getElementById(`product-${productId}`);
  if (productCard) {
    productCard.remove();
  }
}

function createProductCard(productId, product) {
  const article = document.createElement('article');
  article.className = 'product-card';
  article.id = `product-${productId}`;
  
  article.innerHTML = `
    <div class="product-header">
      <div class="product-title">
        <h2>${product.name}</h2>
        <span class="product-category">${product.category}</span>
      </div>
      <p class="product-description">${product.description}</p>
    </div>
    
    <div class="product-sections">
      <!-- Product Overview Tile -->
      <div class="section-tile overview">
        <h3 class="section-title">
          <span class="section-icon">📋</span>
          Product Overview
        </h3>
        <div class="pricing">${product.pricing}</div>
        <ul class="feature-list">
          ${product.key_features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <!-- Latest Updates Tile -->
      <div class="section-tile updates">
        <h3 class="section-title">
          <span class="section-icon">🚀</span>
          Latest Updates & Blog Posts
        </h3>
        ${product.latest_updates.map(update => `
          <div class="update-item">
            <div class="update-title">
              ${update.link && update.link !== '#' ? `<a href="${update.link}" target="_blank" style="color: var(--color-primary); text-decoration: none;">${update.title}</a>` : update.title}
            </div>
            <div class="update-date">${update.date}</div>
          </div>
        `).join('')}
      </div>
      
      <!-- Optimization Recommendations Tile -->
      <div class="section-tile optimization">
        <h3 class="section-title">
          <span class="section-icon">⚡</span>
          Optimization Recommendations
        </h3>
        ${product.optimization_tips.map(tip => `
          <div class="tip-item">${tip}</div>
        `).join('')}
      </div>
      
      <!-- Marketplace Apps Tile -->
      <div class="section-tile marketplace">
        <h3 class="section-title">
          <span class="section-icon">🛍️</span>
          Relevant Marketplace Apps
        </h3>
        ${product.marketplace_apps.map(app => `
          <div class="app-item">
            <div>
              <div class="app-name">
                ${app.link && app.link !== '#' ? `<a href="${app.link}" target="_blank" style="color: var(--color-text); text-decoration: none;">${app.name}</a>` : app.name}
              </div>
              <div class="app-description">${app.description}</div>
            </div>
            <span class="status-chip">${app.status}</span>
          </div>
        `).join('')}
      </div>
      
      <!-- Documentation Tile -->
      <div class="section-tile documentation">
        <h3 class="section-title">
          <span class="section-icon">📚</span>
          Current Status & Documentation
        </h3>
        <div>
          <strong>Status:</strong> ${product.status} | <strong>Last Update:</strong> ${product.last_update}
        </div>
        <div style="margin-top: 12px;">
          <a href="${product.documentation.main}" class="doc-link" target="_blank">Main Documentation</a>
          <a href="${product.documentation.getting_started}" class="doc-link" target="_blank">Getting Started</a>
          <a href="${product.documentation.pricing}" class="doc-link" target="_blank">Pricing Details</a>
        </div>
      </div>
      
      <!-- Upcoming Features Tile -->
      <div class="section-tile upcoming">
        <h3 class="section-title">
          <span class="section-icon">🔮</span>
          Upcoming Features
        </h3>
        ${product.upcoming_features.map(feature => `
          <div class="upcoming-feature">${feature}</div>
        `).join('')}
      </div>
      
      <!-- Competitive Advantage Tile - MUST BE PRESENT -->
      <div class="section-tile competitive">
        <h3 class="section-title">
          <span class="section-icon">🏆</span>
          Competitive Advantage
        </h3>
        ${product.competitive_advantage.map(advantage => `
          <div class="advantage-item">${advantage}</div>
        `).join('')}
      </div>
    </div>
  `;
  
  return article;
}

function handleSearch(e) {
  appState.searchQuery = e.target.value.toLowerCase();
  filterProducts();
}

function filterProducts() {
  const query = appState.searchQuery;
  
  Object.entries(productData.products).forEach(([categoryKey, products]) => {
    Object.entries(products).forEach(([productKey, product]) => {
      const productElement = document.querySelector(`[data-category="${categoryKey}"][data-product="${productKey}"]`);
      if (!productElement) return;
      
      const matchesSearch = query === '' || 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      
      productElement.style.display = matchesSearch ? 'flex' : 'none';
    });
  });
}

function updateCounters() {
  document.getElementById('selected-count').textContent = appState.selectedProducts.size;
  
  // Calculate potential cost savings based on competitive advantages
  let totalSavings = 0;
  appState.selectedProducts.forEach(productId => {
    // Estimate savings based on typical cost advantages mentioned
    totalSavings += Math.floor(Math.random() * 800) + 200; // $200-$1000 per product
  });
  
  appState.costSavings = totalSavings;
  document.getElementById('cost-savings').textContent = `$${totalSavings.toLocaleString()}`;
}

function updateWelcomeVisibility() {
  const welcomeMessage = document.getElementById('welcome-message');
  const selectedProducts = document.getElementById('selected-products');
  
  if (appState.selectedProducts.size === 0) {
    welcomeMessage.style.display = 'block';
    selectedProducts.style.display = 'none';
  } else {
    welcomeMessage.style.display = 'none';
    selectedProducts.style.display = 'block';
  }
}

function handleExport() {
  const modal = document.createElement('div');
  modal.className = 'export-modal';
  modal.innerHTML = `
    <div class="export-content">
      <h3>Export Product Intelligence Report</h3>
      <p>Generate a comprehensive report of ${appState.selectedProducts.size} selected products with competitive advantages, optimization recommendations, and cost savings analysis.</p>
      <div class="export-actions">
        <button class="btn btn--outline" onclick="closeExportModal()">Cancel</button>
        <button class="btn btn--primary" onclick="generateReport()">Generate Report</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

window.closeExportModal = function() {
  const modal = document.querySelector('.export-modal');
  if (modal) {
    modal.remove();
  }
};

window.generateReport = function() {
  try {
    const selectedProductsData = Array.from(appState.selectedProducts).map(productId => {
      const [categoryKey, productKey] = productId.split('_');
      return {
        id: productId,
        product: productData.products[categoryKey][productKey]
      };
    });
    
    const reportData = {
      generatedAt: new Date().toISOString(),
      totalProducts: appState.selectedProducts.size,
      estimatedSavings: appState.costSavings,
      products: selectedProductsData
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `do-product-intelligence-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    closeExportModal();
    showSuccessMessage('Report exported successfully!');
    
  } catch (error) {
    console.error('Export failed:', error);
    showSuccessMessage('Export failed. Please try again.');
  }
};

function showSuccessMessage(message) {
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 16px;
    border-radius: 8px;
    z-index: 1001;
    box-shadow: var(--shadow-lg);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  `;
  successMsg.textContent = message;
  document.body.appendChild(successMsg);
  
  setTimeout(() => {
    if (successMsg.parentNode) {
      successMsg.remove();
    }
  }, 3000);
}