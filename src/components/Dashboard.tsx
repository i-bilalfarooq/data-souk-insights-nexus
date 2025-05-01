
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, AlertCircle, BarChart3 } from 'lucide-react';

// Import recharts components
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';

const Dashboard = () => {
  // Sample data for dashboard widgets
  const lineChartData = [
    { month: 'Jan', price: 1000, volume: 400 },
    { month: 'Feb', price: 1200, volume: 300 },
    { month: 'Mar', price: 1100, volume: 500 },
    { month: 'Apr', price: 1700, volume: 700 },
    { month: 'May', price: 1400, volume: 600 },
    { month: 'Jun', price: 1600, volume: 800 },
  ];

  const barChartData = [
    { sector: 'Real Estate', value: 35 },
    { sector: 'Energy', value: 28 },
    { sector: 'Retail', value: 42 },
    { sector: 'Financial', value: 38 },
    { sector: 'Technology', value: 25 },
  ];

  const areaChartData = [
    { date: '2023-01', dubai: 120, abudhabi: 110, sharjah: 80 },
    { date: '2023-02', dubai: 132, abudhabi: 115, sharjah: 85 },
    { date: '2023-03', dubai: 141, abudhabi: 124, sharjah: 91 },
    { date: '2023-04', dubai: 154, abudhabi: 130, sharjah: 102 },
    { date: '2023-05', dubai: 162, abudhabi: 137, sharjah: 110 },
    { date: '2023-06', dubai: 180, abudhabi: 142, sharjah: 118 },
  ];

  const pieChartData = [
    { name: 'Supply Chain', value: 35 },
    { name: 'Market Signals', value: 30 },
    { name: 'Price Data', value: 25 },
    { name: 'Other', value: 10 },
  ];

  const COLORS = ['#1A5F7A', '#159895', '#E9B824', '#002B5B'];

  const commodityData = [
    { commodity: 'Steel', change: 2.3, price: '2,450 AED', status: 'up' },
    { commodity: 'Aluminum', change: -1.4, price: '1,890 AED', status: 'down' },
    { commodity: 'Cement', change: 0.8, price: '950 AED', status: 'up' },
    { commodity: 'Copper', change: -0.5, price: '3,200 AED', status: 'down' },
  ];

  const alertData = [
    { title: 'Supply Chain Disruption', description: 'Potential disruption in steel imports from China expected next month.', severity: 'high' },
    { title: 'Price Volatility', description: 'Unusual price movements detected in construction materials across Dubai.', severity: 'medium' },
    { title: 'Demand Spike', description: 'Significant increase in cement demand in Abu Dhabi over last 2 weeks.', severity: 'low' },
  ];

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interactive <span className="gradient-text">Dashboard</span> Preview
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience how DataSouk transforms economic data into actionable insights through
            our comprehensive analytics platform.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="market" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm">
                <TabsTrigger value="market">Market Overview</TabsTrigger>
                <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
                <TabsTrigger value="signals">Economic Signals</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="market" className="mt-0">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Metrics Cards */}
                  {[
                    { title: "Market Index", value: "124.8", change: "+5.2%", trend: "up" },
                    { title: "Economic Confidence", value: "72/100", change: "+3 pts", trend: "up" },
                    { title: "Supply Chain Health", value: "86%", change: "-2%", trend: "down" }
                  ].map((metric, idx) => (
                    <Card key={idx}>
                      <CardContent className="py-5">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">{metric.title}</p>
                            <h3 className="text-2xl font-bold">{metric.value}</h3>
                          </div>
                          <div className={`flex items-center ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {metric.trend === 'up' ? 
                              <TrendingUp className="h-5 w-5 mr-1" /> : 
                              <TrendingDown className="h-5 w-5 mr-1" />
                            }
                            <span>{metric.change}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Main Chart */}
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Market Price & Volume Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={lineChartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Line yAxisId="left" type="monotone" dataKey="price" stroke="#1A5F7A" activeDot={{ r: 8 }} />
                            <Line yAxisId="right" type="monotone" dataKey="volume" stroke="#E9B824" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Commodity Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Commodities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {commodityData.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">{item.commodity}</p>
                              <p className="text-sm text-muted-foreground">{item.price}</p>
                            </div>
                            <div className={`flex items-center ${item.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                              {item.status === 'up' ? 
                                <TrendingUp className="h-4 w-4 mr-1" /> : 
                                <TrendingDown className="h-4 w-4 mr-1" />
                              }
                              <span>{item.change > 0 ? '+' : ''}{item.change}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Bar Chart */}
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Sector Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={barChartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="sector" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#159895" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Alerts */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2 text-datasouk-gold" />
                        Market Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {alertData.map((alert, idx) => (
                          <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <div className={`h-2 w-2 rounded-full mr-2 ${
                                alert.severity === 'high' ? 'bg-red-500' :
                                alert.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
                              }`}></div>
                              <h4 className="font-medium text-sm">{alert.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground">{alert.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="regional" className="mt-0">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Regional Area Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Regional Price Index</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={areaChartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="dubai" stackId="1" stroke="#1A5F7A" fill="#1A5F7A" />
                            <Area type="monotone" dataKey="abudhabi" stackId="1" stroke="#159895" fill="#159895" />
                            <Area type="monotone" dataKey="sharjah" stackId="1" stroke="#E9B824" fill="#E9B824" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex justify-center mt-4 space-x-4">
                        {[
                          { label: "Dubai", color: "#1A5F7A" },
                          { label: "Abu Dhabi", color: "#159895" },
                          { label: "Sharjah", color: "#E9B824" }
                        ].map((region, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: region.color }}></div>
                            <span className="text-xs">{region.label}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Regional Map (Placeholder) */}
                  <Card>
                    <CardHeader>
                      <CardTitle>UAE Economic Heatmap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative h-[300px] w-full bg-muted/40 rounded-lg overflow-hidden">
                        {/* Map placeholder with stylized UAE outline */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            {/* Stylized UAE map shapes */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-24">
                              <div className="absolute top-0 left-0 w-12 h-20 bg-datasouk-blue/30 rounded-l-xl"></div>
                              <div className="absolute top-4 left-10 w-28 h-12 bg-datasouk-teal/30 rounded-r-xl"></div>
                              <div className="absolute top-0 left-16 w-8 h-8 bg-datasouk-gold/30 rounded-full"></div>
                            </div>
                            
                            {/* Data points */}
                            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-datasouk-blue rounded-full animate-pulse-slow"></div>
                            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-datasouk-teal rounded-full animate-pulse-slow"></div>
                            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-datasouk-gold rounded-full animate-pulse-slow"></div>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/50 p-2 rounded-md backdrop-blur-sm text-xs">
                          <div className="font-medium mb-1">Economic Activity Legend</div>
                          <div className="flex space-x-3">
                            {[
                              { label: "High", color: "#1A5F7A" },
                              { label: "Medium", color: "#159895" },
                              { label: "Low", color: "#E9B824" }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                                <span>{item.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="signals" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Data Signal Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Signal Strength */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-datasouk-blue" />
                      Market Signal Strength
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { name: "Price Trends", strength: 85, category: "Strong" },
                        { name: "Supply Chain Visibility", strength: 62, category: "Moderate" },
                        { name: "Demand Forecasting", strength: 74, category: "Strong" },
                        { name: "Market Sentiment", strength: 56, category: "Moderate" },
                      ].map((signal, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <p className="font-medium text-sm">{signal.name}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted">{signal.category}</span>
                            </div>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full" 
                              style={{ 
                                width: `${signal.strength}%`,
                                backgroundColor: signal.strength > 70 ? '#159895' : '#E9B824'
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>0</span>
                            <span>{signal.strength}%</span>
                            <span>100</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
