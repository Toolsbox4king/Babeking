import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Zap, Users, TrendingUp, CheckCircle, ArrowRight, Play, Package, Sparkles, Target, X, BarChart3, Settings, Bell, ExternalLink, Plus, FileText, Palette, Database, Calendar, Mail, MessageSquare, DollarSign, Activity } from 'lucide-react';
import './App.css';

// Landing Page Component
function LandingPage({ onSignIn, onWatchDemo }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-purple-600 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">SaaS Bundle Hub</span>
            </div>
            <button 
              onClick={onSignIn}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-1" />
                Launch Your Business Today
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Free SaaS Tools That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Scale Your Business
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Get access to $200+ worth of premium SaaS tools for free. No credit card required, 
                no hidden fees. Start building your dream business with our curated bundles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onSignIn}
                  className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <button 
                  onClick={onWatchDemo}
                  className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Setup in 5 minutes
                </div>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">SaaS Dashboard</h3>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">$12,432</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">2,431</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Notion</span>
                    <div className="w-16 h-2 bg-purple-200 rounded-full">
                      <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Canva</span>
                    <div className="w-16 h-2 bg-blue-200 rounded-full">
                      <div className="w-10 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Supabase</span>
                    <div className="w-16 h-2 bg-green-200 rounded-full">
                      <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-sm sm:text-base text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">$2M+</div>
              <div className="text-sm sm:text-base text-gray-600">Value Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600">Free Tools</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SaaS Bundle Hub?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We've curated the best free SaaS tools so you can focus on growing your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">100% Free to Start</h3>
              <p className="text-gray-600">
                Access premium SaaS tools without any upfront costs or hidden fees
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Smart workflows that run on autopilot, saving you hours every week
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Curated for Success</h3>
              <p className="text-gray-600">
                Hand-picked tools that work together seamlessly for maximum productivity
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join thousands of entrepreneurs sharing tips and success stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8">
            Join thousands of entrepreneurs using our free SaaS bundles to scale their businesses.
          </p>
          <button 
            onClick={onSignIn}
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Bundle
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <Zap className="h-6 w-6 text-purple-400 mr-2" />
              <span className="text-lg sm:text-xl font-bold">SaaS Bundle Hub</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-right">
              © 2024 SaaS Bundle Hub. Empowering entrepreneurs worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Login Component
function LoginPage({ onDemoLogin, onBack }) {
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoLogin = async () => {
    setIsLoading(true);
    setLoginMessage('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoginMessage('✅ Demo login successful! Redirecting to dashboard...');
      
      setTimeout(() => {
        onDemoLogin();
      }, 1000);
    } catch (error) {
      setLoginMessage('❌ Demo login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-purple-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">SaaS Bundle Hub</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
            Login
          </button>

          <button 
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Demo Login'}
          </button>

          {loginMessage && (
            <div className="mt-4 p-3 rounded-lg bg-gray-50 text-center text-sm">
              {loginMessage}
            </div>
          )}

          <div className="text-center">
            <button 
              onClick={onBack}
              className="text-purple-600 hover:text-purple-700 text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Dashboard Component
function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [tools, setTools] = useState([
    { id: 1, name: 'Notion', status: 'Active', usage: 85, icon: FileText, color: 'purple', url: 'https://notion.so' },
    { id: 2, name: 'Canva', status: 'Active', usage: 72, icon: Palette, color: 'blue', url: 'https://canva.com' },
    { id: 3, name: 'Supabase', status: 'Active', usage: 91, icon: Database, color: 'green', url: 'https://supabase.com' },
    { id: 4, name: 'Calendly', status: 'Available', usage: 0, icon: Calendar, color: 'orange', url: 'https://calendly.com' },
    { id: 5, name: 'Mailchimp', status: 'Available', usage: 0, icon: Mail, color: 'yellow', url: 'https://mailchimp.com' },
    { id: 6, name: 'Slack', status: 'Available', usage: 0, icon: MessageSquare, color: 'indigo', url: 'https://slack.com' }
  ]);

  const [stats, setStats] = useState({
    revenue: 12432,
    customers: 2431,
    activeTools: 3,
    growthRate: 23
  });

  const activateTool = (toolId) => {
    setTools(tools.map(tool => 
      tool.id === toolId 
        ? { ...tool, status: 'Active', usage: Math.floor(Math.random() * 50) + 30 }
        : tool
    ));
    setStats(prev => ({ ...prev, activeTools: prev.activeTools + 1 }));
  };

  const openTool = (url) => {
    window.open(url, '_blank');
  };

  const generateReport = () => {
    alert('📊 Generating comprehensive business report...\n\n✅ Revenue Analytics\n✅ Tool Usage Statistics\n✅ Growth Projections\n✅ Optimization Recommendations\n\nReport will be sent to your email!');
  };

  const automateWorkflow = () => {
    alert('🤖 Automation activated!\n\n✅ Auto-sync Notion with Supabase\n✅ Schedule social media posts via Canva\n✅ Send weekly reports to Mailchimp\n✅ Create calendar events from tasks\n\nWorkflows are now running in the background!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-purple-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">SaaS Bundle Hub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Settings className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              <button 
                onClick={onLogout}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome to Your Dashboard!</h1>
          <p className="text-gray-600">Manage your SaaS tools and track your business growth</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[{
                id: 'overview',
                name: 'Overview',
                icon: BarChart3
              }, {
                id: 'tools',
                name: 'Tools',
                icon: Package
              }, {
                id: 'automation',
                name: 'Automation',
                icon: Zap
              }].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${activeTab === tab.id ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500 opacity-70" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Customers</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.customers.toLocaleString()}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500 opacity-70" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Tools</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeTools}</p>
                  </div>
                  <Package className="h-8 w-8 text-purple-500 opacity-70" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Growth Rate</p>
                    <p className="text-2xl font-bold text-gray-900">+{stats.growthRate}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-red-500 opacity-70" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Activity className="h-5 w-5 text-gray-400 mr-3" />
                  <span>User 'john.doe' activated Notion integration.</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Activity className="h-5 w-5 text-gray-400 mr-3" />
                  <span>New customer 'Jane Smith' signed up.</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Activity className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Generated monthly business report.</span>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button 
                onClick={generateReport}
                className="bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                Generate Business Report
              </button>
              <button 
                onClick={automateWorkflow}
                className="bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Zap className="h-5 w-5 mr-2" />
                Activate Automation
              </button>
            </div>
          </>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <div key={tool.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-${tool.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <tool.icon className={`h-6 w-6 text-${tool.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Status: <span className={`font-medium text-${tool.status === 'Active' ? 'green' : 'gray'}-600`}>{tool.status}</span>
                </p>
                {tool.status === 'Active' && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Usage: {tool.usage}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`bg-${tool.color}-600 h-2.5 rounded-full`} style={{ width: `${tool.usage}%` }}></div>
                    </div>
                  </div>
                )}
                <div className="mt-auto flex space-x-3">
                  {tool.status === 'Available' ? (
                    <button 
                      onClick={() => activateTool(tool.id)}
                      className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Activate
                    </button>
                  ) : (
                    <button 
                      onClick={() => openTool(tool.url)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Open Tool <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Automation Tab */}
        {activeTab === 'automation' && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Automation Workflows</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Notion to Supabase Sync</h3>
                <p className="text-gray-600 mb-3">Automatically sync your Notion databases with Supabase tables for seamless data management.</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  Activate Workflow
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Canva Social Media Scheduler</h3>
                <p className="text-gray-600 mb-3">Design your social media posts in Canva and schedule them directly to your platforms.</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  Activate Workflow
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mailchimp Report Automation</h3>
                <p className="text-gray-600 mb-3">Automate weekly email reports from your analytics to your Mailchimp audience.</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  Activate Workflow
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    // Check if already logged in (e.g., from a previous session)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleBackToHome = () => {
    setShowSignIn(false);
  };

  const handleDemoLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleWatchDemoClick = () => {
    setShowDemoModal(true);
  };

  const handleCloseDemoModal = () => {
    setShowDemoModal(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage onSignIn={handleSignInClick} onWatchDemo={handleWatchDemoClick} />} />
        <Route path="/signin" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onDemoLogin={handleDemoLoginSuccess} onBack={handleBackToHome} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/signin" />} />
      </Routes>

      {showDemoModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={handleCloseDemoModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Watch Our Demo</h2>
            <p className="text-gray-700 mb-4">
              Our demo showcases the interactive dashboard, real-time analytics, and seamless integration of all free SaaS tools. See how you can:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Manage all your SaaS tools from one central dashboard.</li>
              <li>Track revenue, customers, and growth with live data.</li>
              <li>Activate powerful automation workflows.</li>
              <li>Generate comprehensive business reports instantly.</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Ready to experience the full power? Click 
